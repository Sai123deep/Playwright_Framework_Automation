
import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';
import { InventoryPage } from '../Pages/InventoryPage';
import { CartPage } from '../pages/CartPage';

type MyFixtures = {
  loginPage: LoginPage;
  inventoryPage: InventoryPage;
   cartPage: CartPage;
};

export const test = base.extend<MyFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  inventoryPage: async ({ page }, use) => {
    await use(new InventoryPage(page));
  },
  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },
});

export { expect };
