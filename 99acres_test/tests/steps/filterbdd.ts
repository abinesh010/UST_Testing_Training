import { test, expect, Page } from '@playwright/test'
import { createBdd } from 'playwright-bdd'
const { Given, When, Then } = createBdd();


Given('the user is inside the 99acres trivandrum page', async ({page}) => {
    await page.goto("https://www.99acres.com/search/property/buy/trivandrum?city=138&keyword=trivandrum&preference=S&area_unit=1&res_com=R");
});

When('the user clicks a filter icon', async ({page}) => {
    await page.locator("//span[text()='1 RK/1 BHK']").click();
});

Then('the filter is applied and displayed on Applied filters section', async ({page}) => {
    let filter = await page.locator("//div[contains(@class,'leftFilters__chips_wrapper')]/descendant::span[text()='1 RK/1 BHK']");
    await expect(filter).toHaveText('1 RK/1 BHK');
});

When('the user clicks the icon on Appliedfilter section', async ({page}) => {
    await page.locator("//span[text()='1 RK/1 BHK']/following-sibling::i").click();
});

Then('the filter is removed and it is not displayed on Applied filter section', async ({page}) => {
    let filter = await page.locator("//span[text()='Applied Filters']");
    await expect(filter).not.toBeVisible();
});

When('the user clicks multiple filter icon', async ({page}) => {
    await page.locator(`//span[text()='4 BHK']/preceding-sibling::i`).click();
    await page.locator(`//span[text()='New Launch']/preceding-sibling::i`).click();
});

Then('the filters is applied and displayed on Applied filters section', async ({page}) => {
    let result1 = await page.locator(`//span[text()='4 BHK']/parent::div[contains(@datalabel,'BEDROOM_CLUSTER_REMOVED')]`).textContent();
    let result2 = await page.locator(`//span[text()='New Launch']/parent::div[contains(@datalabel,'AVAILABILITY_CLUSTER_REMOVED')]`).textContent();
    await expect(result1).toBe('4 BHK');
    await expect(result2).toBe('New Launch');
});

When('the user clicks the clearAll icon on Appliedfilter section', async ({page}) => {
    let filter = await page.locator("//span[text()='Applied Filters']");
    await page.locator("//span[text()='Clear All']").click();
    await expect(filter).not.toBeVisible();
});

When('the user clicks the dropdown box and selects an option', async ({page}) => {
    await page.locator("//div[contains(@data-sstheme,'_LAB_CHILDREN')]").click();
    await page.locator("//span[text()='Price Low to High']").click();
});

Then('the filter is applied and it is displayed on the dropdown button', async ({page}) => {
    let sorter = await page.locator("//div[contains(@data-sstheme,'_LAB_CHILDREN')]").textContent();
    await expect(sorter).toBe("Price Low to High");
});