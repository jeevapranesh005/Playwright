import{test as base , expect} from '@playwright/test'

import {login} from '../page/loginpage'

type fixture={
    login:login
}

export const test = base.extend<fixture>({
    login:async({page},use)=>{
        await use(new login(page))
    }
})

export {expect};