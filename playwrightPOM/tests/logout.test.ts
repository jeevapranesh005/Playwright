import { LoginPage } from './../page/LoginPage';
import {test,expect} from '../fixtures/baseFixture'
import loginData from '../testData/loginData.json'

test.describe('logout',()=>{

    test.beforeEach(async({loginPage})=>{
        await loginPage.navigate()
        await loginPage.login(
            loginData.validLogin.username,
            loginData.validLogin.password
        );
    })
    test('logout @valid',async({loginPage,dashboard})=>{
        await expect(dashboard.TimeAtWork).toHaveText("Time at Work")
        await expect(dashboard.imagevisible()).toBeTruthy()
        await dashboard.logoutPage();
        await expect(loginPage.logiTitle).toHaveText("Login")
    })

})