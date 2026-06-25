# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: codegenDemoBlazr.spec.ts >> test
- Location: tests\codegenDemoBlazr.spec.ts:3:5

# Error details

```
Error: expect(locator).toMatchAriaSnapshot(expected) failed

Locator: locator('html').getByRole('document')
Expected: "- text: \"/Total: \\\\d+ Name:/\"
- 'textbox /Total: \\d+ Name:/'
- text: \"Country:\"
- textbox \"Country:\"
- text: \"City:\"
- textbox \"City:\"
- text: \"Credit card:\"
- textbox \"Credit card:\"
- text: \"Month:\"
- textbox \"Month:\"
- text: \"Year:\"
- textbox \"Year:\""
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toMatchAriaSnapshot" with timeout 5000ms
  - waiting for locator('html').getByRole('document')

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - text:             
  - navigation [ref=e2]:
    - generic [ref=e3]:
      - link "PRODUCT STORE" [ref=e4] [cursor=pointer]:
        - /url: index.html
        - img [ref=e5]
        - text: PRODUCT STORE
      - list [ref=e7]:
        - listitem [ref=e8]:
          - link "Home (current)" [ref=e9] [cursor=pointer]:
            - /url: index.html
            - text: Home
            - generic [ref=e10]: (current)
        - listitem [ref=e11]:
          - link "Contact" [ref=e12] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=e13]:
          - link "About us" [ref=e14] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=e15]:
          - link "Cart" [ref=e16] [cursor=pointer]:
            - /url: "#"
        - listitem
        - listitem [ref=e17]:
          - link "Log out" [ref=e18] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=e19]:
          - link "Welcome jeevs" [ref=e20] [cursor=pointer]:
            - /url: "#"
        - listitem
  - generic [ref=e22]:
    - generic [ref=e23]:
      - heading "Products" [level=2] [ref=e24]
      - table [ref=e26]:
        - rowgroup [ref=e27]:
          - row "Pic Title Price x" [ref=e28]:
            - columnheader "Pic" [ref=e29]
            - columnheader "Title" [ref=e30]
            - columnheader "Price" [ref=e31]
            - columnheader "x" [ref=e32]
        - rowgroup
    - generic [ref=e33]:
      - heading "Total" [level=2] [ref=e34]
      - generic:
        - generic:
          - heading [level=3]
      - button "Place Order" [active] [ref=e35]
  - generic [ref=e37]:
    - generic [ref=e40]:
      - heading "About Us" [level=4] [ref=e41]
      - paragraph [ref=e42]: We believe performance needs to be validated at every stage of the software development cycle and our open source compatible, massively scalable platform makes that a reality.
    - generic [ref=e45]:
      - heading "Get in Touch" [level=4] [ref=e46]
      - paragraph [ref=e47]: "Address: 2390 El Camino Real"
      - paragraph [ref=e48]: "Phone: +440 123456"
      - paragraph [ref=e49]: "Email: demo@blazemeter.com"
    - heading "PRODUCT STORE" [level=4] [ref=e53]:
      - img [ref=e54]
      - text: PRODUCT STORE
  - contentinfo [ref=e55]:
    - paragraph [ref=e56]: Copyright © Product Store
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
  18 |   //await expect(page.getByRole('img', { name: 'Third slide' })).toBeVisible();
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
  29 |   await page.getByRole('button', { name: 'Place Order' }).click();
> 30 |   await expect(page.locator('html').getByRole('document')).toMatchAriaSnapshot(`
     |                                                            ^ Error: expect(locator).toMatchAriaSnapshot(expected) failed
  31 |     - text: "/Total: \\\\d+ Name:/"
  32 |     - 'textbox /Total: \\d+ Name:/'
  33 |     - text: "Country:"
  34 |     - textbox "Country:"
  35 |     - text: "City:"
  36 |     - textbox "City:"
  37 |     - text: "Credit card:"
  38 |     - textbox "Credit card:"
  39 |     - text: "Month:"
  40 |     - textbox "Month:"
  41 |     - text: "Year:"
  42 |     - textbox "Year:"
  43 |     `);
  44 | });
```