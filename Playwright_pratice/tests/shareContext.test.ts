import { chromium,test } from "@playwright/test";

test("login",async()=>{
    const broswer=await chromium.launch({
        headless:false
    });

    //context == window
    //page == tab
    const context = await broswer.newContext();
    const page = await context.newPage();

    await page.goto("https://demoblaze.com/")

    await page.click("//a[@id='login2']")
    await page.fill("#loginusername",'jeevs')
    await page.fill("#loginpassword",'1234567890')
    await page.click("//button[text()='Log in']")

    await page.waitForTimeout(5000);
    
    // it share the old context details to new tab 
    
    const page1= await context.newPage();
    await page1.goto("https://demoblaze.com/cart.html")

    await page.waitForTimeout(5000);

    const context1= await broswer.newContext()
    const Newpage = await context1.newPage()
    
    await Newpage.goto("https://demoblaze.com/")

    await Newpage.waitForTimeout(6000);


})