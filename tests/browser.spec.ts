import { test, expect, type Page } from "@playwright/test";

async function ready(page: Page): Promise<void>
{
	await expect(page.locator("#status")).toContainText("정점", { timeout: 45000 });
	await expect(page.locator("#error")).toBeEmpty();
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
	await expect(page.locator("#graph")).toHaveAttribute("width", "1100");
	await expect(page.locator("#graph")).toHaveAttribute("height", "760");
	for (const tab of ['axes', 'style', 'camera', 'stream', 'document', 'diagnostics'])
	{
		await page.locator(`[data-tab="${tab}"]`).click();
		await expect(page.locator("#content h2").first()).toBeVisible();
	}

	await page.getByRole('button', { name: '조작부 접기', exact: true }).click();
	await expect(page.getByRole('button', { name: '조작부 열기', exact: true })).toBeVisible();
	await page.screenshot({ path: 'test-results/full-screen.png' });
	expect(errors).toEqual([]);
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
