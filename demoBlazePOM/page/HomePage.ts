
import{Page,Locator} from '@playwright/test'


export class Home{
    readonly page:Page;
    readonly laptop:Locator;
    readonly mac:Locator;

    constructor(page:Page){
        this.page=page;
        this.laptop=page.getByRole('link',{name:"Laptops"})
        this.mac=page.getByRole('link',{name:"MacBook Pro"})
    }

    async laptopclick(){
        await this.laptop.click()
        await this.mac.scrollIntoViewIfNeeded()
        await this.mac.click()
        
    }
}