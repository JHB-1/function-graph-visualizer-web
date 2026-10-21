import { test, expect, type Page } from "@playwright/test";
import { readFile } from "node:fs/promises";

async function ready(page: Page): Promise<void>
{
	await expect(page.locator("#status")).toContainText("정점", { timeout: 45000 });
	await expect(page.locator("#error")).toBeEmpty();
	await page.evaluate(async (): Promise<void> => { await document.fonts.ready; });
}
test('every preset renders, full-screen resize and categories', async ({ page }: { page: Page }): Promise<void> =>
{
	const errors: string[] = [];
	page.on("pageerror", (error: Error): void => { errors.push(error.message); });
	await page.goto('./');
	await ready(page);
	for (let index: number = 0; index < 9; ++index)
	{
		await page.locator("#preset").selectOption(String(index));
		await ready(page);
		await page.screenshot({ path: `test-results/preset-${index}.png` });
	}

	await page.setViewportSize({ width: 1100, height: 760 });
	await expect(page.locator("#graph")).toHaveAttribute("width", "744");
	await expect(page.locator("#graph")).toHaveAttribute("height", "760");
	for (const tab of ['axes', 'style', 'camera', 'stream', 'document', 'diagnostics'])
	{
		await page.locator(`[data-tab="${tab}"]`).click();
		await expect(page.locator("#content h2").first()).toBeVisible();
	}

	await page.getByRole('button', { name: '조작부 접기', exact: true }).click();
	await expect(page.getByRole('button', { name: '조작부 열기', exact: true })).toBeVisible();
	await expect(page.locator("#graph")).toHaveAttribute("width", "1044");
	await page.screenshot({ path: 'test-results/full-screen.png' });
	expect(errors).toEqual([]);
});
test('common workspace tokens, fonts, keyboard tabs and mobile overlay', async ({ page }: { page: Page }): Promise<void> =>
{
	await page.goto('./');
	await ready(page);
	await expect(page).toHaveTitle("Function Graph Visualizer");
	await expect(page.locator(".tab-rail")).toHaveCSS("width", "56px");
	await expect(page.locator("#sidebar")).toHaveCSS("width", "300px");
	await expect(page.locator("#graph")).toHaveAttribute("width", "1084");
	await expect(page.getByLabel("수식", { exact: true })).toHaveCSS("font-family", /Consolas/);
	expect(await page.evaluate((): boolean => Array.from(document.fonts).some
	(
		(face: FontFace): boolean => face.family.includes("Pretendard") && face.status === "loaded",
	))).toBe(true);
	expect(await page.locator("#labels").evaluate
	(
		(canvas: HTMLCanvasElement): string => canvas.getContext("2d")!.font,
	)).toContain("Pretendard");
	await page.getByRole("tab", { name: "입력", exact: true }).focus();
	await page.keyboard.press("ArrowDown");
	await expect(page.getByRole("tab", { name: "스타일", exact: true })).toBeFocused();
	await expect(page.getByRole("tab", { name: "스타일", exact: true })).toHaveAttribute("aria-selected", "true");
	await expect(page.getByRole("tabpanel")).toHaveAttribute("aria-labelledby", "tab-style");
	await expect(page.locator("#apply")).toBeHidden();
	await page.screenshot({ path: "test-results/workspace-desktop.png" });
	await page.setViewportSize({ width: 390, height: 844 });
	await expect(page.locator(".tab-rail")).toHaveCSS("width", "48px");
	await expect(page.locator("#graph")).toHaveAttribute("width", "342");
	await page.getByRole("button", { name: "조작부 접기", exact: true }).click();
	await expect(page.locator("#sidebar")).toBeHidden();
	await page.screenshot({ path: "test-results/workspace-mobile.png" });
	await page.getByRole("button", { name: "확대", exact: true }).click();
	await expect(page.locator("#zoom-level")).not.toHaveText("100%");
	await page.getByRole("button", { name: "그래프 맞춤", exact: true }).click();
	await ready(page);
	await expect(page.locator("#zoom-level")).toHaveText("100%");
	await page.getByRole("tab", { name: "입력", exact: true }).click();
	await expect(page.locator("#sidebar")).toBeVisible();
	await page.keyboard.press("Escape");
	await expect(page.locator("#sidebar")).toBeHidden();
	await expect(page.getByRole("button", { name: "조작부 열기", exact: true })).toBeFocused();
});
test('live style keeps focus and geometry; file menu exports resolved core style', async ({ page }: { page: Page }): Promise<void> =>
{
	await page.goto('./');
	await ready(page);
	const vertices: string | null = await page.locator("#graph").getAttribute("data-source-triangles");
	await page.getByRole("tab", { name: "스타일", exact: true }).click();
	const line = page.getByLabel("곡선 굵기", { exact: true });
	await line.fill("3.2");
	await expect.poll(async (): Promise<number> => Number(await page.locator("#graph").getAttribute("data-frames"))).toBeGreaterThan(2);
	await ready(page);
	await expect(line).toBeFocused();
	await expect(line).toHaveValue("3.2");
	await expect(page.locator("#graph")).toHaveAttribute("data-source-triangles", vertices!);
	await line.fill("-2");
	await expect(page.locator("#error")).toContainText("유효한 스타일");
	await expect(page.locator("#graph")).toHaveAttribute("data-source-triangles", vertices!);
	await line.fill("3.2");
	await expect(page.locator("#error")).toBeEmpty();
	await page.getByLabel("곡면 색상", { exact: true }).evaluate
	(
		(input: HTMLInputElement): void =>
		{
			input.value = "#112233";
			input.dispatchEvent(new Event("input", { bubbles: true }));
		},
	);
	await page.waitForTimeout(220);
	await ready(page);
	await page.getByRole("tab", { name: "파일", exact: true }).click();
	await expect(page.locator("#content textarea").first()).toHaveCSS("font-family", /Consolas/);
	await page.getByRole("button", { name: "파일 출력 ▾", exact: true }).click();
	await expect(page.locator("#export-toggle")).toHaveAttribute("aria-expanded", "true");
	const downloaded = page.waitForEvent("download");
	await page.getByRole("button", { name: "코어 결과로 출력 (.json)", exact: true }).click();
	const file = await downloaded;
	const result: { style: { line_width: number; surface: number[] } } = JSON.parse(await readFile((await file.path())!, "utf8"));
	expect(result.style.line_width).toBe(3.2);
	expect(result.style.surface.slice(0, 3)).toEqual([17, 34, 51]);
	const image_download = page.waitForEvent("download");
	await page.getByRole("button", { name: "이미지 파일로 출력 (.png)", exact: true }).click();
	const image = await image_download;
	const bytes = await readFile((await image.path())!);
	expect(bytes.subarray(0, 8).toString("hex")).toBe("89504e470d0a1a0a");
	expect(bytes.readUInt32BE(16)).toBe(1084);
	expect(bytes.readUInt32BE(20)).toBe(900);
	await page.locator("#export-toggle").focus();
	await page.keyboard.press("Escape");
	await expect(page.locator("#export-toggle")).toHaveAttribute("aria-expanded", "false");
});
test('rotation, pan, wheel, theme and invalid document preserve the graph', async ({ page }: { page: Page }): Promise<void> =>
{
	await page.goto('./');
	await ready(page);
	const before: string | null = await page.locator('#graph').getAttribute('data-frames');
	await page.mouse.move(1000, 420);
	await page.mouse.down({ button: 'right' });
	await page.mouse.move(1200, 530, { steps: 20 });
	expect(Number(await page.locator('#graph').getAttribute('data-frames'))).toBeGreaterThan(Number(before));
	await page.mouse.up({ button: 'right' });
	await ready(page);
	await page.mouse.wheel(0, -200);
	await page.waitForTimeout(400);
	await ready(page);
	await page.mouse.move(1100, 420);
	await page.mouse.down();
	await page.mouse.move(1000, 450, { steps: 5 });
	await page.mouse.up();
	await ready(page);
	await page.getByRole('button', { name: '라이트/다크 모드' }).click();
	await page.screenshot({ path: 'test-results/interaction-theme.png' });
	await page.locator('[data-tab="document"]').click();
	await page.locator('#content textarea').first().fill('{"kind":"dataset","dimension_count":2,"rows":[[1]],"columns":[0,1]}');
	await page.getByRole('button', { name: '문서 적용', exact: true }).click();
	await expect(page.locator('#error')).toContainText('each row');
	await expect(page.locator('#graph')).toHaveAttribute('data-ready', 'true');
});
