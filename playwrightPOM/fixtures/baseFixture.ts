
import{test as base, expect} from '@playwright/test';
import { LoginPage } from '../page/LoginPage';
import { Dashboard } from '../page/DashboardPage';

type fixture={
    
    loginPage:LoginPage
    dashboard:Dashboard
  
};
export const test = base.extend<fixture>({

    loginPage:async({page},use)=>{
        await use(new LoginPage(page));
    },
    dashboard: async({page},use)=>{
        await use(new Dashboard(page))
    },

});
export {expect};

