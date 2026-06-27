import{test,expect} from '@playwright/test'

test('simple alert' , async({page})=>{

    await page.goto("https://www.testmuai.com/selenium-playground/javascript-alert-box-demo/",{waitUntil:"networkidle" })

   
    page.once('dialog',async dialog=>{
        await dialog.accept()
        console.log(dialog.message())
    })
    
    let simple = page.locator("//button[@class='btn btn-dark my-30 mx-10 hover:bg-lambda-900 hover:border-lambda-900']")
    await simple.click()


    page.once('dialog',async dialog=>{
        await dialog.dismiss()
        console.log(dialog.message())
    })


    let confomalert=  page.locator("//button[@class='btn btn-dark mx-10 hover:bg-lambda-900 hover:border-lambda-900']").nth(0)
    await confomalert.click()

    let text = await page.locator("//p[@id='confirm-demo']").textContent()
    console.log( text)
   

    page.once('dialog',async dialog=>{
        let text =  dialog.defaultValue()
        console.log(text)
        await dialog.accept("jeeva")
        let name = dialog.defaultValue()
        console.log(name)
    })

     let promtalert=  page.locator("//button[@class='btn btn-dark mx-10 hover:bg-lambda-900 hover:border-lambda-900']").nth(1)
    await promtalert.click()


    console.log("alert handled")




})