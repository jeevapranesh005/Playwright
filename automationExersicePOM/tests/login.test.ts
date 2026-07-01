import{test,expect} from '../fixture/basefixture'
import logindata from '../testData/logindata.json'

test.describe('login module',()=>{

    test.beforeEach(async({login})=>{
        await login.navigate()
    })

    test('valid login',async({login})=>{
        await login.loginuser(
            logindata.valid.user,
            logindata.valid.password
        )
        await expect(login.looutText).toHaveText('Logout')
    })

    test('invalid login',async({login})=>{
        await login.loginuser(
            logindata.invalid.user,
            logindata.invalid.password
        )
        await expect(login.errortext).toHaveText('Your email or password is incorrect!')
    })
})