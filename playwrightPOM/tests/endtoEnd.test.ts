import {test,expect}from '../fixtures/baseFixture'
import loginData from '../testData/loginData.json'


test.describe('login module',()=>{

    test.beforeEach(async({loginPage})=>{
        await loginPage.navigate()
    })
    test('loginmodule',async({loginPage,dashboard})=>{
        await loginPage.login(
            loginData.validLogin.username,
            loginData.invalidLogin.password
        )

        await expect(dashboard.Action).toHaveText("My Actions",{timeout:5000})
        await expect(dashboard.TimeAtWork).toHaveText("Time at Work")

        await dashboard.logoutPage();
        await expect(loginPage.logiTitle).toHaveText("Login")


    })

    test.afterEach(async({page})=>{
        console.log("the test is working")
    })
})