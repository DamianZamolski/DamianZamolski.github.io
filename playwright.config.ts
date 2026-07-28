import { defineConfig, devices } from '@playwright/test';

const localhostPort = 4321;
const localhostBaseUrl = `http://localhost:${localhostPort}`;
const productionBaseUrl = 'https://damianzamolski.github.io';
const isProductionTarget = process.env.E2E_TARGET === 'prod';

const browsers = [
  { name: 'chromium', device: devices['Desktop Chrome'] },
  { name: 'firefox', device: devices['Desktop Firefox'] },
  { name: 'webkit', device: devices['Desktop Safari'] },
];

export default defineConfig({
  testDir: 'e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  reporter: 'list',
  projects: [
    ...browsers.map(({ name, device }) => ({
      name: `localhost-${name}`,
      use: { ...device, baseURL: localhostBaseUrl },
    })),
    ...browsers.map(({ name, device }) => ({
      name: `prod-smoke-${name}`,
      use: { ...device, baseURL: productionBaseUrl },
      grep: /@smoke/,
    })),
  ],
  ...(isProductionTarget
    ? {}
    : {
        webServer: {
          command: `pnpm build && pnpm exec serve docs --listen ${localhostPort} --no-port-switching`,
          url: localhostBaseUrl,
          reuseExistingServer: !process.env.CI,
          timeout: 180_000,
        },
      }),
});
