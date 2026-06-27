import{test,expect} from '@playwright/test'

test('sum',async({page})=>{

    await page.goto("https://www.testmuai.com/selenium-playground/simple-form-demo/",{waitUntil:"networkidle"})
    let title = page.title()
    let url = page.url()

    console.log(await title)
    console.log(await url)

    await page.locator("#sum1").scrollIntoViewIfNeeded();

    let val1= page.locator("#sum1")
    await val1.pressSequentially('2',{delay:100})
    

    let val2=page.locator("#sum2")
    await val2.pressSequentially('2',{delay:100})

    await page.getByRole('button', { name: 'Get Sum' }).click();    

    await page.waitForTimeout(4000);
    
    let inp1= val1.inputValue()

    let inp2=val2.inputValue()
    
   // const res2 = (inp1+inp2).toString();
    let res =await page.locator('//p[@id="addmessage"]').textContent()

    console.log("value1 ", await inp1)
    console.log("value2 ", await inp2)
    expect(res).toBe("4")
    console.log(res)

})