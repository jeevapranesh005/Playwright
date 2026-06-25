# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: codegenDemoBlazr.spec.ts >> test
- Location: tests\codegenDemoBlazr.spec.ts:3:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('img', { name: 'Third slide' })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByRole('img', { name: 'Third slide' })

```

```yaml
- navigation:
  - link "PRODUCT STORE":
    - /url: index.html
    - img
    - text: PRODUCT STORE
  - list:
    - listitem:
      - link "Home (current)":
        - /url: index.html
    - listitem:
      - link "Contact":
        - /url: "#"
    - listitem:
      - link "About us":
        - /url: "#"
    - listitem:
      - link "Cart":
        - /url: cart.html
    - listitem
    - listitem:
      - link "Log out":
        - /url: "#"
    - listitem:
      - link "Welcome jeevs":
        - /url: "#"
    - listitem
  - list:
    - listitem
    - listitem
    - listitem
  - img "First slide"
  - img "Second slide"
  - button "Previous"
  - button "Next"
- link "CATEGORIES":
  - /url: ""
- link "Phones":
  - /url: "#"
- link "Laptops":
  - /url: "#"
- link "Monitors":
  - /url: "#"
- link:
  - /url: prod.html?idp_=10
- heading "Apple monitor 24" [level=4]:
  - link "Apple monitor 24":
    - /url: prod.html?idp_=10
- heading "$400" [level=5]
- paragraph: LED Cinema Display features a 27-inch glossy LED-backlit TFT active-matrix LCD display with IPS technology and an optimum resolution of 2560x1440. It has a 178 degree horizontal and vertical viewing angle, a "typical" brightness of 375 cd/m2, contrast ratio of 1000:1, and a 12 ms response time.
- link:
  - /url: prod.html?idp_=14
- heading "ASUS Full HD" [level=4]:
  - link "ASUS Full HD":
    - /url: prod.html?idp_=14
- heading "$230" [level=5]
- paragraph: ASUS VS247H-P 23.6- Inch Full HD
- list:
  - listitem:
    - button "Previous"
  - listitem:
    - button "Next"
- heading "About Us" [level=4]
- paragraph: We believe performance needs to be validated at every stage of the software development cycle and our open source compatible, massively scalable platform makes that a reality.
- heading "Get in Touch" [level=4]
- paragraph: "Address: 2390 El Camino Real"
- paragraph: "Phone: +440 123456"
- paragraph: "Email: demo@blazemeter.com"
- heading "PRODUCT STORE" [level=4]:
  - img
  - text: PRODUCT STORE
- contentinfo:
  - paragraph: Copyright © Product Store
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
  17 |   await page.getByRole('link', { name: 'Monitors' }).click();
> 18 |   await expect(page.getByRole('img', { name: 'Third slide' })).toBeVisible();
     |                                                                ^ Error: expect(locator).toBeVisible() failed
  19 | 
  20 |   await page.getByRole('link', { name: 'Apple monitor' }).click();
  21 |   await expect(page.getByRole('heading', { name: 'Apple monitor' })).toBeVisible();
  22 |   page.once('dialog', dialog => {
  23 |     console.log(`Dialog message: ${dialog.message()}`);
  24 |     dialog.dismiss().catch(() => {});
  25 |   });
  26 |   await page.getByRole('link', { name: 'Add to cart' }).click();
  27 |   await page.getByRole('link', { name: 'Cart', exact: true }).click();
  28 |   await expect(page.getByRole('heading', { name: 'Products' })).toBeVisible();
  29 | });
```