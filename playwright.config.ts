import { defineConfig } from "@playwright/test";
export default defineConfig({
	testDir: "./tests", testMatch: "*.spec.ts", workers: 1, timeout: 60000,
	use: { baseURL: process.env.FGV_TEST_URL ?? "http://127.0.0.1:8988", viewport: { width: 1440, height: 900 },
		headless: true, screenshot: "only-on-failure",
		launchOptions: { executablePath: process.env.FGV_CHROMIUM, args: ["--enable-unsafe-swiftshader"] } },
	webServer: process.env.FGV_TEST_URL ? undefined : { command: "npx vite preview --host 127.0.0.1 --port 8988 --strictPort",
		url: "http://127.0.0.1:8988", reuseExistingServer: !process.env.CI },
});
