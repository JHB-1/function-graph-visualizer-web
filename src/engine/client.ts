import runtime_lock from "../../runtime.lock.json";

const runtime_version: string = runtime_lock.files.map((file: { sha256: string }): string => file.sha256).join("-");

export type ObjectValue = Record<string, unknown>;

export function object(value: unknown): ObjectValue
{
	if (typeof value !== "object" || value === null || Array.isArray(value))
		throw new Error("JSON 객체가 필요합니다.");

	return value as ObjectValue;
}

export class CoreClient
{
	private readonly worker: Worker = new Worker(new URL("./worker.ts", import.meta.url), { type: "module" });
	private sequence: number = 0;
	private readonly pending: Map<number, { resolve: (value: ObjectValue) => void; reject: (error: Error) => void }> = new Map();
	constructor()
	{
		this.worker.onmessage = (event: MessageEvent<unknown>): void =>
		{
			const reply: ObjectValue = object(event.data);
			const id: number = Number(reply.id);
			const promise = this.pending.get(id);
			if (!promise)
				return;

			this.pending.delete(id);
			if (reply.error)
				promise.reject(new Error(String(reply.error)));
			else
			{
				const output: ObjectValue = object(reply.output);
				if (output.native_error)
					promise.reject(new Error(String(output.native_error)));
				else
					promise.resolve(output);
			}
		};
		this.worker.onerror = (event: ErrorEvent): void =>
		{
			for (const promise of this.pending.values())
				promise.reject(new Error(event.message));

			this.pending.clear();
		};
	}
	request(input: ObjectValue): Promise<ObjectValue>
	{
		const id: number = ++this.sequence;

		return new Promise
		(
			(resolve: (value: ObjectValue) => void, reject: (error: Error) => void): void =>
			{
				this.pending.set(id, { resolve, reject });
				const runtime_url: URL = new URL("./runtime/fgv-runtime.mjs", document.baseURI);
				runtime_url.searchParams.set("v", runtime_version);
				this.worker.postMessage({ id, input, runtime_url: runtime_url.href });
			},
		);
	}
	dispose(): void
	{
		this.worker.terminate();
		for (const promise of this.pending.values())
			promise.reject(new Error("Core worker disposed"));

		this.pending.clear();
	}
}
