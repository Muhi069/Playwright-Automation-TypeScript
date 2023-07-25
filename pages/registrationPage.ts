import { Page } from "@playwright/test";

export default class RegisterPage {
  constructor(public page: Page) {}

  async enterFirstName(firstname: string) {
    await this.page.locator("#input-firstname").type(firstname);
  }

  async enterLastName(lastname: string) {
    await this.page.locator("#input-lastname").type(lastname);
  }

  async enterEmail(email: string) {
    await this.page.locator("#input-email").type(email);
  }

  async enterTelephone(telephone: string) {
    await this.page.locator("#input-telephone").type(telephone);
  }

  async enterPassword(password: string) {
    await this.page.locator("#input-password").type(password);
  }

  async enterConfirmPass(confirmPass: string) {
    await this.page.locator("#input-confirm").type(confirmPass);
  }

  isSubscribedChecked() {
    return this.page.locator("#input-newsletter-no");
  }

  async clickTermNCondition() {
    await this.page
      .getByText("I have read and agree to the Privacy Policy")
      .click();
  }

  async clickContinueToRegister() {
    await this.page.click("input[value='Continue']");
  }
}
