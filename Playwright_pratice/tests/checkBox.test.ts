import{test,expect} from '@playwright/test'


test('checkBox',async({page})=>{
    await page.goto("https://leafground.com/checkbox.xhtml")
    await page.locator(".ui-chkbox-box.ui-widget.ui-corner-all.ui-state-default").nth(0).click()
    await page.locator(".ui-chkbox-box.ui-widget.ui-corner-all.ui-state-default").nth(0).click()
    await page.waitForTimeout(5000);
})