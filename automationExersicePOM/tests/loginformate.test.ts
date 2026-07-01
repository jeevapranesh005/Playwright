
import{test , expect} from '../fixture/basefixture'
import loginobjdata from '../testData/loginobjdata.json'

interface loginobjdata{
    user:string;
    password:string;
    title:string;
    expect:string
}

const data = loginobjdata as loginobjdata[]


test.describe('login module',()=>{

    test.beforeEach(async({login})=>{
        await login.navigate()
    })

    for(let i of data){

        test(`login ${i.title} user`,async({login})=>{
            await login.loginuser(
                i.user,
                i.password
            )

            if(i.expect=='pass'){
                await expect(login.looutText).toHaveText('Logout')
            }
            if(i.expect=='fail'){
                await expect(login.errortext).toHaveText('Your email or password is incorrect!')
            }
        })
    }
})
