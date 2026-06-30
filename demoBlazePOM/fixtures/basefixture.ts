


import{test as base ,expect} from '@playwright/test'
import{loginpage} from '../page/loginPage'
import { Home } from '../page/HomePage'
import { product } from '../page/productPage'
import{cart} from '../page/CartPage'

type fixture={
    loginpage:loginpage
    home:Home
    product:product
    cart:cart
}

export const test = base.extend<fixture>({

    loginpage:async({page},use)=>{
        await use(new loginpage(page))
    },
    home:async({page},use)=>{
        await use(new Home(page))
    },
    product:async({page},use)=>{
        await use(new product(page))
    },
    cart:async({page},use)=>{
        await use(new cart(page))
    }
})

export {expect};