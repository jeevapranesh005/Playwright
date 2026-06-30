import{test,expect} from '../fixtures/basefixture'
import { loginpage } from '../page/loginPage'
import logindata from '../testData/logindata.json'

test.describe('login module',()=>{

    test.beforeEach(async({loginpage})=>{
        await loginpage.navigate()
    })

    test('invalid',async({loginpage})=>{
        await loginpage.loginpage()
        await expect(loginpage.loginPage).toHaveText('Returning Customer')
        await loginpage.login(
            logindata.invalid.email,
            logindata.invalid.password
        )
        await expect(loginpage.Errormsg).toBeTruthy()
    })

    test("valid login",async({loginpage})=>{
        await loginpage.loginpage()
        await expect(loginpage.loginPage).toHaveText('Returning Customer')
        await loginpage.login(
            logindata.valid.email,
            logindata.valid.password
        )
        
        //await expect(loginpage.loginsucc).toHaveText("My Account")
        console.log("login succesfull")
        console.log("the data is ", await loginpage.loginsucc.textContent())


    })
})