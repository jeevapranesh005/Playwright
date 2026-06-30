
import { Page,Locator } from "@playwright/test";

export class Dashboard{

    readonly page:Page;
    readonly dashboardTitle:Locator;
    readonly TimeAtWork:Locator;
    readonly Action:Locator;

    readonly menu:Locator;
    readonly logout:Locator;

    readonly image:Locator;

    constructor(page:Page){
        this.page=page;
        this.dashboardTitle=page.locator(".oxd-topbar-header-breadcrumb-module")
        this.TimeAtWork=page.getByText("Time at Work")
        this.Action=page.getByText("My Actions")

        this.menu=page.locator("//span[@class='oxd-userdropdown-tab']")
        this.logout=page.locator("//a[@href='/web/index.php/auth/logout']")
        this.image=page.locator("//img[@alt='client brand banner']")
        
    }
    async getdashboardTite(){
        return this.dashboardTitle.textContent()
    }

    async logoutPage(){
        await this.menu.click()
        await this.logout.click()

    }
    async imagevisible(){
        return this.image.isVisible()
    }
}