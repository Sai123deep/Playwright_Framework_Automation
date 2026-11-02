
import { test, expect } from '../fixtures/test-fixtures';
import { checkoutData } from '../test-data/checkout-data';

test('Verify user can complete the checkout successfully @regression', async ({
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
