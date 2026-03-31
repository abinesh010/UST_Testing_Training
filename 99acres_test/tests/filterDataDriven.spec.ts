import { test, expect } from "@playwright/test";
import { filterPOM } from "../pages/filterpom.ts";
import { readExcelFile } from "../utils/excelReader";

const testData = readExcelFile("filterdata.xlsx", "filterdatasheet");

let count: number = 0;

for (const row of testData) {

    test(`Data-Driven Test: ${row.TestCase}`, async ({ page }) => {
        const filterPage = new filterPOM(page);
        await page.goto("https://www.99acres.com/search/property/buy/trivandrum?city=138&keyword=trivandrum&preference=S&area_unit=1&res_com=R");

        // Single Filter
        if (row.Filter1 && !row.Filter2 && count<1) {
            const result = await filterPage.singleFilter(row.Filter1);
            await expect(result).toBe(row.Filter1);
            count+=1;
        }

        // Remove Filter
        if (row.Filter1 && !row.Filter2 && row.TestCase.includes("Remove")) {
            const result = await filterPage.removeFilter(row.Filter1);
            await expect(result).not.toBeVisible();
        }

        // multi remove
        if (row.Filter1 && row.Filter2 && row.TestCase.includes("Remove")){
            const clearResult = await filterPage.multifilterclear(row.Filter1, row.Filter2);
            await expect(clearResult).not.toBeVisible();
            
        }

        // Multi Filter
        if (row.Filter1 && row.Filter2 && count<=1) {
            const results = await filterPage.multiFilter(row.Filter1, row.Filter2);
            await expect(results[0]).toBe(row.Filter1);
            await expect(results[1]).toBe(row.Filter2);
            count+=1;

        }

        // Sort Option
        if (row.SortOption) {
            const sorter = await filterPage.dropDownSort(row.SortOption);
            await expect(sorter).toBe(row.SortOption);
        }
    });

}