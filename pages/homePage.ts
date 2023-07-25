import { Page } from "@playwright/test";

export default class homePage {
  constructor(public page: Page) {}

  async ClickOnHome() {
    await this.page.click("//span[contains(text(),'Home')]");
  }

  async ClickOnDesktopFromTopTrending() {
    await this.page.click("//img[@alt='Desktops']");
  }
}
