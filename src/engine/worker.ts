interface Runtime
{
	ccall(name: string, result: string, types: string[], arguments_: string[]): string;
}
interface WorkerRequest
{
	id: number;
	runtime_url: string;
	input: unknown;
}
let runtime: Promise<Runtime> | undefined;

self.onmessage = async (event: MessageEvent<WorkerRequest>): Promise<void> =>
{
	const { id, runtime_url, input } = event.data;
	try
	{
		if (!runtime)
			runtime = import(/* @vite-ignore */ runtime_url).then
			(
				(module: { default: () => Promise<Runtime> }): Promise<Runtime> => module.default(),
			);

		const instance: Runtime = await runtime;
		const source: string = JSON.stringify(input);
		if (new TextEncoder().encode(source).length > 8 * 1024 * 1024)
			throw new Error("웹 호스트 입력 상한은 8 MiB입니다.");

		const output: unknown = JSON.parse(instance.ccall("fgv_request", "string", ["string"], [source]));
		self.postMessage({ id, output });
	}
	catch (error: unknown)
	{
		self.postMessage({ id, error: error instanceof Error ? error.message : String(error) });
	}
};
