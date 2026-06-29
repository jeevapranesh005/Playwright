import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://demoblaze.com/');
    await page.locator("#login2").click();
    page.setDefaultTimeout(60000);
});

test.describe('Login', () => {

    const data = [
        {
            title: "invalid username",
            username: "jer4e",
            password: "2432",
            expect: "User does not exist."
        },
        {
            title: "invalid password",
            username: "jeevs",
            password: "43234",
            expect: "Wrong password."
        }
    ];

    for (const i of data) {

        test(`Login - ${i.title}`, async ({ page }) => {

            await page.locator('#loginusername').fill(i.username);
            await page.locator('#loginpassword').fill(i.password);

            let msg = "";

        
                page.once('dialog', async (dialog) => {
                    msg = dialog.message();
                    await dialog.accept();
                    
                });
            

            await page.locator("//button[@onclick='logIn()']").click();



            console.log(msg);

            await expect(msg).toBe(i.expect);

        });

    }
});