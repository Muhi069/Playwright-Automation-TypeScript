import { expect, test } from "@playwright/test";

test("frames", async ({ page }) => {
  await page.goto("https://letcode.in/frame");

  const allframes = page.frames();
  console.log("No of frames: " + allframes.length); //page e kotogula frame ase seta check kora hoise ekhane 

  const frame = page.frameLocator("#firstFr");
  await frame.locator("input[name='fname']").fill("Muhi");
  await frame.locator("input[name='lname']").fill("Hasan");

  const innerFrame = frame.frameLocator("iframe[src='innerFrame']");
  innerFrame.locator("input[name='email']").fill("muhi@gmail.com");

  //   const myFrame = page.frame("firstFr");
  //   await myFrame?.fill("input[name= 'fname']", "Muhi");
  //   await myFrame?.fill("input[name='lname']", "Hasan");

  //   expect(await myFrame?.locator("p.has-text-info").textContent()).toContain(
  //     "You have entered"
  //   );
});
