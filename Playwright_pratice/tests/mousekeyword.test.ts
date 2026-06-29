import{test,expect} from '@playwright/test'
test('Mouse Actions', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');


  await page.mouse.move(200, 200);
  await page.mouse.click(200, 200);
  await page.mouse.dblclick(200, 200);
  await page.mouse.click(200, 200, { button: 'right' });

  await page.mouse.wheel(0, 500);
});

test("keyboard action", async ({ page }) => {
    await page.goto("https://demoqa.com/text-box");

    await page.locator("#userName").click();
    await page.keyboard.type("Tamil");
    await page.keyboard.press("Tab");
    await page.keyboard.type("JEEVA@gmail.com");

    await page.keyboard.press("Tab");
    await page.keyboard.type("Salem");

    await page.keyboard.press("Control+A");
    await page.keyboard.press("Backspace");
    await page.keyboard.type("Chennai");

    await page.locator("#submit").click();

    await expect(page.locator("#output")).toBeVisible();

});