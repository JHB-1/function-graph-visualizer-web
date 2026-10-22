import { createHash } from "node:crypto";
import { copyFile, lstat, mkdir, readFile, readdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";

const legacy: string = resolve("build-legacy-pages");
const output: string = resolve("dist");
let copied: number = 0;

async function preserve(directory: string): Promise<void>
{
	for (const entry of await readdir(resolve(legacy, directory), { withFileTypes: true }))
	{
		const path: string = directory + "/" + entry.name;
		if (entry.isSymbolicLink()) throw new Error("Legacy Pages assets cannot contain links");
		if (entry.isDirectory()) { await preserve(path); continue; }
		if (!/^(assets\/[A-Za-z0-9_.-]+\.(js|css)|runtime\/core-[a-f0-9]+\/fgv-runtime\.(mjs|wasm))$/.test(path))
			throw new Error("Unexpected legacy asset path");

		const source: string = resolve(legacy, path);
		const target: string = resolve(output, path);
		try
		{
			await lstat(target);
			const digest = (bytes: Buffer): string => createHash("sha256").update(bytes).digest("hex");
			if (digest(await readFile(source)) !== digest(await readFile(target)))
				throw new Error("Immutable asset URL collision");
		}
		catch (error: unknown)
		{
			if ((error as NodeJS.ErrnoException).code !== "ENOENT") throw error;

			await mkdir(dirname(target), { recursive: true });
			await copyFile(source, target);
			++copied;
		}
	}
}

await preserve("assets");
await preserve("runtime/core-0f3c8ac");
console.log(`Preserved ${copied} immutable Pages assets`);
