import { createHash } from "node:crypto";
import { execFileSync } from "node:child_process";
import { readFileSync, readdirSync } from "node:fs";
import type { Dirent } from "node:fs";

export function identity(): string
{
	const hash = createHash("sha256");
	const walk = (directory: string): void =>
	{
		for (const item of readdirSync(directory, { withFileTypes: true }).sort((a: Dirent, b: Dirent): number => a.name.localeCompare(b.name)))
		{
			const path: string = `${directory}/${item.name}`;
			if (item.isDirectory()) walk(path);
			else { hash.update(path); hash.update(readFileSync(path)); }
		}
	};
	walk("src");
	walk("public");
	walk("tools");
	for (const name of ["index.html", "package-lock.json", "runtime.lock.json", "vite.config.ts"])
		hash.update(readFileSync(name));

	hash.update(execFileSync("git", ["rev-parse", "HEAD"], { encoding: "utf8" }).trim());

	return hash.digest("hex");
}
