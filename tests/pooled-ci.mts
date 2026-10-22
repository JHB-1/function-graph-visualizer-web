import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { mkdtemp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { test } from "node:test";

test("Pages compatibility assets preserve exact bytes and reject collisions/unknown files", async (): Promise<void> =>
{
	const root: string = await mkdtemp(join(tmpdir(), "fgv-ci-assets-"));
	try
	{
		await mkdir(join(root, "build-legacy-pages/assets"), { recursive: true });
		await mkdir(join(root, "build-legacy-pages/runtime/core-0f3c8ac"), { recursive: true });
		await writeFile(join(root, "build-legacy-pages/assets/old-hash.js"), "immutable bytes");
		const helper: string = fileURLToPath(new URL("../tools/preserve_pages.mts", import.meta.url));
		assert.equal(spawnSync(process.execPath, [helper], { cwd: root }).status, 0);
		assert.equal(await readFile(join(root, "dist/assets/old-hash.js"), "utf8"), "immutable bytes");
		assert.equal(spawnSync(process.execPath, [helper], { cwd: root }).status, 0);
		await writeFile(join(root, "dist/assets/old-hash.js"), "different bytes");
		assert.notEqual(spawnSync(process.execPath, [helper], { cwd: root }).status, 0);
		await writeFile(join(root, "dist/assets/old-hash.js"), "immutable bytes");
		await writeFile(join(root, "build-legacy-pages/assets/unexpected.json"), "{}");
		assert.notEqual(spawnSync(process.execPath, [helper], { cwd: root }).status, 0);
	}
	finally
	{
		await rm(root, { recursive: true, force: true });
	}
});

test("Pages deployment checks trusted head and rejects malformed API data", async (): Promise<void> =>
{
	const root: string = await mkdtemp(join(tmpdir(), "fgv-ci-head-"));
	try
	{
		const helper: string = new URL("../tools/pages_head.mts", import.meta.url).href;
		for (const [head, expected] of [["a".repeat(40), "true"], ["b".repeat(40), "false"], ["main", "invalid"]])
		{
			const output: string = join(root, "result-" + expected);
			const script: string = "globalThis.fetch = async () => new Response(JSON.stringify({object:{sha:process.env.TEST_HEAD}})); " +
				"await import(process.argv[1]);";
			const result = spawnSync(process.execPath, ["--input-type=module", "-e", script, helper],
				{ env: { ...process.env, GITHUB_TOKEN: "not-a-credential", GITHUB_OUTPUT: output, POOL_SHA: "a".repeat(40), TEST_HEAD: head } });
			if (expected === "invalid") assert.notEqual(result.status, 0);
			else
			{
				assert.equal(result.status, 0, result.stderr.toString());
				assert.equal(await readFile(output, "utf8"), `deploy=${expected}\n`);
			}
		}
	}
	finally
	{
		await rm(root, { recursive: true, force: true });
	}
});
