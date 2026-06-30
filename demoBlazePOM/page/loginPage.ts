import { Page,Locator } from "@playwright/test";

export class loginpage{
    readonly page:Page;
    readonly loginlink:Locator;
    readonly usename:Locator;
    readonly password:Locator;
    readonly login_btn:Locator;
    readonly welcome_msg:Locator;

    constructor(page:Page){
        this.page=page;
        this.loginlink=page.locator("#login2")
        this.usename=page.locator("#loginusername")
        this.password=page.locator("#loginpassword")
        this.login_btn=page.locator("//button[@onclick='logIn()']")
        this.welcome_msg=page.locator("#nameofuser")
    }

    async navigate(){
        await this.page.goto(process.env.base_url!)
    }
    async login(username:string,password:string){
        await this.loginlink.click()
        await this.usename.fill(username)
        await this.password.fill(password)
        await this.login_btn.click()

    }
    async welcome(){
        await this.welcome_msg.isVisible()
    }

}