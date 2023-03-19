import {test, expect} from '@playwright/test';

test('demo test', async({page})=>{
    await page.goto('https://www.saucedemo.com/');

    

    //using any object property
    await page.click('id=user-name')
    await page.locator('id=user-name').fill('hello nobel')          //or
    await page.locator('[id="user-name"]').fill('How are you?');

    //using css selectors
    await page.click('#password');
    await page.locator('#password').fill("123456")

    //using XPath
    await page.click('//input[@id="login-button"]')          //or
    await page.click('xpath=//input[@id="login-button"]')

    await page.pause();

    //using text
    await page.locator('text=LOGIN').click()
    await page.locator('input:has-text("LOGIN")').click()
})