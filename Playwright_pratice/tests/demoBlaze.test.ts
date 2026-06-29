import { test, expect } from '@playwright/test';
import { title } from 'node:process';

test.describe("Login Modules", () => {

    test.beforeEach(async ({ page }) => {

        // test Timeout
        page.setDefaultTimeout(10000);

        // Navigation Timeout
        page.setDefaultNavigationTimeout(30000);

        await page.goto("https://demoblaze.com/");
    });

    test.describe("Login Valid Details", () => {

        test("Valid Login @Smoke", async ({ page }, testInfo) => {

            console.log(page.url());
            console.log(await page.title());
            console.log("The Test title Name: ", testInfo.title);

            const login_btn = page.locator("#login2");

            // Mouse Action
            await login_btn.click();

            await expect(
                page.locator("//input[@id='loginusername']/ancestor::div[@role='document']")
            ).toBeVisible();

            // Keyboard Action
            await page.keyboard.press("Tab");
            await page.keyboard.press("Tab");

            await page.keyboard.type("admin");

            await page.locator("#loginpassword").fill("admin");

            // Action timeout
            await page.locator("//button[text()='Log in']").click({timeout: 10000});

            // Assertion timeout
            await expect(page.locator('#nameofuser')).toContainText('Welcome', {
                timeout: 30000
            });

            await expect.soft(
                page.getByRole('link', { name: 'Log out' })
            ).toHaveText('Log out');

            await expect(
                page.getByRole('link', { name: 'Log out' })
            ).toBeVisible();

            console.log(testInfo.expectedStatus);
        });

    });

    test.describe("Invalid Login Test Cases", () => {

        const invalid_login = [
            {title: "Invalid-username", username: "owiq saa", password: "admin", expected: "User does not exist." },
            {title: "Inavlid-password", username: "admin", password: "resgdf", expected: "Wrong password." }
        ];

        for (const i of invalid_login) {

            test(`Invalid login with ${i.title} @Regression`, async ({ page }, testInfo) => {

                console.log(page.url());
                console.log(await page.title());
                console.log("The Test title Name: ", testInfo.title);

                const login_btn = page.locator("#login2");

                await login_btn.click();

                await expect(
                    page.locator("//input[@id='loginusername']/ancestor::div[@role='document']")
                ).toBeVisible();

                await page.keyboard.press("Tab");
                await page.keyboard.press("Tab");

                await page.keyboard.type(i.username);

                await page.locator("#loginpassword").fill(i.password);

                let msg = "";

                page.once("dialog", async (dialog) => {

                    msg = dialog.message();

                    console.log("Alert Message :", msg);

                    await dialog.accept();

                });

                await page.locator("//button[text()='Log in']").click();

                await expect.poll(() => msg).toBe(i.expected);
                
                console.log(testInfo.expectedStatus);
            });
        }

    });

    test.afterEach(async () => {
        console.log("Test is completed");
    });
});