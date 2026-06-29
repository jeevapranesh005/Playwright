# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: skip.test.ts >> Test-3
- Location: tests\skip.test.ts:34:5

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
  - img "First slide"
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
```

# Test source

```ts
  1  | import {test,expect} from '@playwright/test'
  2  | 
  3  | test("Test-1 @smoke ",async({page})=>{
  4  | 
  5  |     await page.goto("https://www.demoblaze.com/")
  6  |     await page.locator("#login2").click()
  7  |     await page.locator("#loginusername").fill("jeevs")
  8  |     await page.locator("#loginpassword").fill('1234567890')
  9  |     await page.locator("//button[@onclick='logIn()']").click()
  10 | 
  11 |     let logout = page.locator("#logout2")
  12 |     await expect(logout).toHaveText("Log out")
  13 |     await expect(logout).toBeVisible()
  14 |     
  15 | })
  16 | 
  17 | 
  18 | test("Test-2 @sanity",async({page})=>{
  19 | 
  20 |     await page.goto("https://www.demoblaze.com/")
  21 |    
  22 |     await page.locator("#login2").click()
  23 |     await page.locator("#loginusername").fill("jeevs")
  24 |     await page.locator("#loginpassword").fill('1234567890')
  25 |     await page.locator("//button[@onclick='logIn()']").click()
  26 | 
  27 |     let logout = page.locator("#logout2")
  28 |     await expect.soft(logout).toHaveText("Log out")
  29 |     await expect(logout).toBeVisible()
  30 |     
  31 | })
  32 | 
  33 | 
  34 | test("Test-3",async({page})=>{
  35 | 
  36 |     await page.goto("https://www.demoblaze.com/")
  37 |     await page.locator("#login2").click()
  38 |     await page.locator("#loginusername").fill("jeevs")
  39 |     await page.locator("#loginpassword").fill('1234567890')
  40 |     await page.locator("//button[@onclick='logIn()']").click()
  41 | 
  42 |     let logout = page.locator("#logout2")
  43 |     await expect(logout).toHaveText("Log out")
> 44 |     await expect(logout).toBeVisible()
     |                          ^ Error: expect(locator).toBeVisible() failed
  45 |     
  46 | })
```