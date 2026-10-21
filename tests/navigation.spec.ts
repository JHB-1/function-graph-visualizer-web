import { test, expect, type Page, type Dialog } from "@playwright/test";
import { readFile, writeFile } from "node:fs/promises";

async function ready(page: Page): Promise<void>
{
	await expect(page.locator("#status")).toContainText("정점", { timeout: 45000 });
	await expect(page.locator("#error")).toBeEmpty();
}

async function png(page: Page): Promise<Buffer>
{
	const toggle = page.getByRole("button", { name: "파일 출력 ▾", exact: true });
	if (await toggle.getAttribute("aria-expanded") !== "true")
		await toggle.click();

	const pending = page.waitForEvent("download");
	await page.getByRole("button", { name: "이미지 파일로 출력 (.png)", exact: true }).click();
	const file = await pending;

	return readFile((await file.path())!);
}

test
(
	"view history, selected fit and session bookmarks preserve geometry and reset on document replacement",
	async ({ page }: { page: Page }): Promise<void> =>
	{
		await page.goto("./");
		await ready(page);
		await page.getByRole("button", { name: "확대", exact: true }).click();
		await expect(page.locator("#document-status")).toContainText("자동 저장됨");
		await page.keyboard.press("Control+f");
		await expect(page.getByLabel("이름·ID 검색")).toBeFocused();
		await expect(page.locator("#zoom-level")).toHaveText("120%");
		await page.getByLabel("화면 이름").fill("첫 화면");
		await page.getByRole("button", { name: "현재 화면 저장", exact: true }).click();
		await page.getByRole("button", { name: "이전", exact: true }).click();
		await expect(page.locator("#zoom-level")).toHaveText("100%");
		await page.getByRole("button", { name: "다음", exact: true }).click();
		await expect(page.locator("#zoom-level")).toHaveText("120%");
		await page.getByLabel("이름·ID 검색").fill("sample:0");
		await page.locator('[data-item-id="sample:0"]').click();
		await page.getByRole("button", { name: "선택 항목에 맞춤", exact: true }).click();
		await expect(page.locator("#zoom-level")).toHaveText("1200%");
		await expect(page.locator("#graph")).toHaveAttribute("data-source-triangles", "12800");
		await page.getByRole("button", { name: "첫 화면 열기", exact: true }).click();
		await expect(page.locator("#zoom-level")).toHaveText("120%");
		await page.screenshot({ path: "test-results/view-bookmarks.png" });
		page.once("dialog", async (dialog: Dialog): Promise<void> => { await dialog.accept(); });
		await page.locator("#preset").selectOption("1");
		await expect(page.locator("#graph")).toHaveAttribute("data-dimension", "2");
		await expect(page.getByRole("button", { name: "첫 화면 열기", exact: true })).toHaveCount(0);
		await expect(page.getByRole("button", { name: "이전", exact: true })).toBeDisabled();
	}
);

test
(
	"PNG scale, alpha and selection crop are rendered without changing the document; allocation limits reject early",
	async ({ page }: { page: Page }): Promise<void> =>
	{
		await page.goto("./");
		await ready(page);
		await page.keyboard.press("Control+f");
		await page.getByLabel("이름·ID 검색").fill("sample:100");
		await page.locator('[data-item-id="sample:100"]').click();
		await page.getByRole("tab", { name: "파일", exact: true }).click();
		const document_before: string = await page.locator("#content textarea").first().inputValue();
		await page.getByLabel("PNG 배율", { exact: true }).selectOption("2×");
		await page.getByLabel("투명 배경", { exact: true }).check();
		const image: Buffer = await png(page);
		await writeFile("test-results/export-transparent-2x.png", image);
		expect(image.readUInt32BE(16)).toBe(2168);
		expect(image.readUInt32BE(20)).toBe(1800);
		const alpha: number = await page.evaluate
		(
			async (base64: string): Promise<number> =>
			{
				const bytes: Uint8Array = Uint8Array.from(atob(base64), (letter: string): number => letter.charCodeAt(0));
				const bitmap: ImageBitmap = await createImageBitmap(new Blob([bytes], { type: "image/png" }));
				const target = new OffscreenCanvas(bitmap.width, bitmap.height);
				const ink: OffscreenCanvasRenderingContext2D = target.getContext("2d")!;
				ink.drawImage(bitmap, 0, 0);
				bitmap.close();

				return ink.getImageData(0, 0, 1, 1).data[3]!;
			}, image.toString("base64"),
		);
		expect(alpha).toBe(0);
		await expect(page.locator("#content textarea").first()).toHaveValue(document_before);
		await expect(page.locator("[data-export-preview]")).toHaveCount(0);
		await page.getByLabel("출력 범위", { exact: true }).selectOption("선택 영역");
		const crop: Buffer = await png(page);
		await writeFile("test-results/export-selection.png", crop);
		expect(crop.readUInt32BE(16)).toBeLessThan(2168);
		expect(crop.readUInt32BE(20)).toBeLessThan(1800);
		await page.setViewportSize({ width: 2000, height: 1500 });
		await expect(page.locator("#graph")).toHaveAttribute("width", "1644");
		await page.getByLabel("PNG 배율", { exact: true }).selectOption("3×");
		await page.getByRole("button", { name: "이미지 파일로 출력 (.png)", exact: true }).click();
		await expect(page.locator("#error")).toContainText("4096px");
		await expect(page.locator("[data-export-preview]")).toHaveCount(0);
	}
);

test
(
	"JSON/open/search shortcuts work and graph edits block file export and replacement",
	async ({ page }: { page: Page }): Promise<void> =>
	{
		await page.goto("./");
		await ready(page);
		const download = page.waitForEvent("download");
		await page.keyboard.press("Control+s");
		expect((await download).suggestedFilename()).toBe("graph.fgv.json");
		const choosing = page.waitForEvent("filechooser");
		await page.keyboard.press("Control+o");
		const chooser = await choosing;
		await chooser.setFiles({ name: "keyboard.json", mimeType: "application/json", buffer: Buffer.from(JSON.stringify
		(
			{ kind: "dataset", dimension_count: 2, rows: [[0, 0], [1, 1]], columns: [0, 1], plot: "points" },
		)) });
		await expect(page.locator("#document-status")).toContainText("keyboard.json");
		await page.keyboard.press("Control+f");
		await expect(page.getByLabel("이름·ID 검색")).toBeFocused();
		await page.getByRole("tab", { name: "파일", exact: true }).click();
		await expect(page.getByLabel("단축키 안내")).toContainText("Ctrl/Cmd+S");
		await page.mouse.move(900, 400);
		await page.mouse.down();
		await page.mouse.move(950, 430);
		await page.keyboard.press("Control+s");
		await expect(page.locator("#error")).toContainText("조작·계산·출력");
		await page.locator("#preset").selectOption("0");
		await expect(page.locator("#preset")).toHaveValue("");
		await expect(page.locator("#document-status")).toContainText("keyboard.json");
		await page.mouse.up();
		await ready(page);
	}
);
