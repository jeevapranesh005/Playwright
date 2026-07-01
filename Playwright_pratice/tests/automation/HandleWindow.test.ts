import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto("https://demoqa.com/browser-windows");
});


test("Windows", async({page, context}) =>{
    
    console.log("First window URL: ", page.url);

    const [newWindow] = await Promise.all([
        context.waitForEvent("page"),
        page.locator("#windowButton").click(),
    ]);

    await newWindow.waitForLoadState("domcontentloaded");

    console.log("New Window URL: ", newWindow.url());

    const heading = await newWindow.locator("#sampleHeading").textContent();

    console.log("Heading: ", heading)

    await expect(newWindow.locator("#sampleHeading")).toHaveText("This is a Simple page")

    await newWindow.close();

    await expect(page.url).toBe("https://demoqa.com/browser-windows");
})


test("iterate window",async({page,context})=>{
    await page.goto("https://demoqa.com/browser-windows")

     const [tab] = await Promise.all([
        context.waitForEvent("page"),
        page.locator("#tabButton").click(),
    ]);

    await tab.waitForLoadState();

    const [window] = await Promise.all([
        context.waitForEvent("page"),
        page.locator("#windowButton").click(),
    ]);

    await window.waitForLoadState();

    const pages = context.pages();

    console.log("number pf pages: ",pages.length)

    for(const p of pages){
        console.log("-----------------------");
        console.log('url: ',p.url())
        console.log("Title ",await p.title())
    }
})


test.afterEach(async({page}) =>{
    console.log("Test is completed")
})