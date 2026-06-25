import { chromium,test} from "@playwright/test";
import path from "node:path";

test("navigae commends", async()=>{
    const broswer = await chromium.launch({
        headless:false
    });
    const context = await broswer.newContext();
    const page = await context.newPage();

    await page.goto("https://demoblaze.com/")
    await page.waitForTimeout(1000);
    await page.goto("https://www.flipkart.com/")
    await page.waitForTimeout(1000);
    await page.goBack()
    await page.waitForTimeout(1000);
    await page.goForward()
    await page.waitForTimeout(1000);
    await page.reload()
    await page.waitForTimeout(1000);


})