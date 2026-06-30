import{test as base,expect} from '@playwright/test'
import { loginpage } from '../page/loginPage'

type fixture={
    loginpage:loginpage
}

export const test = base.extend<fixture>({

    loginpage:async({page},use)=>{
        await use(new loginpage(page))
    }
})
export{expect};