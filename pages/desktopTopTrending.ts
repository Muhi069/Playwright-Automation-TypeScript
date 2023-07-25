import { Page } from "@playwright/test";

export default class specialHotPage {
  constructor(public page: Page) {}

  async addFirstProductToTheCart() {
    await this.page.hover("//img[@title='HTC Touch HD']")
    await this.page.locator("(//button[@title='Add to Cart'])").nth(0).click();
  }

  async isToastVisible() {
    const toast = this.page.locator("//a[.='View Cart ']");
    await toast.waitFor({ state: "visible" });
    return toast;
  }
}
