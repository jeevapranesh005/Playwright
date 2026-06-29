# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: parameterization.test.ts >> Login >> Login - invalid username
- Location: tests\parameterization.test.ts:27:13

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "User does not exist."
Received: "Please fill out Username and Password."
```

```
Error: locator.click: Test ended.
Call log:
  - waiting for locator('//button[@onclick=\'logIn()\']')
    - locator resolved to <button type="button" onclick="logIn()" class="btn btn-primary">Log in</button>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is not stable
    - retrying click action
    - waiting 20ms
    - waiting for element to be visible, enabled and stable
    - element is not stable
  - retrying click action
    - waiting 100ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - performing click action

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test.beforeEach(async ({ page }) => {
  4  |     await page.goto('https://demoblaze.com/');
  5  |     await page.locator("#login2").click();
  6  | });
  7  | 
  8  | test.describe('Login', () => {
  9  | 
  10 |     const data = [
  11 |         {
  12 |             title: "invalid username",
  13 |             username: "jer4e",
  14 |             password: "2432",
  15 |             expect: "User does not exist."
  16 |         },
  17 |         {
  18 |             title: "invalid password",
  19 |             username: "jeevs",
  20 |             password: "43234",
  21 |             expect: "Wrong password."
  22 |         }
  23 |     ];
  24 | 
  25 |     for (const i of data) {
  26 | 
  27 |         test(`Login - ${i.title}`, async ({ page }) => {
  28 | 
  29 |             page.on('dialog', async dialog => {
  30 |                 
  31 |                 await dialog.accept();
  32 |             });
  33 | 
  34 |             await page.locator('#loginusername').pressSequentially(i.username);
  35 | 
  36 |             await page.locator('#loginpassword').pressSequentially(i.password);
> 37 |             await page.locator("//button[@onclick='logIn()']").click()
     |                                                                ^ Error: locator.click: Test ended.
  38 | 
  39 |             await page.waitForTimeout(3000);
  40 |         });
  41 | 
  42 |     }
  43 | });
```