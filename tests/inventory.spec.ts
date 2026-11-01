import { test, expect } from '../fixtures/test-fixtures';
import { users } from '../test-data/users';



test('Verify user can add backpack to cart', async ({
  page,
  loginPage,
  inventoryPage,
}) => {
  await page.goto('/');

  // Login using test data
  await loginPage.login(
    users.standardUser.username,
    users.standardUser.password
  );

  // Verify inventory page
  await inventoryPage.verifyInventoryPage();
  await expect(inventoryPage.pageTitle).toHaveText('Products');

  // Add backpack to cart
  await inventoryPage.addBackpackToCart();

  // Verify cart count
  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
});