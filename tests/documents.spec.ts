import { test, expect, type Page, type Dialog } from "@playwright/test";
import { readFile } from "node:fs/promises";

const specimen = { spec: { version: 1, kind: "dataset", dimension_count: 2,
	rows: [[1, 2], [3, 4], [5, 6]], columns: [0, 1], plot: "points", presentation: { title: "검증 문서" } },
	history: [{ erase: [1], append: [[7, 8]] }] };

async function ready(page: Page): Promise<void>
{
	await expect(page.locator("#status")).toContainText("정점", { timeout: 45000 });
	await expect(page.locator("#error")).toBeEmpty();
}

async function open_document(page: Page, value: unknown, name: string = "example.json"): Promise<void>
{
	await page.getByRole("tab", { name: "파일", exact: true }).click();
	await page.getByLabel("파일 열기 (.json)", { exact: true }).setInputFiles
	(
		{ name, mimeType: "application/json", buffer: Buffer.from(JSON.stringify(value)) },
	);
}

async function exported(page: Page): Promise<Record<string, unknown>>
{
	await page.getByRole("tab", { name: "파일", exact: true }).click();
	await page.getByRole("button", { name: "파일 출력 ▾", exact: true }).click();
	const pending = page.waitForEvent("download");
	await page.getByRole("button", { name: "그래프 문서로 출력 (.json)", exact: true }).click();
	const download = await pending;

	return JSON.parse(await readFile((await download.path())!, "utf8")) as Record<string, unknown>;
}

test
(
	"document files roundtrip original IDs, item selection/find and invalid imports preserve the document",
	async ({ page }: { page: Page }): Promise<void> =>
	{
		await page.goto("./");
		await ready(page);
		await open_document(page, specimen);
		await expect(page.locator("#document-status")).toContainText("example.json");
		await expect(page.locator("#graph")).toHaveAttribute("data-revision", "2");
		expect(await exported(page)).toEqual(specimen);
		await page.getByRole("tab", { name: "항목", exact: true }).click();
		await expect(page.locator('[data-item-id="row:1"]')).toHaveCount(0);
		await page.getByLabel("이름·ID 검색").fill("row:3");
		await page.locator('[data-item-id="row:3"]').click();
		await expect(page.locator('[data-item-id="row:3"]')).toHaveAttribute("aria-pressed", "true");
		await expect(page.locator("#item-marker")).toBeVisible();
		await page.screenshot({ path: "test-results/items-selected.png" });
		await page.getByRole("button", { name: "위치 찾기", exact: true }).click();
		await expect(page.locator("#document-status")).toContainText("미저장");
		await expect(page.locator("#document-status")).toContainText("자동 저장됨");
		page.on("dialog", async (dialog: Dialog): Promise<void> => { await dialog.accept(); });
		const before: Record<string, unknown> = await exported(page);
		for (const invalid of [{ spec: { ...specimen.spec, version: 2 }, history: [] },
			{ spec: specimen.spec, history: [{ erase: [999] }] }, { ...specimen, spec: { ...specimen.spec, rows: [[1]] } }])
		{
			await open_document(page, invalid, "bad.json");
			await expect(page.locator("#error")).not.toBeEmpty();
			await expect(page.locator("#document-status")).toContainText("example.json");
			expect(await exported(page)).toEqual(before);
		}

		await page.getByLabel("파일 열기 (.json)", { exact: true }).setInputFiles
		(
			{ name: "large.json", mimeType: "application/json", buffer: Buffer.alloc(1024 * 1024 + 1, 32) },
		);
		await expect(page.locator("#error")).toContainText("1 MiB");
		await page.screenshot({ path: "test-results/items-document.png" });
	}
);

test
(
	"autosave waits for recovery choice, restores history and removes records when disabled",
	async ({ page }: { page: Page }): Promise<void> =>
	{
		await page.goto("./");
		await ready(page);
		await open_document(page, specimen, "recover.json");
		await expect(page.locator("#document-status")).toContainText("자동 저장됨");
		await page.reload();
		await ready(page);
		await expect(page.getByRole("region", { name: "작업 복구" })).toBeVisible();
		await expect(page.locator("#document-status")).toContainText("복구 선택 대기");
		await page.screenshot({ path: "test-results/recovery-choice.png" });
		await page.waitForTimeout(600);
		await page.reload();
		await ready(page);
		await expect(page.locator("#document-status")).toContainText("복구 선택 대기");
		await page.getByRole("button", { name: "복구", exact: true }).click();
		await expect(page.locator("#document-status")).toContainText("recover.json");
		await expect(page.locator("#graph")).toHaveAttribute("data-revision", "2");
		await expect(page.locator("#document-status")).toContainText("자동 저장됨");
		await page.getByRole("tab", { name: "파일", exact: true }).click();
		await page.getByLabel("자동 저장", { exact: true }).uncheck();
		await expect(page.locator("#document-status")).toContainText("자동 저장 꺼짐");
		expect(await page.evaluate
		(
			(): Promise<unknown> => new Promise
			(
				(resolve: (value: unknown) => void): void =>
				{
					const open: IDBOpenDBRequest = indexedDB.open("fgv-workspace", 1);
					open.onsuccess = (): void =>
					{
						const db: IDBDatabase = open.result;
						const tx: IDBTransaction = db.transaction("work", "readonly");
						const read: IDBRequest<unknown> = tx.objectStore("work").get(sessionStorage.getItem("fgv-draft-id")!);
						tx.oncomplete = (): void => { db.close(); resolve(read.result); };
					};
				},
			),
		)).toBeUndefined();
		await page.reload();
		await ready(page);
		await expect(page.locator("#recovery")).toBeHidden();
		await page.getByRole("tab", { name: "파일", exact: true }).click();
		await expect(page.getByLabel("자동 저장", { exact: true })).not.toBeChecked();
	}
);

