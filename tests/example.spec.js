import { test, expect } from '@playwright/test';

test.describe('Login Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173/login');
  });

  test('Login page loads', async ({ page }) => {
    await expect(page).toHaveURL(/login/);
  });

  test('Welcome heading is visible', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Welcome!' })).toBeVisible();
  });

  test('Description is visible', async ({ page }) => {
    await expect(
      page.getByText('Sign in to continue to Employee Portal')
    ).toBeVisible();
  });

  test('Email input is visible', async ({ page }) => {
    await expect(page.getByPlaceholder('Email Address')).toBeVisible();
  });

  test('Password input is visible', async ({ page }) => {
    await expect(page.getByPlaceholder('Password')).toBeVisible();
  });

  test('Login button is visible', async ({ page }) => {
    await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
  });

  test('User can type email', async ({ page }) => {
    const email = page.getByPlaceholder('Email Address');

    await email.fill('admin@test.com');

    await expect(email).toHaveValue('admin@test.com');
  });

  test('User can type password', async ({ page }) => {
    const password = page.getByPlaceholder('Password');

    await password.fill('123456');

    await expect(password).toHaveValue('123456');
  });

  test('Clicking Login redirects to Dashboard', async ({ page }) => {
    await page.getByPlaceholder('Email Address').fill('admin@test.com');

    await page.getByPlaceholder('Password').fill('123456');

    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page).toHaveURL(/dashboard/);
  });
});
