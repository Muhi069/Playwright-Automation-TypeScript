import { test } from "@playwright/test";

test("Interact with multiple tabs", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/window-popup-modal-demo"
  );
  console.log(page.url());

  const [newWindow] = await Promise.all([
    //we are using promise to perform multiple tasks
    page.waitForEvent("popup"),
    page.click("'Follow On Twitter'"),
  ]);

  console.log(newWindow.url());
});

test.only("Interact with multiple tabs at the same time", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/window-popup-modal-demo"
  );
  console.log(page.url());

  const [multiPage] = await Promise.all([
    //we are using promise to perform multiple tasks
    page.waitForEvent("popup"),
    page.click("#followboth"),
  ]);
  await page.waitForLoadState();
  const pages = multiPage.context().pages(); // koto gula pages ase seta return kore dibe
  console.log("No of tabs" + pages.length);

  pages.forEach((tab) => {
    console.log(tab.url());
  });
});
