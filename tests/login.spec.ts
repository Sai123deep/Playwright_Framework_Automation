
import { test, expect } from '../fixtures/test-fixtures';


test('Verify successful SauceDemo login @smoke @regression', async ({ page, loginPage }) => {
  await page.goto('/');
  await loginPage.login('standard_user', 'secret_sauce');
  await expect(page).toHaveURL(/inventory.html/);
});








