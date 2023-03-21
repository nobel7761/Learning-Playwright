import { test } from "@playwright/test";
import { LoginPage } from "../pages/login";

test("test", async ({ page }) => {
  const Login = new LoginPage(page);

  await Login.goto();
  await Login.login("tomsmith", "SuperSecretPassword!");
});
