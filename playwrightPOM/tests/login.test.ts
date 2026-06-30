import{test,expect} from '../fixtures/baseFixture'
import loginData from '../testData/loginData.json'

test.describe('login Test',()=>{

    test.beforeEach(async({loginPage})=>{
        await loginPage.navigate()
    })

    test('Invalid login ',async({loginPage})=>{
        await loginPage.login(
            loginData.invalidLogin.username,
            loginData.invalidLogin.password
        );

        await expect(loginPage.errorMsg).toHaveText("Invalid credentials");
    })

    test('valid login @valid',async({loginPage,dashboard})=>{
         await loginPage.login(
            loginData.validLogin.username,
            loginData.validLogin.password
        );
        await expect(dashboard.dashboardTitle).toHaveText("Dashboard")
    

    })
})
