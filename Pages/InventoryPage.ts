import { Page, Locator } from '@playwright/test';
export class InventoryPage {
  readonly page: Page;
  readonly pageTitle: Locator;
  readonly shoppingCartLink: Locator;
  readonly addToCartButton: Locator;
  constructor(page: Page) {
    this.page = page;

    this.pageTitle = page.locator('.title');
    this.shoppingCartLink = page.locator('.shopping_cart_link');
    this.addToCartButton = page.locator(
      '[data-test="add-to-cart-sauce-labs-backpack"]'
    );
  }
  async verifyInventoryPage() {
    await this.pageTitle.waitFor({ state: 'visible' });
  }
  async addBackpackToCart() {
    await this.addToCartButton.click();
  }
  async openShoppingCart() {
    await this.shoppingCartLink.click();
  }
}