import { test, expect } from "@playwright/test";

test.skip("Test one", async ({ page }) => {});

test("not yet ready", async ({ page }) => {
  test.fail();
});

test.fixme("test two", async ({ page }) => {
  //...
});

test("slow test", async ({ page }) => {
  test.slow();
});

/* test.only("only annotations", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  await page.pause();
}); */

test.skip("conditional skip", async ({ page, browserName }) => {
  test.skip(browserName === "firefox", "Still working on it");
});

test("test login page @smoke", async ({ page }) => {
  //...
});
