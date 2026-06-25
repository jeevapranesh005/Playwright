# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: contact.spec.ts >> contact us
- Location: tests\automation\contact.spec.ts:5:5

# Error details

```
Error: expect(received).toContain(expected) // indexOf

Expected substring: "Success"
Received string:    ""
```

# Page snapshot

```yaml
- generic [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e5]:
      - link "Website for automation practice" [ref=e8] [cursor=pointer]:
        - /url: /
        - img "Website for automation practice" [ref=e9]
      - list [ref=e12]:
        - listitem [ref=e13]:
          - link " Home" [ref=e14] [cursor=pointer]:
            - /url: /
            - generic [ref=e15]: 
            - text: Home
        - listitem [ref=e16]:
          - link " Products" [ref=e17] [cursor=pointer]:
            - /url: /products
            - generic [ref=e18]: 
            - text: Products
        - listitem [ref=e19]:
          - link " Cart" [ref=e20] [cursor=pointer]:
            - /url: /view_cart
            - generic [ref=e21]: 
            - text: Cart
        - listitem [ref=e22]:
          - link " Signup / Login" [ref=e23] [cursor=pointer]:
            - /url: /login
            - generic [ref=e24]: 
            - text: Signup / Login
        - listitem [ref=e25]:
          - link " Test Cases" [ref=e26] [cursor=pointer]:
            - /url: /test_cases
            - generic [ref=e27]: 
            - text: Test Cases
        - listitem [ref=e28]:
          - link " API Testing" [ref=e29] [cursor=pointer]:
            - /url: /api_list
            - generic [ref=e30]: 
            - text: API Testing
        - listitem [ref=e31]:
          - link " Video Tutorials" [ref=e32] [cursor=pointer]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=e33]: 
            - text: Video Tutorials
        - listitem [ref=e34]:
          - link " Contact us" [ref=e35] [cursor=pointer]:
            - /url: /contact_us
            - generic [ref=e36]: 
            - text: Contact us
  - generic [ref=e37]:
    - heading "Contact Us" [level=2] [ref=e41]:
      - text: Contact
      - strong [ref=e42]: Us
    - generic [ref=e43]:
      - generic [ref=e45]:
        - generic [ref=e46]:
          - text: "Note: Below contact form is for testing purpose."
          - link "QA engineer bootcamp" [ref=e47] [cursor=pointer]:
            - img [ref=e49]
            - text: QA engineer bootcamp
        - heading "Get In Touch" [level=2] [ref=e51]
        - generic [ref=e53]:
          - textbox "Name" [ref=e55]: john
          - textbox "Email" [ref=e57]: john22@gmail.com
          - textbox "Subject" [ref=e59]: about the job
          - textbox "Your Message Here" [ref=e61]: jhgfxckj jhgfckj hjch jhgfch
          - button "Choose File" [ref=e63]
          - button "Submit" [active] [ref=e65] [cursor=pointer]
      - generic [ref=e67]:
        - heading "Feedback For Us" [level=2] [ref=e68]
        - generic [ref=e69]:
          - paragraph [ref=e70]: We really appreciate your response to our website.
          - paragraph [ref=e71]:
            - text: Kindly share your feedback with us at
            - link "feedback@automationexercise.com" [ref=e72] [cursor=pointer]:
              - /url: mailto:feedback@automationexercise.com
            - text: .
          - paragraph [ref=e73]: If you have any suggestion areas or improvements, do let us know. We will definitely work on it.
          - paragraph [ref=e74]: Thank you
  - insertion [ref=e76]:
    - iframe [ref=e78]:
      
  - contentinfo [ref=e79]:
    - generic [ref=e84]:
      - heading "Subscription" [level=2] [ref=e85]
      - generic [ref=e86]:
        - textbox "Your email address" [ref=e87]
        - button "" [ref=e88] [cursor=pointer]:
          - generic [ref=e89]: 
        - paragraph [ref=e90]:
          - text: Get the most recent updates from
          - text: our site and be updated your self...
    - paragraph [ref=e94]: Copyright © 2021 All rights reserved
  - text: 
```

# Test source

```ts
  1  | 
  2  | import{test,expect, chromium} from '@playwright/test'
  3  | import path from 'node:path'
  4  | 
  5  | test('contact us',async ()=>{
  6  |     const Browser = await chromium.launch({
  7  |         headless:false
  8  |     })
  9  | 
  10 |     const context = await Browser.newContext()
  11 |     const page = await context.newPage()
  12 | 
  13 |     await page.goto('https://automationexercise.com/')
  14 |     await page.locator('//a[@href="/contact_us"]').click()
  15 |     await page.getByPlaceholder('Name').fill('john')
  16 |     await page.locator('//input[@data-qa="email"]').fill('john22@gmail.com')
  17 |     await page.getByPlaceholder('Subject').fill('about the job')
  18 | 
  19 |     await page.locator("#message").fill('jhgfxckj jhgfckj hjch jhgfch')
  20 | 
  21 |     await page.locator("//input[@name='upload_file']").setInputFiles('D:/D-Downloads/moto.jpg')
  22 |     
  23 |     let submit = page.locator("//input[@name='submit']");
  24 |     await submit.scrollIntoViewIfNeeded();
  25 |     await submit.click();
  26 | 
  27 |     page.on('dialog', async dialog => {
  28 |         console.log(dialog.message());
  29 |         await dialog.accept();
  30 |     });
  31 | 
  32 |     let act = await page.locator(".status.alert.alert-success").textContent()
> 33 |     await expect(act).toContain("Success")
     |                       ^ Error: expect(received).toContain(expected) // indexOf
  34 | 
  35 | })
```