import { test } from '@playwright/test';
import loginData from '../testData/loginData1.json';

interface LoginData {
    testName: string;
    uname: string;
    password: string;
    expectedresult: string;
}

const data: LoginData[] = loginData;

for (const user of data) {

    test(user.testName, async ({ page }) => {

        console.log(user.uname);
        console.log(user.password);
        console.log(user.expectedresult);

    });

}