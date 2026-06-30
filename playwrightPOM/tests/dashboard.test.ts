import{test,expect} from '../fixtures/baseFixture'
import loginData from '../testData/loginData.json'

test.describe('Dashboard',()=>{

    test.beforeEach(async({dashboard,loginPage})=>{
        await loginPage.navigate();

        await loginPage.login(
            loginData.validLogin.username,
            loginData.validLogin.password
        )

    })

    test('Dashboard Title @valid',async({dashboard})=>{
        await expect(dashboard.dashboardTitle).toHaveText("Dashboard")
        await expect(dashboard.Action).toHaveText("My Actions")
        await expect(dashboard.TimeAtWork).toHaveText("Time at Work")
        await expect(dashboard.imagevisible()).toBeTruthy()
    })
    

    test.afterEach(async({dashboard,loginPage})=>{
            await dashboard.logoutPage();
            console.log("logout is succesfull")
            await expect(loginPage.logiTitle).toHaveText("Login")
    })

})