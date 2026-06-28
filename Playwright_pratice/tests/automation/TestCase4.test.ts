 //Logout User

 import { test,chromium,expect,Page,Browser } from '@playwright/test';

test("Testcase 4 - Log out ",async({page})=>{
   
    await page.goto("https://automationexercise.com/")

    await page.click("//a[normalize-space()='Signup / Login']");

    await page.fill("//input[@data-qa='login-email']","John100@gmail.com")
    await page.fill("//input[@placeholder='Password']","1234")

    await page.click("//button[normalize-space()='Login']")

    await expect(page.locator("//*[@id='header']/div/div/div/div[2]/div/ul/li[10]/a")).toContainText("Logged in")

    await page.click("//a[normalize-space()='Logout']")

    await expect(page.locator("//h2[normalize-space()='Login to your account']")).toContainText("Login")

});