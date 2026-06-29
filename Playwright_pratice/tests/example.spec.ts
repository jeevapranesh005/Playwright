import { test, expect } from '@playwright/test';


test.beforeEach(async({page})=>{

})
test('login Test',async({page})=>{
  

  await page.goto(process.env.BASE_URL!);

  await page.fill('#username',process.env.UNAME!);
  await page.fill('#password',process.env.PASS!);

  await page.click('.radius');

  let msg:any = await page.locator(".subheader").textContent()
  console.log(msg)
});