import{test,expect} from '@playwright/test'


test('drop-down',async ({page})=>{

    await page.goto("https://www.testmuai.com/selenium-playground/select-dropdown-demo/",{waitUntil:"networkidle"})

    await page.selectOption("#select-demo",{
        index:4
        //label:
        //value:
    })

    await page.waitForTimeout(4000)

    await page.getByText('Multi Select Option').scrollIntoViewIfNeeded()

    await page.selectOption("#multi-select",[
        {label:"California"},
        {index:4},
        {value:"New Jersey"}
    ])

    await page.waitForTimeout(4000)





    

})