import { test, expect, Page } from '@playwright/test'
import { createBdd } from 'playwright-bdd';
const { Given, When, Then, Before } = createBdd();
import { filterPOM } from "../pages/filterPOM.ts";


let page: Page;
let filterPage: filterPOM;
let result: any;

Before(async function({page}){
    filterPage = new filterPOM(page);
    await page.goto("https://www.99acres.com/search/property/buy/trivandrum?city=138&keyword=trivandrum&preference=S&area_unit=1&res_com=R");
})

Given('the user is inside the 99acres trivandrum page', async ({page}) => {
    await expect(page.url()).toBe('https://www.99acres.com/search/property/buy/trivandrum?city=138&keyword=trivandrum&preference=S&area_unit=1&res_com=R');
});

When('the user clicks a filter icon', async ({page}) => {
    result = await filterPage.singleFilter('1 RK/1 BHK');
});

Then('the filter is applied and displayed on Applied filters section', async ({page}) => {
    await expect(result).toBe('1 RK/1 BHK');
});

When('the user clicks the icon on Appliedfilter section', async ({page}) => {
    result = await filterPage.removeFilter('3 BHK')
});

Then('the filter is removed and it is not displayed on Applied filter section', async ({page}) => {  
    await expect(result).not.toBeVisible();
});

let filter: any[];

When('the user clicks multiple filter icon', async ({page}) => {
    filter = [await filterPage.multiFilter('4 BHK','New Launch')];
});

Then('the filters is applied and displayed on Applied filters section', async ({page}) => {
    result = await filterPage.multifilterclear('1 RK/1 BHK','Ready To Move');
});

When('the user clicks the clearAll icon on Appliedfilter section', async ({page}) => {
    await expect(result).not.toBeVisible();
});

When('the user clicks the dropdown box and selects an option', async ({page}) => {
    result = await filterPage.dropDownSort('Price Low to High');
});

Then('the filter is applied and it is displayed on the dropdown button', async ({page}) => {
    await expect(result).toBe('Price Low to High');
});