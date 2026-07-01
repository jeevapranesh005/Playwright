import { Page,Locator } from "@playwright/test";
import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.resolve(__dirname, '.env') });


export class login{
    readonly page:Page;
    readonly loginLink:Locator;
    readonly loginEmail:Locator;
    readonly loginPass:Locator;
    readonly login_btn:Locator;
    readonly looutText:Locator;
    readonly errortext:Locator;

    constructor(page:Page){
        this.page=page;
        this.loginLink=page.locator("//a[@href='/login']");
        this.loginEmail=page.locator("//input[@data-qa='login-email']")
        this.loginPass=page.locator("//input[@data-qa='login-password']")
        this.login_btn=page.locator("//button[@data-qa='login-button']")
        this.looutText=page.locator("//a[@href='/logout']")
        this.errortext=page.locator("//p[text()='Your email or password is incorrect!']")
    }

    async navigate(){
        await this.page.goto(process.env.base_url!)
    }

    async loginuser(username:string,password:string){
        await this.loginLink.click()
        await this.loginEmail.fill(username)
        await this.loginPass.fill(password)
        await this.login_btn.click()
    }

}