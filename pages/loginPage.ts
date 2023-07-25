import { Page } from "@playwright/test";

export default class loginPage {
  constructor(public page: Page) {}

  async EnterEmail(email: string) {
    await this.page.locator("#input-email").type(email);
  }

  async EnterPassword(password: string) {
    await this.page.locator("#input-password").type(password);
  }

  async ClickToLoginBtn() {
    await this.page.click("//input[@value='Login']");
  }

  async doLogin(email: string, password: string) {
    await this.EnterEmail(email);
    await this.EnterPassword(password);
    await this.ClickToLoginBtn();
  }
}
