import { test, expect } from '@playwright/test';

test('home page renders its heading', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('h1')).toHaveText('Damian Zamolski');
});
