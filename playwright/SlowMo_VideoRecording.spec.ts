import { test, expect, chromium } from "@playwright/test";

test("demo slowmo video recording", async () => {
  const browser = await chromium.launch({
    slowMo: 500,
    headless: false,
  });
  const context = await browser.newContext({
    recordVideo: {
      dir: "videos/",
      size: { width: 800, height: 600 },
    },
  });
  const page = await context.newPage();

  /*=======test starts=======*/
  await page.goto("https://kitchen.applitools.com/");
  await expect(page).toHaveTitle(/The*./);
  await expect(page).toHaveTitle(/.*Kitchen/);
  /*=======test ends=======*/

  await context.close();
});
