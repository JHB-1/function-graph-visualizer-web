import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import { createServer, type Server, type IncomingMessage, type ServerResponse } from "node:http";
import { test, expect } from "@playwright/test";
import type { Page } from "@playwright/test";

const servers: Server[] = [];
test.afterEach((): void => { for (const server of servers.splice(0)) { server.closeAllConnections(); server.close(); } });

async function mock_update(page: Page, invalid: boolean = false): Promise<void>
{
	const original: Buffer = await readFile("dist/update-manifest.json");
	const manifest = JSON.parse(original.toString()) as
		{ version: string; build: string; files: Array<{ path: string; bytes: number; sha256: string }> };
	const assets: Map<string, Buffer> = new Map();
	for (const file of manifest.files) assets.set(file.path, await readFile("dist/" + file.path));
	assets.set("update-manifest.json", original);
	const server: Server = createServer((request: IncomingMessage, response: ServerResponse): void =>
	{
		const path: string = new URL(request.url ?? "/", "http://127.0.0.1").pathname.slice(1) || "index.html";
		const data: Buffer | undefined = assets.get(path);
		response.writeHead(data ? 200 : 404, { "Content-Type": path.endsWith(".js") || path.endsWith(".mjs") ? "text/javascript" :
			path.endsWith(".wasm") ? "application/wasm" : path.endsWith(".html") ? "text/html" : path.endsWith(".css") ? "text/css" :
			path.endsWith(".woff2") ? "font/woff2" : "application/json",
			"Cache-Control": "no-store" });
		response.end(data);
	});
	servers.push(server);
	await new Promise<void>((ready: () => void): void => { server.listen(0, "127.0.0.1", ready); });
	const address = server.address();
	if (!address || typeof address === "string") throw new Error("Missing test server port");

	await page.goto(`http://127.0.0.1:${address.port}/`);
	await page.evaluate(async (): Promise<void> => { await navigator.serviceWorker.ready; });
	await page.reload();
	let worker: string = await readFile("dist/update-worker.js", "utf8");
	worker = worker.replaceAll(manifest.build, "f".repeat(64)).replaceAll(manifest.version, "0.2.1");
	manifest.build = "f".repeat(64);
	manifest.version = "0.2.1";
	for (const file of manifest.files)
	{
		if (file.path === "update-worker.js")
		{
			file.bytes = Buffer.byteLength(worker);
			file.sha256 = createHash("sha256").update(worker).digest("hex");
		}
		if (invalid && file.path === "index.html") file.sha256 = "0".repeat(64);
	}
	assets.set("update-worker.js", Buffer.from(worker));
	assets.set("update-manifest.json", Buffer.from(JSON.stringify(manifest)));
	await page.evaluate((): void => { document.dispatchEvent(new Event("visibilitychange")); });
}

test("new build waits without reload and explicit backup preserves graph", async ({ page }): Promise<void> =>
{
	await mock_update(page);
	await expect(page.locator("#update-notice")).toBeVisible();
	await expect(page.locator("#status")).not.toHaveText("그래프를 준비하고 있습니다…");
	const before: string = page.url();
	await page.waitForTimeout(500);
	expect(page.url()).toBe(before);
	await page.getByRole("button", { name: "현재 그래프 백업" }).click();
	await expect(page.locator("#update-notice")).toContainText("백업 완료");
	await page.reload();
	await expect(page.locator("#recovery")).toBeVisible();
	await page.getByRole("button", { name: "복구", exact: true }).click();
	await expect(page.locator("#recovery")).toBeHidden();
});

test("bad update digest cannot offer a reload", async ({ page }): Promise<void> =>
{
	await mock_update(page, true);
	await expect(page.locator("#status")).not.toHaveText("그래프를 준비하고 있습니다…");
	await page.waitForTimeout(500);
	await expect(page.locator("#update-notice")).toBeHidden();
});

test("backup failure keeps existing document and URL", async ({ page }): Promise<void> =>
{
	await mock_update(page);
	await expect(page.locator("#update-notice")).toBeVisible();
	await page.evaluate((): void => { IDBFactory.prototype.open = (): IDBOpenDBRequest => { throw new Error("storage denied"); }; });
	await page.getByRole("button", { name: "현재 그래프 백업" }).click();
	await expect(page.locator("#update-notice")).toContainText("storage denied");
	await expect(page.locator("#recovery")).toBeHidden();
});
