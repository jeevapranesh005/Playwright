import { test, expect } from '../fixtures/basefixture';
import logindata from '../testData/loginData.json';
import { ExcelReader } from '../utilites/excelReader';

test.describe("cart", () => {

    test.beforeEach(async ({ loginpage }) => {
        await loginpage.navigate();

        await loginpage.login(
            logindata.valid.username,
            logindata.valid.password
        );
    });

    const testData = ExcelReader.readExcel(
        "./testData/Book1.xlsx",
        "Sheet1"
    );

    for (const data of testData as any[]) {

        test(`order ${data.name}`, async ({ home, product, cart, page }) => {

            page.once("dialog", async dialog => {
                console.log(dialog.message());
                await dialog.accept();
            });

            await home.laptopclick();
            await product.clickAddcart();
            await product.clickcart();

            await cart.cartDetails(
                data.name,
                data.country,
                data.city,
                data.card,
                data.month,
                data.year
            );

        });

    }

});