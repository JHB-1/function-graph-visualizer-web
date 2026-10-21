import { createHash } from "node:crypto";
import { readFile, mkdir, writeFile } from "node:fs/promises";

interface RuntimeFile { name: string; url: string; sha256: string }
interface RuntimeLock { files: RuntimeFile[]; core_commit: string; emscripten: string }
const root: URL = new URL("../", import.meta.url);
const lock: RuntimeLock = JSON.parse(await readFile(new URL("runtime.lock.json", root), "utf8")) as RuntimeLock;
const downloaded: Array<{ name: string; data: Uint8Array }> = [];
for (const file of lock.files)
{
	if (!/^fgv-runtime\.(mjs|wasm)$/.test(file.name))
		throw new Error("Invalid runtime filename");

	const response: Response = await fetch(file.url);
	if (!response.ok)
		throw new Error(`Runtime download failed: ${response.status} ${file.name}`);

	const data: Uint8Array = new Uint8Array(await response.arrayBuffer());
	if (createHash("sha256").update(data).digest("hex") !== file.sha256)
		throw new Error(`Runtime SHA-256 mismatch: ${file.name}`);

	downloaded.push({ name: file.name, data });
}

await mkdir(new URL("public/runtime/", root), { recursive: true });
for (const file of downloaded)
	await writeFile(new URL(`public/runtime/${file.name}`, root), file.data);

console.log(`Verified runtime: core ${lock.core_commit}, Emscripten ${lock.emscripten}`);
