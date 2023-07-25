import { expect, test } from "@playwright/test";
import RegisterPage from "../pages/registrationPage";
import loginPage from "../pages/loginPage";
import dektopTopTrending from "../pages/desktopTopTrending";
import homePage from "../pages/homePage";

const email = "muhi@gmail.com";
const firstName = "Mutasim";
const lastName = "Hasan";
const phone = "+8801521490542";
const password = "Pass123$";
const confirmPass = "Pass123$";

test.describe("page object model test", async () => {
  test("Register test_01", async ({ page, baseURL }) => {
    const register = new RegisterPage(page);
    await page.goto(`${baseURL}route=account/register`);
    await register.enterFirstName(firstName);
    await register.enterLastName(lastName);
    await register.enterEmail(email);
    await register.enterTelephone(phone);
    await register.enterPassword(password);
    await register.enterConfirmPass(confirmPass);
    expect(register.isSubscribedChecked()).toBeChecked();
    await register.clickTermNCondition();
    await register.clickContinueToRegister();
  });

  test("Login test_02", async ({ page, baseURL }) => {
    const login = new loginPage(page);
    await page.goto(`${baseURL}route=account/login`);
    await login.EnterEmail(email);
    await login.EnterPassword(password);
    await login.ClickToLoginBtn();
    expect(await page.title()).toBe("My Account");
  });

  test("add to cart test_03", async ({ page, baseURL }) => {
    const login = new loginPage(page);
    const homepage = new homePage(page);
    const desktop = new dektopTopTrending(page);
    await page.goto(`${baseURL}route=account/login`);
    await login.doLogin(email, password);
    await homepage.ClickOnHome();
    await homepage.ClickOnDesktopFromTopTrending();
    const isCartVisible = await desktop.isToastVisible();
    expect(isCartVisible).toBeVisible();
  });
});
