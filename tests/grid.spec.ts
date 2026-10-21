import { test, expect, type Page, type Dialog, type Request } from "@playwright/test";

async function ready(page: Page): Promise<void>
{
	await expect(page.locator("#status")).toContainText("정점", { timeout: 45000 });
	await expect(page.locator("#error")).toBeEmpty();
}

async function vertical_centers(page: Page): Promise<{ centers: number[]; width: number }>
{
	return page.locator("#graph").evaluate
	(
		(canvas: HTMLCanvasElement): { centers: number[]; width: number } =>
		{
			const gl: WebGL2RenderingContext = canvas.getContext("webgl2")!;
			const pixels = new Uint8Array(canvas.width * 4);
			gl.readPixels(0, canvas.height - 18, canvas.width, 1, gl.RGBA, gl.UNSIGNED_BYTE, pixels);
			const centers: number[] = [];
			let first: number = -1;
			for (let x: number = 0; x <= canvas.width; ++x)
			{
				const colored: boolean = x < canvas.width && pixels[x * 4]! > 200 &&
					pixels[x * 4 + 1]! < 180 && pixels[x * 4 + 2]! > 200;
				if (colored && first < 0)
					first = x;
				else if (!colored && first >= 0)
				{
					centers.push((first + x - 1) / 2);
					first = -1;
				}
			}

			return { centers, width: canvas.width };
		},
	);
}

async function full_uniform_grid(page: Page): Promise<void>
{
	await expect
	(
		async (): Promise<void> =>
		{
			const { centers, width } = await vertical_centers(page);
			expect(centers.length).toBeGreaterThan(20);
			const step: number = centers[1]! - centers[0]!;
			expect(centers[0]!).toBeLessThan(step + 2);
			expect(width - centers.at(-1)!).toBeLessThan(step + 2);
			for (let i: number = 2; i < centers.length; ++i)
				expect(Math.abs((centers[i]! - centers[i - 1]!) - step)).toBeLessThanOrEqual(1);
		},
	).toPass({ timeout: 10000, intervals: [100, 200] });
}

test
(
	"equal grid spacing fills aspect padding, pan, zoom and wide viewport",
	async ({ page }: { page: Page }): Promise<void> =>
	{
		page.on("dialog", async (dialog: Dialog): Promise<void> => { await dialog.accept(); });
		await page.goto("./");
		await ready(page);
		await page.getByRole("tab", { name: "파일", exact: true }).click();
		await page.getByLabel("파일 열기 (.json)", { exact: true }).setInputFiles
		(
			{
				name: "uniform-grid.json",
				mimeType: "application/json",
				buffer: Buffer.from(JSON.stringify
				(
					{
						kind: "dataset", dimension_count: 2, rows: [[-1, -1], [1, 1]], columns: [0, 1], plot: "points",
						presentation: { overrides: { show_axes: false, grid_spacing: [0.1, 0.1, null],
							view: { lower: [-1, -1], upper: [1, 1], preserve_aspect: true },
							style: { grid: [255, 0, 255, 255], background: [255, 255, 255, 255],
								grid_width: 1.5, points: [0, 0, 0, 0] } } },
					},
				)),
			},
		);
		await expect(page.locator("#document-status")).toContainText("uniform-grid.json");
		await ready(page);
		await full_uniform_grid(page);
		await page.screenshot({ path: "test-results/grid-aspect-filled.png" });
		await page.mouse.move(900, 400);
		await page.mouse.down();
		await page.mouse.move(1080, 435, { steps: 8 });
		await page.mouse.up();
		await ready(page);
		await full_uniform_grid(page);
		await page.mouse.wheel(0, 200);
		await ready(page);
		await full_uniform_grid(page);
		await page.setViewportSize({ width: 1920, height: 600 });
		await expect.poll(async (): Promise<number> => Number(await page.locator("#graph").getAttribute("width"))).toBe(1564);
		await full_uniform_grid(page);
		await page.screenshot({ path: "test-results/grid-wide-filled.png" });
	}
);

test
(
	"default 3D planes extend across the viewport and remain after camera gestures",
	async ({ page }: { page: Page }): Promise<void> =>
	{
		const runtime_urls: string[] = [];
		page.on
		(
			"request",
			(request: Request): void =>
			{
				const url: URL = new URL(request.url());
				if (/\/fgv-runtime\.(mjs|wasm)$/.test(url.pathname))
					runtime_urls.push(url.href);
			},
		);
		await page.goto("./");
		await ready(page);
		expect(runtime_urls).toHaveLength(2);
		const versions: string[] = runtime_urls.map((url: string): string => new URL(url).searchParams.get("v") ?? "");
		for (const version of versions)
			expect(version).toMatch(/^[0-9a-f]{64}-[0-9a-f]{64}$/);

		expect(versions[0]).toBe(versions[1]);
		await expect.poll(async (): Promise<number> => Number(await page.locator("#graph").getAttribute("data-grid-lines")))
			.toBeGreaterThan(40);
		await page.screenshot({ path: "test-results/grid-3d-filled.png" });
		await page.mouse.move(800, 400);
		await page.mouse.down({ button: "right" });
		await page.mouse.move(850, 430, { steps: 10 });
		await page.mouse.up({ button: "right" });
		await ready(page);
		await expect.poll(async (): Promise<number> => Number(await page.locator("#graph").getAttribute("data-grid-lines")))
			.toBeGreaterThan(40);
		await page.screenshot({ path: "test-results/grid-3d-rotated.png" });
	}
);
