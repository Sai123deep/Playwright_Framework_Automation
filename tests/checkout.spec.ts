
/*import { test, expect } from '../fixtures/test-fixtures';

test('Verify user can complete the checkout successfully', async ({
  page,
  loginPage,
  cartPage,
}) => {
  // Step 1: Login
  await page.goto('https://www.saucedemo.com/');

  await loginPage.login('standard_user', 'secret_sauce');

  await expect(page).toHaveURL(
    /inventory\.html/
  );

  // Step 2: Add the backpack to the cart
  //await page.getByTestId('add-to-cart-sauce-labs-backpack').click();

  //await page.locator('[data-test="shopping-cart-badge"]').click();
  //await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.getByTestId('add-to-cart-sauce-labs-backpack').click();


  // Step 3: Open the cart
  await page.getByTestId('shopping-cart-link').click();

  await expect(page).toHaveURL(/cart\.html/);

  // Step 4: Verify the product in the cart
  await cartPage.verifyProductInCart(
    'Sauce Labs Backpack'
  );

  // Step 5: Proceed to checkout
  await cartPage.proceedToCheckout();

  await expect(page).toHaveURL(/checkout-step-one\.html/);

  // Step 6: Enter customer information
  await cartPage.enterCheckoutInformation(
    'Saideep',
    'Tester',
    '600001'
  );

  await expect(page).toHaveURL(/checkout-step-two\.html/);

  // Step 7: Verify the order overview
  await expect(
    page.getByText('Sauce Labs Backpack')
  ).toBeVisible();

  // Step 8: Finish the order
  await cartPage.finishOrder();

  // Step 9: Verify successful purchase
  await expect(page).toHaveURL(/checkout-complete\.html/);

  await cartPage.verifyOrderConfirmation();
});
*/

//===================


import { test, expect } from '../fixtures/test-fixtures';
import { checkoutData } from '../test-data/checkout-data';

test('Verify user can complete the checkout successfully', async ({
  page,
  loginPage,
  cartPage,
}) => {

  // Login
  await page.goto('https://www.saucedemo.com/');

  await loginPage.login(
    checkoutData.validUser.username,
    checkoutData.validUser.password
  );

  await expect(page).toHaveURL(/inventory\.html/);

  // Add product to cart
  await page.getByTestId(
    checkoutData.product.addToCartButton
  ).click();

  // Open cart
  await page.getByTestId('shopping-cart-link').click();

  // Verify cart product
  await cartPage.verifyProductInCart(
    checkoutData.product.name
  );

  await expect(
    page.getByText(checkoutData.product.price)
  ).toBeVisible();

  // Checkout
  await cartPage.proceedToCheckout();

  await cartPage.enterCheckoutInformation(
    checkoutData.customerDetails.firstName,
    checkoutData.customerDetails.lastName,
    checkoutData.customerDetails.postalCode
  );

  // Verify checkout overview
  await expect(
    page.getByText(checkoutData.product.name)
  ).toBeVisible();

  // Finish order
  await cartPage.finishOrder();

  // Verify confirmation
  await cartPage.verifyOrderConfirmation();

  await expect(page).toHaveURL(/checkout-complete\.html/);
});
