import { test } from '@playwright/test';


test('File Upload', async ({ page }) => {

    await page.goto("https://the-internet.herokuapp.com/upload");

    await page.locator("#file-upload").setInputFiles("D:/D-Downloads/sample.txt");

    await page.locator("#file-submit").click();

});


test('File Download', async ({ page }) => {

    await page.goto("https://the-internet.herokuapp.com/download");

    const downloadPromise = page.waitForEvent('download');

    await page.locator("//a[@href='download/sample3.pdf']").click();

    const download = await downloadPromise;

    await download.saveAs("D:/D-Downloads/sample.txt");

});