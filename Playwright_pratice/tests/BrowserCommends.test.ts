import{test,expect} from "@playwright/test"
test('browser commends',async({page})=>{
    await page.goto("https://demoblaze.com/")

    let title= await page.title()
    let url = await page.url();
    let source = await page.content()

    console.log("title ",title)
    console.log("title ",url)
    console.log("source :",source.substring(0,200))
    

    
    
})