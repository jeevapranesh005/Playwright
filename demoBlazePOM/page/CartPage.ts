

import{Page,Locator}from '@playwright/test'

export class cart{
    readonly page:Page;
    readonly PlaceOrder:Locator;
    readonly name:Locator;
    readonly country:Locator;
    readonly city:Locator;
    readonly creditCard:Locator;
    readonly month:Locator;
    readonly year:Locator;
    readonly purchaseBtn:Locator;
    readonly okBtn:Locator;

    constructor(page:Page){
        this.page=page;
        this.PlaceOrder=page.locator(".btn-success")
        this.name=page.locator("#name")
        this.country=page.locator("#country")
        this.city=page.locator("#city")
        this.creditCard=page.locator("#card")
        this.month=page.locator("#month")
        this.year=page.locator("#year")
        this.purchaseBtn=page.locator("//button[@onclick='purchaseOrder()']")
        this.okBtn =page.locator("//button[text()='OK']")
    }
    async cartDetails(name:string,country:string,city:string,cretidNo:string,month:string,year:string){
        await this.PlaceOrder.click()
        await this.name.fill(name)
        await this.country.fill(country)
        await this.city.fill(city)
        await this.creditCard.fill(cretidNo)
        await this.month.fill(month)
        await this.year.fill(year)
        await this.purchaseBtn.click()
        await this.okBtn.click()

    }

}