import { chromium, test } from "@playwright/test";

test("login test demo", async () => {
  const browser = await chromium.launch({
    headless: false,
  });
  const context = await browser.newContext(); // cache will not be carried forward
  const page = await context.newPage(); //it's just a tab

  await page.goto("https://ecommerce-playground.lambdatest.io/");

  await page.hover(
    "//a[@role='button']//span[@class='title'][normalize-space()='My account']"
  );
  await page.click("text=Login");
  //await page.click("'Login'"); same as "text=Login"

  await page.fill("input[name='email']", "koushik350@gmail.com");
  await page.fill("input[name='password']", "Pass123$");
  await page.click("input[value='Login']");

  await page.waitForTimeout(5000);

  const newContext = await browser.newContext(); // will open a new browser with new cache 

  const newPage = await newContext.newPage();
  await newPage.goto(
    "https://ecommerce-playground.lambdatest.io/index.php?route=account/account"
  );

  await newPage.waitForTimeout(5000);
});
