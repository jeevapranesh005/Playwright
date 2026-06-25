import {test,expect} from "@playwright/test"

test.beforeEach(async({page})=>{
    await page.goto(process.env.BASE_URL!);
})


test('login',async({page})=>{
   
    await page.click("//span[text()='My Account']")
    await page.click("//ul//a[text()='Login']")
    await page.fill("#input-email",process.env.UNAME!)
    await page.fill("#input-password",process.env.PASS!)
    await page.click("//input[@value='Login']")
    
})
