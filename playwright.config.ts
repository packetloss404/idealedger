import { defineConfig, devices } from '@playwright/test';

function normalizeBasePath(value: string | undefined) {
  if (!value || value === '/') return '/';
  const withLeadingSlash = value.startsWith('/') ? value : `/${value}`;
  return `${withLeadingSlash.replace(/\/+$/, '')}/`;
}

const host = '127.0.0.1';
const port = Number(process.env.PLAYWRIGHT_PORT ?? 43129);
const basePath = normalizeBasePath(process.env.VITE_BASE_PATH);
const baseURL = process.env.PLAYWRIGHT_BASE_URL ?? `http://${host}:${port}${basePath}`;
const projects = [
  {
    name: 'chromium',
    use: { ...devices['Desktop Chrome'] },
  },
];
if (process.env.PLAYWRIGHT_WEBKIT === 'true') {
  projects.push({
    name: 'webkit',
    use: { ...devices['Desktop Safari'] },
  });
}

export default defineConfig({
  testDir: './tests/e2e',
  outputDir: 'test-results/playwright',
  fullyParallel: true,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 2 : undefined,
  reporter: process.env.CI
    ? [
        ['github'],
        ['html', { outputFolder: 'playwright-report', open: 'never' }],
      ]
    : [['list'], ['html', { outputFolder: 'playwright-report', open: 'never' }]],
  expect: {
    timeout: 7_500,
  },
  use: {
    baseURL,
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    actionTimeout: 10_000,
    navigationTimeout: 20_000,
  },
  webServer: process.env.PLAYWRIGHT_BASE_URL
    ? undefined
    : {
        command: `npm run build:web && npm run preview -- --host ${host} --port ${port}`,
        url: baseURL,
        reuseExistingServer: process.env.PLAYWRIGHT_REUSE_SERVER === 'true',
        timeout: 180_000,
        stdout: 'pipe',
        stderr: 'pipe',
      },
  projects,
});
