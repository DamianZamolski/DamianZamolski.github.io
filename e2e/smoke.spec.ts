import { test, expect } from '@playwright/test';

test(
  'home page loads and shows a heading',
  { tag: '@smoke' },
  async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('h1')).toBeVisible();
  },
);
