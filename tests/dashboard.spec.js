import { test, expect } from '@playwright/test';

test.describe('Dashboard Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173/login');

    await page.getByPlaceholder('Email Address').fill('admin@test.com');
    await page.getByPlaceholder('Password').fill('123456');

    await Promise.all([
      page.waitForURL(/dashboard/),
      page.getByRole('button', { name: 'Login' }).click(),
    ]);
  });

  test('Dashboard page loads', async ({ page }) => {
    await expect(page).toHaveURL(/dashboard/);
  });

  test('Welcome heading is visible', async ({ page }) => {
    await expect(
      page.getByRole('heading', {
        level: 1,
        name: /Welcome/,
      })
    ).toBeVisible();
  });

  test('Description is visible', async ({ page }) => {
    await expect(page.getByText(/Manage your employees/)).toBeVisible();
  });

  test('Add Employee button is visible', async ({ page }) => {
    await expect(
      page.getByRole('button', { name: 'Add Employee' })
    ).toBeVisible();
  });

  test('View Employees button is visible', async ({ page }) => {
    await expect(
      page.getByRole('button', { name: 'View Employees' })
    ).toBeVisible();
  });

  test('Logout button is visible', async ({ page }) => {
    await expect(page.getByRole('button', { name: 'Logout' })).toBeVisible();
  });

  test('Clicking Add Employee shows alert', async ({ page }) => {
    page.once('dialog', async (dialog) => {
      await expect(dialog.message()).toBe('Feature Coming Soon!');
      await dialog.accept();
    });

    await page.getByRole('button', { name: 'Add Employee' }).click();
  });

  test('View Employees button redirects to Home page', async ({ page }) => {
    await page.getByRole('button', { name: 'View Employees' }).click();

    await expect(page).toHaveURL(/\/$/);
  });

  test('Logout redirects to Login page', async ({ page }) => {
    await page.getByRole('button', { name: 'Logout' }).click();

    await expect(page).toHaveURL(/login/);
  });
});
