import{Page, Locator} from '@playwright/test'


export class LoginPage{
    readonly page:Page
    readonly username:Locator
    readonly password:Locator
    readonly login_btn:Locator
    readonly logiTitle:Locator
    readonly errorMsg :Locator

    constructor(page:Page){
        this.page=page;
        this.username=page.locator("//input[@name='username']");
        this.password=page.locator("//input[@name='password']");
        this.login_btn=page.locator("//button[@type='submit']")
        this.logiTitle= page.locator('h5')
        this.errorMsg = page.locator('.oxd-alert-content-text')
    }

    async navigate(){
        await this.page.goto(process.env.base_url!,{waitUntil:"networkidle"})
    }

    async getLoginTitle(){
        return await this.logiTitle.textContent()
    }

    async login(username:string , password:string){
        await this.username.fill(username)
        await this.password.fill(password)
        await this.login_btn.click()
    }

    async errormsg(){
        return this.errorMsg.textContent()
    }
}