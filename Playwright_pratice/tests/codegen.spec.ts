import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('tomsmith');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('SuperSecretPassword!');
  await page.getByRole('button', { name: ' Login' }).click();
  await expect(page.locator('h4')).toContainText('Welcome to the Secure Area. When you are done click logout below.');
  await expect(page.getByRole('heading', { name: 'Secure Area', exact: true })).toBeVisible();
  await expect(page.locator('#content')).toMatchAriaSnapshot(`
    - heading "Secure Area" [level=2]
    - heading "Welcome to the Secure Area. When you are done click logout below." [level=4]
    - link "Logout":
      - /url: /logout
    `);
});