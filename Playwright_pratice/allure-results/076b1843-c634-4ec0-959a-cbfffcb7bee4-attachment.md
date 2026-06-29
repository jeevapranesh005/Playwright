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
Error: page.waitForTimeout: Test ended.
```

# Page snapshot

```yaml
- generic [ref=e1]:
  - dialog "Log in" [active] [ref=e2]:
    - document [ref=e3]:
      - generic [ref=e4]:
        - generic [ref=e5]:
          - heading "Log in" [level=5] [ref=e6]
          - button "Close" [ref=e7] [cursor=pointer]: ×
        - generic [ref=e9]:
          - generic [ref=e10]:
            - generic [ref=e11]: "Username:"
            - textbox [ref=e12]
          - generic [ref=e13]:
            - generic [ref=e14]: "Password:"
            - textbox [ref=e15]: "2432"
        - generic [ref=e17]:
          - button "Close" [ref=e18]
          - button "Log in" [ref=e19]
  - text:             
  - navigation [ref=e20]:
    - link "PRODUCT STORE" [ref=e21] [cursor=pointer]:
      - /url: index.html
      - img [ref=e22]
      - text: PRODUCT STORE
    - list [ref=e24]:
      - listitem [ref=e25]:
        - link "Home (current)" [ref=e26] [cursor=pointer]:
          - /url: index.html
          - text: Home
          - generic [ref=e27]: (current)
      - listitem [ref=e28]:
        - link "Contact" [ref=e29] [cursor=pointer]:
          - /url: "#"
      - listitem [ref=e30]:
        - link "About us" [ref=e31] [cursor=pointer]:
          - /url: "#"
      - listitem [ref=e32]:
        - link "Cart" [ref=e33] [cursor=pointer]:
          - /url: cart.html
      - listitem [ref=e34]:
        - link "Log in" [ref=e35] [cursor=pointer]:
          - /url: "#"
      - listitem
      - listitem
      - listitem [ref=e36]:
        - link "Sign up" [ref=e37] [cursor=pointer]:
          - /url: "#"
    - generic [ref=e39]:
      - list [ref=e40]:
        - listitem [ref=e41] [cursor=pointer]
        - listitem [ref=e42] [cursor=pointer]
        - listitem [ref=e43] [cursor=pointer]
      - img "First slide" [ref=e46]
      - button "Previous" [ref=e47] [cursor=pointer]:
        - generic [ref=e49]: Previous
      - button "Next" [ref=e50] [cursor=pointer]:
        - generic [ref=e52]: Next
  - generic [ref=e54]:
    - generic [ref=e56]:
      - link "CATEGORIES" [ref=e57] [cursor=pointer]:
        - /url: ""
      - link "Phones" [ref=e58] [cursor=pointer]:
        - /url: "#"
      - link "Laptops" [ref=e59] [cursor=pointer]:
        - /url: "#"
      - link "Monitors" [ref=e60] [cursor=pointer]:
        - /url: "#"
    - list [ref=e63]:
      - listitem [ref=e64]:
        - button "Previous" [ref=e65]
      - listitem [ref=e66]:
        - button "Next" [ref=e67] [cursor=pointer]
  - generic [ref=e69]:
    - generic [ref=e72]:
      - heading "About Us" [level=4] [ref=e73]
      - paragraph [ref=e74]: We believe performance needs to be validated at every stage of the software development cycle and our open source compatible, massively scalable platform makes that a reality.
    - generic [ref=e77]:
      - heading "Get in Touch" [level=4] [ref=e78]
      - paragraph [ref=e79]: "Address: 2390 El Camino Real"
      - paragraph [ref=e80]: "Phone: +440 123456"
      - paragraph [ref=e81]: "Email: demo@blazemeter.com"
    - heading "PRODUCT STORE" [level=4] [ref=e85]:
      - img [ref=e86]
      - text: PRODUCT STORE
  - contentinfo [ref=e87]:
    - paragraph [ref=e88]: Copyright © Product Store
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
  30 |                 expect(dialog.message()).toBe(i.expect);
  31 |                 await dialog.accept();
  32 |             });
  33 | 
  34 |             await page.locator('#loginusername').pressSequentially(i.username);
  35 | 
  36 |             await page.locator('#loginpassword').pressSequentially(i.password);
  37 | 
  38 |             await page.keyboard.press('Tab');
  39 |             await page.keyboard.press('Tab');
  40 |             await page.keyboard.press('Enter');
  41 | 
> 42 |             await page.waitForTimeout(3000);
     |                        ^ Error: page.waitForTimeout: Test ended.
  43 |         });
  44 | 
  45 |     }
  46 | });
```