import { appendFile } from "node:fs/promises";
import { z } from "zod";

const response: Response = await fetch
(
	"https://api.github.com/repos/JHB-1/function-graph-visualizer-web/git/ref/heads/main",
	{ headers: { Authorization: `Bearer ${process.env.GITHUB_TOKEN}`, Accept: "application/vnd.github+json" },
		signal: AbortSignal.timeout(15000), redirect: "error" },
);
if (!response.ok) throw new Error("Unable to verify current Pages source");

const value: unknown = await response.json();
const head = z.object({ object: z.object({ sha: z.string().regex(/^[a-f0-9]{40}$/) }) }).parse(value);
const deploy: boolean = head.object.sha === process.env.POOL_SHA;
if (!process.env.GITHUB_OUTPUT) throw new Error("Missing Actions output path");

await appendFile(process.env.GITHUB_OUTPUT, `deploy=${deploy}\n`);
