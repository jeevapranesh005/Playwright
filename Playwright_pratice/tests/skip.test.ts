import {test,expect} from '@playwright/test'

test("Test-1 @smoke ",async({page})=>{

    await page.goto("https://www.demoblaze.com/")
    await page.locator("#login2").click()
    await page.locator("#loginusername").fill("jeevs")
    await page.locator("#loginpassword").fill('1234567890')
    await page.locator("//button[@onclick='logIn()']").click()

    let logout = page.locator("#logout2")
    await expect(logout).toHaveText("Log out")
    await expect(logout).toBeVisible()
    
})


test("Test-2 @sanity",async({page})=>{

    await page.goto("https://www.demoblaze.com/")
   
    await page.locator("#login2").click()
    await page.locator("#loginusername").fill("jeevs")
    await page.locator("#loginpassword").fill('1234567890')
    await page.locator("//button[@onclick='logIn()']").click()

    let logout = page.locator("#logout2")
    await expect.soft(logout).toHaveText("Log out")
    await expect(logout).toBeVisible()
    
})


test("Test-3",async({page})=>{

    await page.goto("https://www.demoblaze.com/")
    await page.locator("#login2").click()
    await page.locator("#loginusername").fill("jeevs")
    await page.locator("#loginpassword").fill('1234567890')
    await page.locator("//button[@onclick='logIn()']").click()

    let logout = page.locator("#logout2")
    await expect(logout).toHaveText("Log out")
    await expect(logout).toBeVisible()
    
})