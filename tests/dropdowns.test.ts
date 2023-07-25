import { test } from "@playwright/test";

test("handling dropdown", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/select-dropdown-demo"
  );

  await page.selectOption("#select-demo", {
    label: "Tuesday",
    //value: "Friday",
    //index: 2
  });

  await page.selectOption("#multi-select", [
    {
      label: "Texas",
    },
    {
      index: 2,
    },
    {
      value: "Washington",
    },
  ]);
});

test.only("bootstrap dropdown", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo"
  );
  await page.click("#country+span");
  await page
    .locator("ul#select2-country-results") // this is UL locator
    .locator("li", {
      hasText: "India",
    }) // withing UL we are looking of LI locator
    .click();
});
