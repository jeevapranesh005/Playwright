# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: skip.test.ts >> Test-1
- Location: tests\skip.test.ts:3:5

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
    11 × locator resolved to <a href="#" id="logout2" class="nav-link" onclick="logOut()">Log out</a>
       - unexpected value "hidden"
    - waiting for" https://www.demoblaze.com/" navigation to finish...
    - navigated to "https://www.demoblaze.com/"
    2 × locator resolved to <a href="#" id="logout2" class="nav-link" onclick="logOut()">Log out</a>
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
  3  | test("Test-1",async({page})=>{
  4  | 
  5  |     await page.goto("https://www.demoblaze.com/")
  6  |     await page.locator("#login2").click()
  7  |     await page.locator("#loginusername").fill("jeevs")
  8  |     await page.locator("#loginpassword").fill('1234567890')
  9  |     await page.locator("//button[@onclick='logIn()']").click()
  10 | 
  11 |     let logout = page.locator("#logout2")
> 12 |     await expect(logout).toBeVisible()
     |                          ^ Error: expect(locator).toBeVisible() failed
  13 |     await expect.soft(logout).toHaveText("Log ut")
  14 | })
```