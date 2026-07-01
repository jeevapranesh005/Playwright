import { error } from 'node:console'
import {test,expect} from '../fixture/basefixture'
import{readcsv,loginUser} from '../utilities/csvReader'

const user :loginUser[]=readcsv()

const validuser = user.find(user => user.type==='valid')
const invalid = user.find(user => user.type === 'invalid')

test.describe('login module by csv',()=>{

    test.beforeEach(async({login})=>{
        await login.navigate()
    })
    test('valid login',async({login})=>{

        if(!validuser){
            throw new Error("it is not a valid data");
        }
        login.loginuser(
            validuser.username,
            validuser.password
        )
        await expect(login.looutText).toHaveText('Logout')
    })
})