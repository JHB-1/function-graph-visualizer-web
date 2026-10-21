import { z } from "zod";
import { object, type ObjectValue } from "./engine/client";
import { get_workspace_host, storage_key } from "./host";

export interface DocumentValue { spec: ObjectValue; history: ObjectValue[] }
export interface RecoveryRecord { version: 1; name: string; document: DocumentValue }
export const document_limit: number = 1024 * 1024;

function finite_values(value: unknown): void
{
	if (typeof value === "number" && !Number.isFinite(value))
		throw new Error("유한한 숫자가 필요합니다.");

	if (Array.isArray(value))
		for (const child of value)
			finite_values(child);
	else if (value !== null && typeof value === "object")
		for (const child of Object.values(value))
			finite_values(child);
}

export function parse_document(text: string): DocumentValue
{
	if (new TextEncoder().encode(text).length > document_limit)
		throw new Error("문서 파일 상한은 1 MiB입니다.");

	const value: ObjectValue = object(JSON.parse(text));
	const wrapper = z.object({ spec: z.record(z.string(), z.unknown()),
		history: z.array(z.record(z.string(), z.unknown())).max(128).default([]) }).strict();
	const candidate: DocumentValue = value.spec === undefined ? { spec: value, history: [] } : wrapper.parse(value);
	z.object({ kind: z.enum(["function", "dataset", "histogram"]),
		dimension_count: z.number().int().min(1).max(64), version: z.literal(1).optional() }).passthrough().parse(candidate.spec);
	finite_values(candidate);

	return candidate;
}

export function parse_recovery(value: unknown): RecoveryRecord
{
	const record = z.object({ version: z.literal(1), name: z.string().max(256), document: z.unknown() }).strict().parse(value);

	return { version: 1, name: record.name, document: parse_document(JSON.stringify(record.document)) };
}

async function transact<T>(mode: IDBTransactionMode, make_request: (store: IDBObjectStore) => IDBRequest<T>): Promise<T>
{
	const database: IDBDatabase = await new Promise
	(
		(resolve: (value: IDBDatabase) => void, reject: (error: Error) => void): void =>
		{
			const request: IDBOpenDBRequest = indexedDB.open(get_workspace_host()?.storage_namespace ?? "fgv-workspace", 1);
			let blocked: boolean = false;
			request.onupgradeneeded = (): void => { request.result.createObjectStore("work"); };
			request.onerror = (): void => reject(request.error ?? new Error("로컬 저장소 열기 실패"));
			request.onblocked = (): void =>
			{
				blocked = true;
				reject(new Error("다른 창이 로컬 저장소를 사용하고 있습니다."));
			};
			request.onsuccess = (): void =>
			{
				if (blocked)
					request.result.close();
				else
					resolve(request.result);
			};
		},
	);
	try
	{
		return await new Promise
		(
			(resolve: (value: T) => void, reject: (error: Error) => void): void =>
			{
				const transaction: IDBTransaction = database.transaction("work", mode);
				const request: IDBRequest<T> = make_request(transaction.objectStore("work"));
				transaction.oncomplete = (): void => resolve(request.result);
				transaction.onabort = (): void => reject(transaction.error ?? new Error("로컬 저장 실패"));
				transaction.onerror = (): void => reject(transaction.error ?? new Error("로컬 저장 실패"));
			},
		);
	}
	finally
	{
		database.close();
	}
}

let writes: Promise<void> = Promise.resolve();
let previous_tab: string | null = null;
let tab_claim: Promise<string> | undefined;

function claim_tab(): Promise<string>
{
	if (tab_claim)
		return tab_claim;

	previous_tab = sessionStorage.getItem(storage_key("draft-id"));
	const acquire = (id: string): Promise<string> => new Promise
	(
		(resolve: (value: string) => void, reject: (error: Error) => void): void =>
		{
			if (!navigator.locks)
			{
				resolve(crypto.randomUUID());

				return;
			}

			void navigator.locks.request
			(
				`${storage_key("draft")}:${id}`, { ifAvailable: true }, async (lock: Lock | null): Promise<void> =>
				{
					if (!lock)
					{
						resolve(await acquire(crypto.randomUUID()));

						return;
					}

					resolve(id);
					await new Promise<void>((release: () => void): void =>
					{
						window.addEventListener("pagehide", (): void => release(), { once: true });
					});
				},
			).catch((error: unknown): void => reject(error instanceof Error ? error : new Error(String(error))));
		},
	);
	tab_claim = acquire(previous_tab ?? crypto.randomUUID()).then
	(
		(id: string): string =>
		{
			sessionStorage.setItem(storage_key("draft-id"), id);

			return id;
		},
	);

	return tab_claim;
}

export async function read_recovery(): Promise<unknown>
{
	const provider = get_workspace_host()?.drafts;
	if (provider)
		return provider.read();

	const tab: string = await claim_tab();
	const values: unknown[] = await transact("readonly", (store: IDBObjectStore): IDBRequest<unknown[]> => store.getAll());
	const records = z.array(z.object({ tab: z.string(), updated_at: z.number().finite(), record: z.unknown() }).strict()).parse(values);
	const preferred = records.find((entry: typeof records[number]): boolean => entry.tab === tab) ??
		records.find((entry: typeof records[number]): boolean => entry.tab === previous_tab);
	records.sort((a: typeof records[number], b: typeof records[number]): number => b.updated_at - a.updated_at);

	return (preferred ?? records[0])?.record;
}

export function store_recovery(value: RecoveryRecord | undefined, all: boolean = false): Promise<void>
{
	const write: Promise<void> = writes.then
	(
		async (): Promise<void> =>
		{
			const provider = get_workspace_host()?.drafts;
			if (provider)
			{
				if (value)
					parse_recovery(value);

				return provider.store(value, all);
			}

			const tab: string = await claim_tab();
			if (all)
				await transact("readwrite", (store: IDBObjectStore): IDBRequest<undefined> => store.clear());
			else if (value === undefined)
				await transact("readwrite", (store: IDBObjectStore): IDBRequest<undefined> => store.delete(tab));
			else
			{
				parse_recovery(value);
				await transact
				(
					"readwrite", (store: IDBObjectStore): IDBRequest<IDBValidKey> =>
						store.put({ tab, updated_at: Date.now(), record: value }, tab),
				);
			}
		},
	);
	writes = write.catch((): void => {});

	return write;
}
