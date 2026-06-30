import {test,expect} from '@playwright/test'
import loginData from "../testData/loginData.json"

interface loginData{
    testName:string,
    uname:string,
    password:string,
    expectedresult:string
}

const user = loginData as loginData[]


for(const i of user){
    

    test(`test of ${i.testName}`,async({page},testInfo)=>{
       // console.log(i)

        await page.goto("https://demoblaze.com/")
        const login_btn = page.locator("#login2");
        await login_btn.click()
        
        await page.locator("#loginusername").fill(i.uname)
        await page.locator("#loginpassword").fill(i.password);
       if (i.expectedresult === 'failure') {      
        page.once('dialog', async dialog => {
            console.log(dialog.message());
            await dialog.accept();
            //page.waitForTimeout(5000)
    });

    await page.locator("//button[text()='Log in']").click();
    
}
        
        
        if(i.expectedresult==='succes'){
            await page.locator("//button[text()='Log in']").click();

            let res =  page.locator("#nameofuser")
            await expect(res).toBeVisible({timeout:6000})
            console.log(await res.textContent())

        }

    })
}
