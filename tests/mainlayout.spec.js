import { test, expect } from '@playwright/test';

test.describe('Main Layout', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173/');
  });

  test('Navbar is rendered', async ({ page }) => {
    await expect(
      page.getByRole('heading', {
        level: 2,
        name: 'Employee Portal',
      })
    ).toBeVisible();
  });

  test('Page content is rendered through Outlet', async ({ page }) => {
    await expect(
      page.getByRole('heading', { name: 'Employee List' })
    ).toBeVisible();
  });
});
