import { test, expect } from '@playwright/test';

test('Assertion Demo', async({page})=>{
    await page.goto('https://kitchen.applitools.com/');
    await page.pause();

/*     await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveCount(1)
    // await expect(page.locator('text=The Kitchen')).toHaveCount(1)

    if(await page.$("text=The Kitchen")){       //! by using this dollar sign it will return true/false
        await page.getByRole('heading', { name: 'The Kitchen' }).click()
    } */

    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toBeVisible()
    await expect.soft(page.getByRole('heading', { name: 'The Kitchen' })).toBeDisabled()

    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toBeEnabled()
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toBeDisabled()

    // await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveText("The Kitchen")
    // await expect(page.getByRole('heading', { name: 'The Kitchen' })).not.toHaveText("Nobel")


/*     await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveAttribute('class', /chakra-heading*./)
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveClass(/chakra-heading*./)        //! *. means there is something after this */

    await expect(page).toHaveURL('https://kitchen.applitools.com/')
    await expect(page).toHaveTitle(/The*./)
    await expect(page).toHaveTitle(/.*Kitchen/)
    await expect(page).toHaveScreenshot()

})