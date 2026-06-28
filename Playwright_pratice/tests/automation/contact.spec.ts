//
import{test,expect, chromium} from '@playwright/test'


test('contact us',async ()=>{
    const Browser = await chromium.launch({
        headless:false
    })

    const context = await Browser.newContext()
    const page = await context.newPage()

    await page.goto('https://automationexercise.com/')
    let title= await page.title()
    let url = await page.url();
    let source = await page.content()
     console.log("title ",title)
    console.log("title ",url)
    console.log("source :",source.substring(0,200))
    await page.locator('//a[@href="/contact_us"]').click()
    await page.getByPlaceholder('Name').fill('john')
    await page.locator('//input[@data-qa="email"]').fill('john22@gmail.com')
    await page.getByPlaceholder('Subject').fill('about the job')

    await page.locator("#message").fill('jhgfxckj jhgfckj hjch jhgfch')

    await page.locator("//input[@name='upload_file']").setInputFiles('D:/D-Downloads/moto.jpg')
    
    let submit = page.locator("//input[@name='submit']");
    await submit.scrollIntoViewIfNeeded();

    page.on('dialog', async dialog => {
        console.log(dialog.message());
        await dialog.accept();
    });


    await submit.click();

    

    await expect(await page.locator("//div[@class='status alert alert-success']"))
    .toContainText("Success! Your details have been submitted successfully.");

})