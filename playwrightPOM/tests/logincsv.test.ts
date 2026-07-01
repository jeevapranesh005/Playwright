import { test, expect } from '../fixtures/baseFixture';
import { readcsv, loginuser } from '../utilites/csvReader';

const users: loginuser[] = readcsv();

console.log("CSV Data:", users);

const validuser = users.find(user => user.type === 'valid');
const invaliduser = users.find(user => user.type === 'invalid');

test.describe('Login Tests using CSV', () => {

    test.beforeEach(async ({ loginPage }) => {
        await loginPage.navigate();
    });

    test('Valid Login', async ({ loginPage, dashboard }) => {

        if (!validuser) {
            throw new Error('Valid user not found in CSV file');
        }

        await loginPage.login(
            validuser.username,
            validuser.password
        );

        await expect(dashboard.dashboardTitle).toHaveText('Dashboard');
    });

    test('Invalid Login', async ({ loginPage }) => {

        if (!invaliduser) {
            throw new Error('Invalid user not found in CSV file');
        }

        await loginPage.login(
            invaliduser.username,
            invaliduser.password
        );

        await expect(loginPage.errorMsg).toHaveText('Invalid credentials');
    });

});