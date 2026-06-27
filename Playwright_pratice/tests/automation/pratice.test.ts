import{test,expect,chromium} from "@playwright/test"

test('pratice',async()=>{
    const browser= await chromium.launch({
        headless:false
    })

    const context = await browser.newContext();
    const page = await context.newPage()

    await page.goto("https://www.testmuai.com/selenium-playground/simple-form-demo/")

    let title = await page.title()
    console.log(title)

    let url = await page.url()
    console.log(url)

    let placeholderText= await page.getByPlaceholder("Please enter your Message").getAttribute('placeholder')
    console.log(placeholderText)

    let beforeText =  page.getByPlaceholder("Please enter your Message")
    console.log("Before value ",await beforeText.textContent())


    let input=  page.getByPlaceholder("Please enter your Message")
     await input.fill('Jeeva')
    console.log('After value ',await input.inputValue())
  

    await page.locator("#showInput").click()

    const output = page.locator("//label[@class='font-semibold text-black text-size-15']/following-sibling::p[@id='message']");
    let res= await output.textContent();
   
    console.log("Output:", res);
})

