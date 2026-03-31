import {test, expect, Page} from "@playwright/test";

export class filterPOM
{
    readonly page:Page;

    constructor(page: Page)
    {
        this.page = page;
    }
    async singleFilter(filterText: any)
    {
        await this.page.locator(`//span[text()='${filterText}']`).click();
        let resultText =  await this.page.locator(`//div[contains(@class,'leftFilters__chips_wrapper')]/descendant::span[text()='${filterText}']`).textContent();
        return resultText?.trim();
    }

    async removeFilter(filterText: any)
    {
        await this.page.locator(`//span[text()='${filterText}']/preceding-sibling::i`).click();
        let result = await this.page.locator(`//span[text()='Applied Filters']`);
        await this.page.locator(`//span[text()='${filterText}']/following-sibling::i`).click();
        return result;
    }

    async multiFilter(filterText1: any,filterText2: any)
    {
        await this.page.locator(`//span[text()='${filterText1}']/preceding-sibling::i`).click();
        await this.page.locator(`//span[text()='${filterText2}']/preceding-sibling::i`).click();
        let result: any[] = [];
        let result1 = await this.page.locator(`//span[text()='${filterText1}']/parent::div[contains(@datalabel,'BEDROOM_CLUSTER_REMOVED')]`).textContent();
        let result2 = await this.page.locator(`//span[text()='${filterText2}']/parent::div[contains(@datalabel,'AVAILABILITY_CLUSTER_REMOVED')]`).textContent();
        result.push(result1);
        result.push(result2);
        return result;
    }

    async multifilterclear(filter1: any, filter2: any)
    {
        await this.page.locator(`//span[text()='${filter1}']`).click();
        await this.page.locator(`//span[text()='${filter2}']`).click();
        let result = await this.page.locator("//span[text()='Applied Filters']");
        await this.page.locator("//span[text()='Clear All']").click();
        return result;
    }

    async dropDownSort(filter : any)
    {
        await this.page.locator("//div[contains(@data-sstheme,'_LAB_CHILDREN')]").click();
        await this.page.locator(`//span[text()='${filter}']`).click();
        let sorter = await this.page.locator("//div[contains(@data-sstheme,'_LAB_CHILDREN')]").textContent();
        return sorter;
    }

}

