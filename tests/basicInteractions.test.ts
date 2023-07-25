import { expect, test } from "@playwright/test";

test("Interactions with inputs", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/simple-form-demo"
  );
  const messageInput = page.locator("input#user-message");
  console.log(await messageInput.getAttribute("placeholder"));
  expect(messageInput).toHaveAttribute(
    "placeholder",
    "Please enter your Message"
  );
  console.log("Before entering dara: " + (await messageInput.inputValue()));

  console.log(await messageInput.inputValue());

  await messageInput.type("HI Muhi!");
  console.log("After entering dara: " + (await messageInput.inputValue()));
});

test("CheckBox", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/checkbox-demo"
  );
  const singleCheckbox = page.locator("id=isAgeSelected");
  expect(singleCheckbox).not.toBeChecked();
  await singleCheckbox.check(); // this also works as singleCheckbox.click()
  expect(singleCheckbox).toBeChecked();
});

test.only("sum", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/simple-form-demo"
  );
  const sum1input = page.locator("#sum1");
  const sum2input = page.locator("#sum2");

  const getValueBtn = page.locator("//button[text()='Get Sum']");
  let num1 = 121;
  let num2 = 546;

  await sum1input.type("" + num1);
  await sum2input.type("" + num2);
  await getValueBtn.click();

  const result = page.locator("#addmessage");
  console.log(await result.textContent());
  let expectedTesult = num1 + num2;
  expect(result).toHaveText("" + expectedTesult); // using "" will turn the integer into string
});
