import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173/', {
      waitUntil: 'domcontentloaded',
    });
  });

  test('Home page loads', async ({ page }) => {
    await expect(page).toHaveURL(/\/$/);
  });

  test('Employee Portal heading is visible', async ({ page }) => {
    await expect(
      page.getByRole('heading', {
        level: 1,
        name: 'Employee Portal',
      })
    ).toBeVisible();
  });

  test('Subtitle is visible', async ({ page }) => {
    await expect(
      page.getByText('Manage your employees efficiently.')
    ).toBeVisible();
  });

  test('View Dashboard button is visible', async ({ page }) => {
    await expect(
      page.getByRole('button', { name: 'View Dashboard' })
    ).toBeVisible();
  });

  test('Employee List heading is visible', async ({ page }) => {
    await expect(
      page.getByRole('heading', { name: 'Employee List' })
    ).toBeVisible();
  });

  test('All employee names are visible', async ({ page }) => {
    await expect(page.getByText('Neal')).toBeVisible();
    await expect(page.getByText('John')).toBeVisible();
    await expect(page.getByText('Emily')).toBeVisible();
  });

  test('Dashboard button redirects to Login when user is not authenticated', async ({
    page,
  }) => {
    await page.getByRole('button', { name: 'View Dashboard' }).click();

    await expect(page).toHaveURL(/login/);
  });
});
