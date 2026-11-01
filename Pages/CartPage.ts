
import { Page, Locator, expect } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  readonly cartItem: Locator;
  readonly checkoutButton: Locator;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly postalCodeInput: Locator;
  readonly continueButton: Locator;
  readonly finishButton: Locator;
  readonly confirmationMessage: Locator;

  constructor(page: Page) {
    this.page = page;

    // Cart page locators
    this.cartItem = page.getByTestId('inventory-item-name');
    this.checkoutButton = page.getByTestId('checkout');

    // Checkout information page locators
    this.firstNameInput = page.getByTestId('firstName');
    this.lastNameInput = page.getByTestId('lastName');
    this.postalCodeInput = page.getByTestId('postalCode');
    this.continueButton = page.getByTestId('continue');

    // Checkout overview page locators
    this.finishButton = page.getByTestId('finish');

    // Order confirmation locator
    this.confirmationMessage = page.getByTestId('complete-header');
  }

  async verifyProductInCart(productName: string) {
    await expect(this.cartItem).toContainText(productName);
  }

  async proceedToCheckout() {
    await this.checkoutButton.click();
  }

  async enterCheckoutInformation(
    firstName: string,
    lastName: string,
    postalCode: string
  ) {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.postalCodeInput.fill(postalCode);
    await this.continueButton.click();
  }

  async finishOrder() {
    await this.finishButton.click();
  }

  async verifyOrderConfirmation() {
    await expect(this.confirmationMessage)
      .toHaveText('Thank you for your order!');
  }
}
