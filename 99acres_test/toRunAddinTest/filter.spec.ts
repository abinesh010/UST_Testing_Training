import { test, expect } from "@playwright/test";

test.only("To validate whether the filter can be applied ", async ({page}) => {
    await page.goto("https://www.99acres.com/search/property/buy/trivandrum?city=138&keyword=trivandrum&preference=S&area_unit=1&res_com=R");
    await page.locator("//span[text()='1 RK/1 BHK']").click();      //to filter 1bhk /1rk properties
    let filter = await page.locator("//div[contains(@class,'leftFilters__chips_wrapper')]/descendant::span[text()='1 RK/1 BHK']");
    await expect(filter).toHaveText('1 RK/1 BHK');
})

 test("To validate whether the filters can be cleared", async ({page}) => {
    await page.goto("https://www.99acres.com/search/property/buy/trivandrum?city=138&keyword=trivandrum&preference=S&area_unit=1&res_com=R");
    await page.locator("//span[text()='1 RK/1 BHK']").click();      //to filter 1bhk /1rk properties
    let filter = await page.locator("//span[text()='Applied Filters']");
    await page.locator("//span[text()='1 RK/1 BHK']/following-sibling::i").click();
    await expect(filter).not.toBeVisible();
 })

 test("To validate whether multiple filters can be cleared", async ({page}) => {
    await page.goto("https://www.99acres.com/search/property/buy/trivandrum?city=138&keyword=trivandrum&preference=S&area_unit=1&res_com=R");
    await page.locator("//span[text()='1 RK/1 BHK']").click();      //to filter 1bhk /1rk properties
    await page.locator("//span[text()='Ready to move']").click();     //to filter ready to move properties
    let filter = await page.locator("//span[text()='Applied Filters']");
    await page.locator("//span[text()='Clear All']").click();
    await expect(filter).not.toBeVisible();
 })

test("To validate if multiple filter can be applied", async ({page}) => {
    await page.goto("https://www.99acres.com/search/property/buy/trivandrum?city=138&keyword=trivandrum&preference=S&area_unit=1&res_com=R");
    await page.locator("//div[contains(@class,'bdf__maxValue undefined  caption_subdued_large')]").click();
    await page.locator("#lf_budget_max_list").locator('li',{hasText:'25 Lacs'}).click();
    await page.locator("//span[text()='Ready to move']").click();
    let filter1 = await page.locator("//span[text()='Upto ₹ 25 Lacs']");
    let filter2 = await page.locator("//div[contains(@class,'leftFilters__chips_wrapper')]/child::div[contains(@datalabel,'AVAILABILITY_CLUSTER_REMOVED')]/child::span[text()='Ready To Move']");
    await expect(filter1).toHaveText('Upto ₹ 25 Lacs');
    await expect(filter2).toHaveText('Ready To Move');
})
   
test("To validate the sort function", async ({page}) => {
    await page.goto("https://www.99acres.com/search/property/buy/trivandrum?city=138&keyword=trivandrum&preference=S&area_unit=1&res_com=R");
    await page.locator("//div[contains(@data-sstheme,'_LAB_CHILDREN')]").click();
    await page.locator("//span[text()='Price Low to High']").click();
    let sorter = await page.locator("//div[contains(@data-sstheme,'_LAB_CHILDREN')]").textContent();
    await expect(sorter).toBe("Price Low to High");
})

//MUltipurpose xpath for filter press -> //span[text()='5 BHK']/preceding-sibling::i