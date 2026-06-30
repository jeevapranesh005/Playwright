import{Page,Locator} from '@playwright/test'
import process from 'node:process';

export class loginpage{
    readonly page:Page;
    readonly myacc:Locator;
    readonly loinpageBTN:Locator;
    readonly loginPage:Locator;
    readonly email:Locator;
    readonly password:Locator;
    readonly login_btn:Locator;
    readonly errormsg:Locator;
    readonly loginsucc:Locator;

    constructor(page:Page){
        this.page=page;
        this.myacc=page.locator("//span[text()='My Account']")
        this.loinpageBTN=page.locator("//a[text()='Login']")
        this.loginPage=page.locator('h2').nth(1)
        this.email=page.getByPlaceholder("E-Mail Address")
        this.password=page.getByPlaceholder("Password")
        this.login_btn=page.locator("//input[@value='Login']")
        this.errormsg=page.locator("//div[@class='alert alert-danger alert-dismissible']")
        this.loginsucc=page.locator("//h2[text()='My Account']")
    }

    async navigate(){
        await this.page.goto(process.env.base_url!)
    }

    async loginpage(){
        await this.myacc.click();
        await this.loinpageBTN.click()
        
    }
    async login(username:string,password:string){
        await this.email.fill(username)
        await this.password.fill(password)
        await this.login_btn.click()

    }

    async Errormsg(){
        return await this.errormsg.isVisible()
    }

} 
