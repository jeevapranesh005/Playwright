import{test,expect} from '../fixtures/basefixture'
import loginData from '../testData/loginData.json'


test.describe('login module',()=>{

    test.beforeEach(async({loginpage})=>{
        await loginpage.navigate()
    })

    test("invalid login",async({loginpage,page})=>{
         page.once('dialog',dialog=>{
            console.log(dialog.message())
            dialog.accept()     
        })
        await loginpage.login(
            loginData.invalid.username,
            loginData.invalid.password
        )
        console.log("test completed")
    })
    test('valid login',async({loginpage})=>{
        await loginpage.login(
            loginData.valid.username,
            loginData.valid.password
        )
        await expect(loginpage.welcome).toBeTruthy()

    })
})