import{Page,Locator} from '@playwright/test'

export class product{
    readonly page:Page;
    readonly MacName:Locator;
    readonly AddcartBtn:Locator;
    readonly cartBtn:Locator;

    constructor(page:Page){
        this.page=page;
        this.MacName=page.getByRole('heading',{name:'MacBook Pro'})
        this.AddcartBtn=page.locator(".btn-lg")
        this.cartBtn= page.locator("//a[text()='Cart']")
    }

    async clickAddcart(){
        await this.AddcartBtn.click()
    }

    async clickcart(){
        await this.cartBtn.click()
    }

}
