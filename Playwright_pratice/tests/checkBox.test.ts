import {test,expect} from '@playwright/test';
import { afterEach } from 'node:test';

test("Radio button test",async({page})=>{
    await page.goto("https://demoqa.com/radio-button");
    await page.locator("//input[@id='yesRadio']").check()
    await expect(page.locator("//span[@class='text-success']")).toHaveText("Yes");
    console.log(await page.locator("//input[@id='impressiveRadio']").isEnabled())
    await page.locator("//input[@id='impressiveRadio']").check();
    console.log(await page.locator("//input[@id='impressiveRadio']").isChecked())
    await expect(page.locator("//span[@class='text-success']")).toHaveText("Impressive");
    
})
test("Check box test",async({page})=>{
    await page.goto("https://demoqa.com/checkbox");
    const checkbox = page.locator("//span[@aria-label='Select Home']");
    await checkbox.check();
    await expect(page.locator("//span[@aria-label='Select Home']")).toBeChecked();
    await expect(page.locator("//span[normalize-space()='home']")).toContainText("home")
    await checkbox.uncheck();
    await expect(checkbox).not.toBeChecked();
    await checkbox.setChecked(true);
    await checkbox.setChecked(false);
})

