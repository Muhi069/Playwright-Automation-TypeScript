import { test } from "@playwright/test";

test("download files", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/generate-file-to-download-demo"
  );
  await page.type("#textbox", "Like, Share, comment & subs");
  await page.click("id=create");
  const download = await Promise.all([
    page.waitForEvent("download"),
    page.click("id=link-to-download"),
  ]);
  const fileName = download[0].suggestedFilename();
  await download[0].saveAs(fileName);
});

test("upload file", async ({page}) => {
    
})
