import { test, expect } from '@playwright/test';

test.describe('Protected Route', () => {
  test('Unauthenticated user is redirected to Login page', async ({ page }) => {
    await page.goto('http://localhost:5173/dashboard');

    await expect(page).toHaveURL(/login/);
  });

  test('Authenticated user can access Dashboard', async ({ page }) => {
    await page.goto('http://localhost:5173/login');

    await page.getByPlaceholder('Email Address').fill('admin@test.com');
    await page.getByPlaceholder('Password').fill('123456');

    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page).toHaveURL(/dashboard/);

    await expect(
      page.getByRole('heading', { name: 'Welcome, Admin!' })
    ).toBeVisible();
  });

  test('User is redirected to Login after Logout', async ({ page }) => {
    await page.goto('http://localhost:5173/login');

    await page.getByPlaceholder('Email Address').fill('admin@test.com');
    await page.getByPlaceholder('Password').fill('123456');

    await page.getByRole('button', { name: 'Login' }).click();

    await page.getByRole('button', { name: 'Logout' }).click();

    await expect(page).toHaveURL(/login/);
  });
});
