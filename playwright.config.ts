import type { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  testMatch: ["pomtest/addToCart.test.ts"],
  use: {
    baseURL: "https://ecommerce-playground.lambdatest.io/index.php?",
    headless: false,
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    launchOptions: {
      slowMo: 1000,
    },
  },
  retries: 2,
  reporter: [
    ["dot"],
    [
      "json",
      {
        outputFile: "jsonReports/jsonReport.json",
      },
    ],
    [
      "html",
      {
        open: "never",
      },
    ],
  ],
};
export default config;
