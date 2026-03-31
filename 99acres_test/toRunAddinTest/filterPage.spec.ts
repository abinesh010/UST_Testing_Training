import { test, expect, Page } from "@playwright/test"
import { filterPOM } from "../pages/filterpom.ts"

let page: Page;
let filterPage: filterPOM;

test.beforeEach(async ({page}) => {
    await page.goto("https://www.99acres.com/search/property/buy/trivandrum?city=138&keyword=trivandrum&preference=S&area_unit=1&res_com=R");
    filterPage = new filterPOM(page);
})

test("To validate whether the filter can be applied ", async ({page}) => {
    let filtertext = '1 RK/1 BHK';
    let filterResult = await filterPage.singleFilter(filtertext);
    await expect(filterResult).toBe(filtertext);
})

test("To validate whether the filters can be cleared", async ({page}) => {
    let filtertext = '3 BHK';
    let filter = await filterPage.removeFilter(filtertext);
    await expect(filter).not.toBeVisible();
 })

 test("To validate if multiple filter can be applied", async ({page}) => {
    let filtertext1 = '4 BHK';
    let filtertext2 = 'New Launch';
    let filterResult = await filterPage.multiFilter(filtertext1,filtertext2);
    //console.log(`${filterResult[0]},${filterResult[1]},${filtertext1},${filtertext2}`);
    await expect(filterResult[0]).toBe(filtertext1);
    await expect(filterResult[1]).toBe(filtertext2);
})

test("To validate whether multiple filters can be cleared", async ({page}) => {
    let filterText1 = '1 RK/1 BHK';      
    let filterText2 = 'Ready To Move';
    let filter = (await filterPage.multifilterclear(filterText1,filterText2));
    await expect(filter).not.toBeVisible();
})

test("To validate the sort function", async ({page}) => {
    let filterText = 'Price Low to High';
    let sorter = await filterPage.dropDownSort(filterText);
    await expect(sorter).toBe(filterText);
})