test
(
	"unsaved replacement can be cancelled; drop import, discard and new document",
	async ({ page }: { page: Page }): Promise<void> =>
	{
		await page.goto("./");
		await ready(page);
		await page.getByLabel("수식", { exact: true }).fill("x+y");
		await expect(page.locator("#document-status")).toContainText("미저장");
		page.once("dialog", async (dialog: Dialog): Promise<void> => { await dialog.dismiss(); });
		await page.locator("#preset").selectOption("1");
		await expect(page.locator("#preset")).toHaveValue("0");
		await expect(page.getByLabel("수식", { exact: true })).toHaveValue("x+y");
		page.once("dialog", async (dialog: Dialog): Promise<void> => { await dialog.accept(); });
		await page.locator("#stage").evaluate
		(
			(stage: HTMLElement, text: string): void =>
			{
				const data = new DataTransfer();
				data.items.add(new File([text], "dropped.json", { type: "application/json" }));
				stage.dispatchEvent(new DragEvent("drop", { bubbles: true, dataTransfer: data }));
			}, JSON.stringify(specimen),
		);
		await expect(page.locator("#document-status")).toContainText("dropped.json");
		await expect(page.locator("#document-status")).toContainText("자동 저장됨");
		await page.reload();
		await ready(page);
		await page.getByRole("button", { name: "버리기", exact: true }).click();
		await expect(page.locator("#recovery")).toBeHidden();
		await page.getByRole("tab", { name: "파일", exact: true }).click();
		await page.getByRole("button", { name: "새 문서", exact: true }).click();
		await expect(page.locator("#status")).toContainText("0 정점");
		await expect(page.locator("#document-status")).toContainText("새 문서");
	}
);

test
(
	"storage failure keeps the graph and reports a visible error",
	async ({ page }: { page: Page }): Promise<void> =>
	{
		await page.addInitScript
		(
			(): void =>
			{
				Object.defineProperty(window, "indexedDB", { get: (): never => { throw new Error("storage blocked"); } });
			},
		);
		await page.goto("./");
		await ready(page);
		await expect(page.locator("#document-status")).toContainText("로컬 저장소 오류");
		await open_document(page, specimen);
		await expect(page.locator("#document-status")).toContainText("자동 저장 실패");
		await expect(page.locator("#graph")).toHaveAttribute("data-revision", "2");
	}
);

test
(
	"cloned tabs isolate autosave and discard; explicit clear removes all product records",
	async ({ page }: { page: Page }): Promise<void> =>
	{
		await page.goto("./");
		await ready(page);
		await open_document(page, specimen, "first-tab.json");
		await expect(page.locator("#document-status")).toContainText("자동 저장됨");
		const first_id: string = await page.evaluate((): string => sessionStorage.getItem("fgv-draft-id")!);
		const twin: Page = await page.context().newPage();
		try
		{
			await twin.addInitScript((id: string): void => { sessionStorage.setItem("fgv-draft-id", id); }, first_id);
			await twin.goto(page.url());
			await ready(twin);
			await expect(twin.locator("#recovery")).toBeVisible();
			expect(await twin.evaluate((): string | null => sessionStorage.getItem("fgv-draft-id"))).not.toBe(first_id);
			await twin.getByRole("button", { name: "버리기", exact: true }).click();
			await expect(twin.locator("#recovery")).toBeHidden();
			await twin.getByRole("tab", { name: "파일", exact: true }).click();
			await twin.getByLabel("자동 저장", { exact: true }).uncheck();
			await expect(twin.locator("#document-status")).toContainText("자동 저장 꺼짐");
			await page.reload();
			await ready(page);
			await expect(page.locator("#recovery")).toBeVisible();
			await expect(page.locator("#document-status")).toContainText("복구 선택 대기");
			twin.once("dialog", async (dialog: Dialog): Promise<void> => { await dialog.accept(); });
			await twin.getByRole("button", { name: "로컬 기록 지우기", exact: true }).click();
			await expect(twin.locator("#document-status")).toContainText("자동 저장 꺼짐");
			await page.reload();
			await ready(page);
			await expect(page.locator("#recovery")).toBeHidden();
		}
		finally
		{
			await twin.close();
		}
	}
);
