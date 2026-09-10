import { test, expect } from '@playwright/test';

test('all API employees are displayed correctly', async ({ page }) => {
  const apiResponse = await page.request.get(
    'http://localhost:3000/api/employees'
  );

  expect(apiResponse.ok()).toBeTruthy();

  const employees = await apiResponse.json();

  await page.goto('http://localhost:5173/');

  for (const employee of employees) {
    const card = page.locator(
      `.user-card[data-employee-id="${employee.id}"]`
    );

    await expect(card).toBeVisible();
    await expect(card).toContainText(employee.name);
    await expect(card).toContainText(`Role: ${employee.role}`);
    await expect(card).toContainText(`Experience: ${employee.experience}`);
  }
});
