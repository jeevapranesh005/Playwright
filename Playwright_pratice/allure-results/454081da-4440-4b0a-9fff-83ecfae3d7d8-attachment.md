# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: codegenDemoBlazr.spec.ts >> test
- Location: tests\codegenDemoBlazr.spec.ts:3:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for getByRole('link', { name: 'Monitors' })
    - locator resolved to <a href="#" id="itemc" class="list-group-item" onclick="byCat('monitor')">Monitors</a>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div tabindex="-1" role="dialog" id="logInModal" class="modal fade show" aria-labelledby="logInModalLabel">…</div> intercepts pointer events
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div tabindex="-1" role="dialog" id="logInModal" class="modal fade show" aria-labelledby="logInModalLabel">…</div> intercepts pointer events
    - retrying click action
      - waiting 100ms
    10 × waiting for element to be visible, enabled and stable
       - element is visible, enabled and stable
       - scrolling into view if needed
       - done scrolling
       - <div tabindex="-1" role="dialog" id="logInModal" class="modal fade show" aria-labelledby="logInModalLabel">…</div> intercepts pointer events
     - retrying click action
       - waiting 500ms

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('test', async ({ page }) => {
  4  |   await page.goto('https://demoblaze.com/');
  5  |   await expect(page.getByRole('link', { name: 'PRODUCT STORE' })).toBeVisible();
  6  | 
  7  |   await page.getByRole('link', { name: 'Log in' }).click();
  8  |   await expect(page.getByRole('dialog', { name: 'Log in' })).toBeVisible();
  9  | 
  10 |   await page.locator('#loginusername').click();
  11 |   await page.locator('#loginusername').fill('jeevs');
  12 |   await page.locator('#loginpassword').click();
  13 |   await page.locator('#loginpassword').fill('1234567890');
  14 |   await page.getByRole('button', { name: 'Log in' }).click();
  15 |   await expect(page.getByRole('link', { name: 'PRODUCT STORE' })).toBeVisible();
  16 | 
> 17 |   await page.getByRole('link', { name: 'Monitors' }).click();
     |                                                      ^ Error: locator.click: Target page, context or browser has been closed
  18 | 
  19 |   await page.getByRole('link', { name: 'Apple monitor' }).click();
  20 |   await expect(page.getByRole('heading', { name: 'Apple monitor' })).toBeVisible();
  21 |   page.once('dialog', dialog => {
  22 |     console.log(`Dialog message: ${dialog.message()}`);
  23 |     dialog.dismiss().catch(() => {});
  24 |   });
  25 |   await page.getByRole('link', { name: 'Add to cart' }).click();
  26 |   await page.getByRole('link', { name: 'Cart', exact: true }).click();
  27 |   await expect(page.getByRole('heading', { name: 'Products' })).toBeVisible();
  28 |   await page.getByRole('button', { name: 'Place Order' }).click();
  29 | });
```