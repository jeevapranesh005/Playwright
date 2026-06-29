# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: demoBlaze.test.ts >> login
- Location: tests\demoBlaze.test.ts:8:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator:  locator('#logout2')
Expected: visible
Received: hidden
Timeout:  5000ms

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('#logout2')
    14 × locator resolved to <a href="#" id="logout2" class="nav-link" onclick="logOut()">Log out</a>
       - unexpected value "hidden"

```

```yaml
- dialog "Log in":
  - document:
    - heading "Log in" [level=5]
    - button "Close"
    - text: "Username:"
    - textbox: jeevs
    - text: "Password:"
    - textbox: "1234567890"
    - button "Close"
    - button "Log in"
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
    - listitem:
      - link "Log in":
        - /url: "#"
    - listitem
    - listitem
    - listitem:
      - link "Sign up":
        - /url: "#"
  - list:
    - listitem
    - listitem
    - listitem
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
  1  | import {test,expect} from '@playwright/test'
  2  | 
  3  | test.beforeEach(async({page})=>{
  4  |     await page.goto("https://demoblaze.com/")
  5  |     
  6  | })
  7  | 
  8  | test('login',async({page})=>{
  9  |     await page.getByRole('link', { name: 'Log in' }).click({timeout: 3000});
  10 |     
  11 |     await page.fill("#loginusername","jeevs",{timeout:3000});
  12 |     await page.fill("#loginpassword",'1234567890');
  13 |     await page.click("//button[@onclick='logIn()']")
  14 | 
  15 |     let logout = page.locator("#logout2")
> 16 |     await expect(logout).toBeVisible()
     |                          ^ Error: expect(locator).toBeVisible() failed
  17 |     
  18 |     await page.getByRole('link', { name: 'Monitors' }).click()
  19 |     let laptop= page.locator("text=ASUS Full HD")
  20 |     await laptop.scrollIntoViewIfNeeded()
  21 |     await laptop.click()
  22 |     await page.waitForTimeout(5000);
  23 |     let lapName = page.locator("h3")
  24 |     await expect(lapName).toHaveText("ASUS Full HD")
  25 | 
  26 | 
  27 | 
  28 | })
```