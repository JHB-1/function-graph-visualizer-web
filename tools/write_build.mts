import { createHash } from "node:crypto";
import { readFile, readdir, writeFile } from "node:fs/promises";
import { identity } from "./build_identity.mts";

const manifest = JSON.parse(await readFile("package.json", "utf8")) as { version: string };
const build: string = identity();
await writeFile("dist/update-worker.js", (await readFile("tools/update-worker.js", "utf8"))
	.replaceAll("__FGV_BUILD__", build).replaceAll("__FGV_VERSION__", manifest.version));
const files: Array<{ path: string; bytes: number; sha256: string }> = [];
async function walk(directory: string, prefix: string = ""): Promise<void>
{
	for (const item of await readdir(directory, { withFileTypes: true }))
	{
		const path: string = prefix + item.name;
		if (path === "update-manifest.json") continue;
		if (item.isSymbolicLink()) throw new Error("Release assets cannot contain symlinks");

		if (item.isDirectory()) await walk(directory + "/" + item.name, path + "/");
		else
		{
			const bytes: Buffer = await readFile(directory + "/" + item.name);
			files.push({ path, bytes: bytes.length, sha256: createHash("sha256").update(bytes).digest("hex") });
		}
	}
}
await walk("dist");
files.sort((left: typeof files[number], right: typeof files[number]): number => left.path.localeCompare(right.path));
await writeFile("dist/update-manifest.json", JSON.stringify({ schema: 1, product: "fgv", component: "web",
	version: manifest.version, build, files }) + "\n");
