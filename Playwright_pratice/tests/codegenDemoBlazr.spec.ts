import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoblaze.com/');
  await expect(page.getByRole('link', { name: 'PRODUCT STORE' })).toBeVisible();

  await page.getByRole('link', { name: 'Log in' }).click();
  await expect(page.getByRole('dialog', { name: 'Log in' })).toBeVisible();

  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill('jeevs');
  await page.locator('#loginpassword').click();
  await page.locator('#loginpassword').fill('1234567890');
  await page.getByRole('button', { name: 'Log in' }).click();
  await expect(page.getByRole('link', { name: 'PRODUCT STORE' })).toBeVisible();

  await page.getByRole('link', { name: 'Monitors' }).click();
  await expect(page.getByRole('img', { name: 'Third slide' })).toBeVisible();

  await page.getByRole('link', { name: 'Apple monitor' }).click();
  await expect(page.getByRole('heading', { name: 'Apple monitor' })).toBeVisible();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('link', { name: 'Add to cart' }).click();
  await page.getByRole('link', { name: 'Cart', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'Products' })).toBeVisible();
  await page.getByRole('button', { name: 'Place Order' }).click();
  await expect(page.locator('html').getByRole('document')).toMatchAriaSnapshot(`
    - text: "/Total: \\\\d+ Name:/"
    - 'textbox /Total: \\d+ Name:/'
    - text: "Country:"
    - textbox "Country:"
    - text: "City:"
    - textbox "City:"
    - text: "Credit card:"
    - textbox "Credit card:"
    - text: "Month:"
    - textbox "Month:"
    - text: "Year:"
    - textbox "Year:"
    `);
});