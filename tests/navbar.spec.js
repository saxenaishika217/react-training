import { test, expect } from '@playwright/test';

test.describe('Navbar', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173/');
  });

  test('Navbar heading is visible', async ({ page }) => {
    await expect(
      page.getByRole('heading', {
        level: 2,
        name: 'Employee Portal',
      })
    ).toBeVisible();
  });

  test('Home link is visible', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'Home' })).toBeVisible();
  });

  test('Dashboard link is visible', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'Dashboard' })).toBeVisible();
  });

  test('Login link is visible', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'Login' })).toBeVisible();
  });

  test('Home link navigates to Home page', async ({ page }) => {
    await page.getByRole('link', { name: 'Home' }).click();

    await expect(page).toHaveURL(/\/$/);
  });

  test('Login link navigates to Login page', async ({ page }) => {
    await page.getByRole('link', { name: 'Login' }).click();

    await expect(page).toHaveURL(/login/);
  });

  test('Dashboard link redirects unauthenticated user to Login', async ({
    page,
  }) => {
    await page.getByRole('link', { name: 'Dashboard' }).click();

    await expect(page).toHaveURL(/login/);
  });
});
