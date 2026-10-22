import { z } from "zod";

declare const __FGV_BUILD_ID__: string;
declare const __FGV_VERSION__: string;
export const build_id: string = typeof __FGV_BUILD_ID__ === "string" ? __FGV_BUILD_ID__ : "embedded";
const metadata = z.object
({
	schema: z.literal(1), product: z.literal("fgv"), component: z.literal("web"),
	version: z.string().regex(/^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)$/), build: z.string().regex(/^[a-f0-9]{64}$/),
	files: z.array(z.object({ path: z.string(), bytes: z.number().int().min(0).max(32 * 1024 * 1024),
		sha256: z.string().regex(/^[a-f0-9]{64}$/) }).strict()).max(100),
}).strict();
type Build = z.infer<typeof metadata>;

async function bounded(response: Response, maximum: number): Promise<Uint8Array>
{
	if (!response.ok || !response.body)
		throw new Error("업데이트 원본에 연결할 수 없습니다.");

	const reader: ReadableStreamDefaultReader<Uint8Array> = response.body.getReader();
	const chunks: Uint8Array[] = [];
	let size: number = 0;
	try
	{
		while (true)
		{
			const { done, value } = await reader.read();
			if (done)
				break;

			size += value.byteLength;
			if (maximum < size)
				throw new Error("업데이트 크기 상한을 초과했습니다.");

			chunks.push(value);
		}
	}
	finally
	{
		await reader.cancel();
	}
	const result: Uint8Array = new Uint8Array(size);
	let offset: number = 0;
	for (const chunk of chunks)
	{
		result.set(chunk, offset);
		offset += chunk.byteLength;
	}

	return result;
}

async function available(base: URL): Promise<Build>
{
	const response: Response = await fetch(new URL("update-manifest.json", base), { cache: "no-store", redirect: "error",
		signal: AbortSignal.timeout(15000), credentials: "omit" });
	const candidate: Build = metadata.parse(JSON.parse(new TextDecoder().decode(await bounded(response, 65536))));
	const installed: string = typeof __FGV_VERSION__ === "string" ? __FGV_VERSION__ : "0.0.0";
	const current: bigint[] = installed.split(".").map(BigInt);
	const incoming: bigint[] = candidate.version.split(".").map(BigInt);
	for (let index: number = 0; index < 3; ++index)
		if (current[index] !== incoming[index])
		{
			if (incoming[index]! < current[index]!) throw new Error("이전 버전은 적용하지 않습니다.");

			break;
		}

	if (candidate.build === build_id)
		return candidate;

	const file = candidate.files.find((entry: Build["files"][number]): boolean => entry.path === "index.html");
	if (!file || file.bytes > 1024 * 1024)
		throw new Error("업데이트 시작 파일이 없습니다.");

	const entry: Response = await fetch(new URL(file.path, base), { cache: "no-store", redirect: "error",
		signal: AbortSignal.timeout(15000), credentials: "omit" });
	const bytes: Uint8Array = await bounded(entry, file.bytes);
	const digest: ArrayBuffer = await crypto.subtle.digest("SHA-256", bytes as Uint8Array<ArrayBuffer>);
	const hex: string = Array.from(new Uint8Array(digest), (value: number): string => value.toString(16).padStart(2, "0")).join("");
	if (bytes.byteLength !== file.bytes || hex !== file.sha256)
		throw new Error("업데이트 파일 검증에 실패했습니다. 현재 그래프를 유지합니다.");

	return candidate;
}

export function watch_updates(backup: () => Promise<void>): () => void
{
	// 공식 Pages 원본과 로컬 개발만 허용, MCP/로컬 앱은 자체 호스트 경로 사용
	if (!("serviceWorker" in navigator) ||
		(location.origin !== "https://jhb-1.github.io" && !["127.0.0.1", "localhost"].includes(location.hostname)))
		return (): void => {};

	const base: URL = new URL("./", location.href);
	const panel: HTMLElement = document.createElement("section");
	panel.id = "update-notice";
	panel.hidden = true;
	panel.setAttribute("aria-label", "업데이트");
	panel.setAttribute("role", "status");
	const text: HTMLParagraphElement = document.createElement("p");
	const button: HTMLButtonElement = document.createElement("button");
	button.textContent = "현재 그래프 백업";
	button.disabled = true;
	panel.append(text, button);
	document.querySelector("#stage")!.append(panel);
	let stopped: boolean = false;
	let checking: boolean = false;
	let candidate: Build | undefined;
	let registration: ServiceWorkerRegistration | undefined;
	const ready = (): void =>
	{
		if (stopped || !registration?.waiting || !candidate)
			return;

		text.textContent = "새 버전 검증 완료. 그래프를 백업하고 모든 FGV 탭을 닫은 뒤 다시 열면 적용됩니다. 시작 화면에서 복구를 선택하세요.";
		button.disabled = false;
		panel.hidden = false;
	};
	const check = async (): Promise<void> =>
	{
		if (stopped || checking || document.visibilityState === "hidden")
			return;

		checking = true;
		try
		{
			const next: Build = await available(base);
			if (!stopped && next.build !== build_id)
			{
				candidate = next;
				text.textContent = "새 버전 다운로드와 검증 중. 현재 그래프를 유지합니다.";
				panel.hidden = false;
				await registration?.update();
				ready();
			}
		}
		catch { /* 오프라인 확인 실패 시 현재 화면 유지 */ }
		finally { checking = false; }
	};
	button.onclick = (): void =>
	{
		void (async (): Promise<void> =>
		{
			button.disabled = true;
			try
			{
				const next: Build = await available(base);
				if (!candidate || JSON.stringify(next) !== JSON.stringify(candidate))
					throw new Error("배포 버전이 변경됐습니다. 다시 확인하세요.");

				await backup();
				text.textContent = "백업 완료. 모든 FGV 탭을 닫은 뒤 다시 열고 복구를 선택하세요. 자동 새로고침은 하지 않습니다.";
			}
			catch (error: unknown) { text.textContent = String(error); }
			finally { button.disabled = false; }
		})();
	};
	const interval: ReturnType<typeof setInterval> = setInterval((): void => { void check(); }, 5 * 60 * 1000);
	const visibility = (): void => { void check(); };
	document.addEventListener("visibilitychange", visibility);
	void navigator.serviceWorker.register(new URL("update-worker.js", base), { updateViaCache: "none" }).then
	(
		(value: ServiceWorkerRegistration): void =>
		{
			registration = value;
			value.addEventListener("updatefound", (): void =>
			{
				const worker: ServiceWorker | null = value.installing;
				worker?.addEventListener("statechange", ready);
			});
			void check();
		},
		(): void => {},
	);

	return (): void =>
	{
		stopped = true;
		clearInterval(interval);
		document.removeEventListener("visibilitychange", visibility);
		panel.remove();
	};
}
