# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: skip.test.ts >> Test-1
- Location: tests\skip.test.ts:3:5

# Error details

```
Error: locator.click: Error: strict mode violation: getByText('Log in') resolved to 3 elements:
    1) <h5 class="modal-title" id="logInModalLabel">Log in</h5> aka getByRole('heading', { name: 'Log in' })
    2) <button type="button" onclick="logIn()" class="btn btn-primary">Log in</button> aka getByRole('button', { name: 'Log in' })
    3) <a href="#" id="login2" class="nav-link" data-toggle="modal" data-target="#logInModal">Log in</a> aka getByRole('link', { name: 'Log in' })

Call log:
  - waiting for getByText('Log in')

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - dialog "Log in" [ref=e2]:
    - document [ref=e3]:
      - generic [ref=e4]:
        - generic [ref=e5]:
          - heading "Log in" [level=5] [ref=e6]
          - button "Close" [ref=e7] [cursor=pointer]: ×
        - generic [ref=e9]:
          - generic [ref=e10]:
            - generic [ref=e11]: "Username:"
            - textbox [ref=e12]: jeevs
          - generic [ref=e13]:
            - generic [ref=e14]: "Password:"
            - textbox [active] [ref=e15]: "1234567890"
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
  1  | import {test,expect} from '@playwright/test'
  2  | 
  3  | test("Test-1",async({page})=>{
  4  | 
  5  |     await page.goto("https://www.demoblaze.com/")
  6  |     await page.locator("#login2").click()
  7  |     await page.locator("#loginusername").fill("jeevs")
  8  |     await page.locator("#loginpassword").fill('1234567890')
> 9  |     await page.getByText("Log in").click()
     |                                    ^ Error: locator.click: Error: strict mode violation: getByText('Log in') resolved to 3 elements:
  10 | 
  11 |     let logout = page.locator("#logout2")
  12 |     await expect(logout).toBeVisible()
  13 |     await expect(logout).toHaveText("Log out")
  14 | })
```