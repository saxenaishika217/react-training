import { test, expect } from '@playwright/test';

test.describe('User Card', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173/');
  });

  test('Neal card is visible', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Neal' })).toBeVisible();
    await expect(page.getByText('Role: Frontend Developer')).toBeVisible();
    await expect(page.getByText('Experience: 1 Year')).toBeVisible();
  });

  test('John card is visible', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'John' })).toBeVisible();
    await expect(page.getByText('Role: Backend Developer')).toBeVisible();
    await expect(page.getByText('Experience: 3 Years')).toBeVisible();
  });

  test('Emily card is visible', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Emily' })).toBeVisible();
    await expect(page.getByText('Role: QA Engineer')).toBeVisible();
    await expect(page.getByText('Experience: 2 Years')).toBeVisible();
  });
});
