import{test,expect,chromium} from '@playwright/test'

test('subscribe' , async()=>{
    const browser = await chromium.launch({
        headless:true
    })

    const context= await browser.newContext()
    const page = await context.newPage()

    await page.goto("https://automationexercise.com/")

    let sub = page.getByText('Subscription');
    await sub.scrollIntoViewIfNeeded();

    await page.locator("#susbscribe_email").fill("john@gmail.com")
    await page.locator("#subscribe").click()
    let subText = page.locator("#success-subscribe")
    console.log("the subscribe text is",subText.textContent())

    await expect(subText).toContainText('You have been successfully subscribed!')

    console.log("test completed")
})
