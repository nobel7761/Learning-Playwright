import { test, expect } from '@playwright/test';
const { chromium } = require('@playwright/test');


test('demo login test 1', async ({page}) => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  await page.goto('https://demo.applitools.com/');
  await page.pause();

  await page.getByPlaceholder('Enter your username').click();
  await page.getByPlaceholder('Enter your username').fill('habiburnobel');
  await page.getByPlaceholder('Enter your username').press('Tab');
  await page.getByPlaceholder('Enter your password').fill('nobel7761');
  await page.getByLabel('Remember Me').check();
  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.locator('text=ACME').isVisible();

  await page.waitForSelector('text=Sign in', { timeout: 4000 }) //set timeout in a single line for next execution
  await expect(page.locator('text=Sign in')).toHaveCount(1)
})

test('demo login test 2', async ({page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.pause();

    await page.getByPlaceholder('Username').fill("Admin")
    await page.getByPlaceholder('Password').fill("admin123")
    await page.getByRole('button', { name: 'Login' }).click()

    await page.getByRole('listitem').filter({ hasText: 'Paul Collings' }).locator('i').click()
    await page.getByRole('menuitem', { name: 'Logout' }).click()
})

test.only('demo login test 3', async ({page}) => {          //only this test will be executed if we run this file
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  await page.goto('https://admin-demo.nopcommerce.com/login');
  await page.getByLabel('Email:').click();
  await page.getByLabel('Email:').press('Control+a');
  await page.getByLabel('Email:').fill('admin@yourstore.com');
  await page.getByLabel('Email:').press('Tab');
  await page.getByLabel('Password:').press('Control+a');
  await page.getByLabel('Password:').fill('admin');
  await page.getByLabel('Remember me?').check();
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Logout' }).click();

})