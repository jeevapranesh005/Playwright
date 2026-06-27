# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: automation\pratice.test.ts >> pratice
- Location: tests\automation\pratice.test.ts:3:5

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator:  getByPlaceholder('Please enter your Message')
Expected: "Jeeva"
Received: ""
Timeout:  5000ms

Call log:
  - Expect "toHaveText" with timeout 5000ms
  - waiting for getByPlaceholder('Please enter your Message')
    14 × locator resolved to <input type="text" id="user-message" placeholder="Please enter your Message" class="border border-gray-550 w-full h-35 rounded px-10"/>
       - unexpected value ""

```

```yaml
- textbox "Please enter your Message"
```

# Test source

```ts
  1  | import{test,expect,chromium} from "@playwright/test"
  2  | 
  3  | test('pratice',async()=>{
  4  |     const browser= await chromium.launch({
  5  |         headless:false
  6  |     })
  7  | 
  8  |     const context = await browser.newContext();
  9  |     const page = await context.newPage()
  10 | 
  11 |     await page.goto("https://www.testmuai.com/selenium-playground/simple-form-demo/")
  12 | 
  13 |     let title = await page.title()
  14 |     console.log(title)
  15 | 
  16 |     let url = await page.url()
  17 |     console.log(url)
  18 | 
  19 |     let placeholderText= await page.getByPlaceholder("Please enter your Message").getAttribute('placeholder')
  20 |     console.log(placeholderText)
  21 | 
  22 |     let beforeText =  page.getByPlaceholder("Please enter your Message")
  23 |     console.log("Before value ",await beforeText.textContent())
  24 | 
  25 | 
  26 |     let input=  page.getByPlaceholder("Please enter your Message")
  27 |      await input.fill('Jeeva')
  28 |     console.log('After value ',await input.inputValue())
> 29 |     await expect(input).toHaveText("Jeeva")
     |                         ^ Error: expect(locator).toHaveText(expected) failed
  30 | 
  31 | 
  32 |     await page.locator("#showInput").click()
  33 | 
  34 |     const output = page.locator("//label[@class='font-semibold text-black text-size-15']/following-sibling::p[@id='message']");
  35 |     let res= await output.textContent();
  36 |    
  37 |     console.log("Output:", res);
  38 | })
  39 | 
  40 | 
```