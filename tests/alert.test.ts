import { expect, test } from "@playwright/test";

test("handling alerts", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo"
  );
  await page.locator("button:has-text('Click Me')").nth(1).click();

  page.on("dialog", async (alert) => {
    const text = alert.message();
    console.log(text);

    await alert.dismiss();
  });

  expect(page.locator("id=confirm-demo")).toContainText("Cancel!");
});

test("handling alerts!", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo"
  );

  page.on("dialog", async (alert) => {
    const text = alert.defaultValue();
    console.log(text);
    await alert.accept("Muhi");
  });

  await page.locator("button:has-text('Click Me')").nth(2).click();
  expect(page.locator("id=prompt-demo")).toContainText("'Muhi'");
});

test.only("handling bootstrap modal alerts!", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/bootstrap-modal-demo"
  );

  await page.click("//button[@data-target='#myModal']");
  await page.click("(//button[text()='Save Changes'])[1]");
});
