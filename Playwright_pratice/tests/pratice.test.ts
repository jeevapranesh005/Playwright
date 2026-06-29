import { title } from 'node:process';
import{test,expect} from '@playwright/test'

test.describe(()=>{

    const data=[
        {email:"jee@.com",password:"87654"},
        {email:"kree@gmail.com",password:"jhgf"}
    ]

    for(const i of data){
        test(`invalid login - ${i.email}`, async ({ page }, testInfo) => {
        await page.goto("https://tutorialsninja.com/demo/index.php?route=account/login")
        await page.locator("#input-email").fill(i.email)
        await page.locator("#input-password").fill(i.password)
        await page.locator("//input[@value='Login']").click()
        console.log(testInfo.title)
        console.log(testInfo.status)
        
        
        
    })
    }
});