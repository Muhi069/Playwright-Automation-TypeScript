import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://ecommerce-playground.lambdatest.io/");
  await page.hover(
    "//a[@role='button']//span[@class='title'][normalize-space()='My account']"
  );
  await page.getByRole("link", { name: "Login" }).click();
  await page.getByPlaceholder("E-Mail Address").click();
  await page.getByPlaceholder("E-Mail Address").fill("koushik350@gmail.com");
  await page.getByPlaceholder("E-Mail Address").press("Tab");
  await page.getByPlaceholder("Password").fill("Pass123$");
  await page.getByRole("button", { name: "Login" }).click();
  await page
    .getByRole("link", { name: " Edit your account information" })
    .click();
  await page
    .locator("#content div")
    .filter({ hasText: "First Name" })
    .locator("div")
    .click();
  await page.getByPlaceholder("First Name").click();
  await page.getByPlaceholder("First Name").fill("Koushik");
  await page.getByPlaceholder("First Name").press("Tab");
  await page.getByPlaceholder("Last Name").fill("C");
  await page.getByPlaceholder("Last Name").press("Tab");
  await page.getByPlaceholder("E-Mail").fill("koushik350@gmail.com");
  await page.getByPlaceholder("E-Mail").press("Tab");
  await page.getByPlaceholder("Telephone").fill("1234567899");
  await page.getByRole("button", { name: "Continue" }).click();
  await page.hover(
    "//a[@role='button']//span[@class='title'][normalize-space()='My account']"
  );
  await page.getByRole("link", { name: "Logout", exact: true }).click();
});
