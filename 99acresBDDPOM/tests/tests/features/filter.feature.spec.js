// Generated from: tests\features\filter.feature
import { test } from "playwright-bdd";

test.describe('Filter feature of 99acres', () => {

  test('To validate a filter option can be applied', async ({ Given, When, Then, page }) => { 
    await Given('the user is inside the 99acres trivandrum page', null, { page }); 
    await When('the user clicks a filter icon', null, { page }); 
    await Then('the filter is applied and displayed on Applied filters section', null, { page }); 
  });

  test('To validate a filter option can be cleared', async ({ Given, When, Then, page }) => { 
    await Given('the user is inside the 99acres trivandrum page', null, { page }); 
    await When('the user clicks a filter icon', null, { page }); 
    await Then('the filter is applied and displayed on Applied filters section', null, { page }); 
    await When('the user clicks the icon on Appliedfilter section', null, { page }); 
    await Then('the filter is removed and it is not displayed on Applied filter section', null, { page }); 
  });

  test('To validate multiple filter option can be applied', async ({ Given, When, Then, page }) => { 
    await Given('the user is inside the 99acres trivandrum page', null, { page }); 
    await When('the user clicks multiple filter icon', null, { page }); 
    await Then('the filters is applied and displayed on Applied filters section', null, { page }); 
  });

  test('To validate multiple filter option can be cleared in once', async ({ Given, When, Then, page }) => { 
    await Given('the user is inside the 99acres trivandrum page', null, { page }); 
    await When('the user clicks multiple filter icon', null, { page }); 
    await Then('the filters is applied and displayed on Applied filters section', null, { page }); 
    await When('the user clicks the clearAll icon on Appliedfilter section', null, { page }); 
    await Then('the filter is removed and it is not displayed on Applied filter section', null, { page }); 
  });

  test('To validate the application of dropdown filter', async ({ Given, When, Then, page }) => { 
    await Given('the user is inside the 99acres trivandrum page', null, { page }); 
    await When('the user clicks the dropdown box and selects an option', null, { page }); 
    await Then('the filter is applied and it is displayed on the dropdown button', null, { page }); 
  });

});

// == technical section ==

test.beforeEach('BeforeEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('before', { page }));

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\filter.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":5,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given the user is inside the 99acres trivandrum page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When the user clicks a filter icon","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then the filter is applied and displayed on Applied filters section","stepMatchArguments":[]}]},
  {"pwTestLine":12,"pickleLine":11,"tags":[],"steps":[{"pwStepLine":13,"gherkinStepLine":12,"keywordType":"Context","textWithKeyword":"Given the user is inside the 99acres trivandrum page","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When the user clicks a filter icon","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then the filter is applied and displayed on Applied filters section","stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"When the user clicks the icon on Appliedfilter section","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"Then the filter is removed and it is not displayed on Applied filter section","stepMatchArguments":[]}]},
  {"pwTestLine":20,"pickleLine":19,"tags":[],"steps":[{"pwStepLine":21,"gherkinStepLine":20,"keywordType":"Context","textWithKeyword":"Given the user is inside the 99acres trivandrum page","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":21,"keywordType":"Action","textWithKeyword":"When the user clicks multiple filter icon","stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":22,"keywordType":"Outcome","textWithKeyword":"Then the filters is applied and displayed on Applied filters section","stepMatchArguments":[]}]},
  {"pwTestLine":26,"pickleLine":25,"tags":[],"steps":[{"pwStepLine":27,"gherkinStepLine":26,"keywordType":"Context","textWithKeyword":"Given the user is inside the 99acres trivandrum page","stepMatchArguments":[]},{"pwStepLine":28,"gherkinStepLine":27,"keywordType":"Action","textWithKeyword":"When the user clicks multiple filter icon","stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":28,"keywordType":"Outcome","textWithKeyword":"Then the filters is applied and displayed on Applied filters section","stepMatchArguments":[]},{"pwStepLine":30,"gherkinStepLine":29,"keywordType":"Action","textWithKeyword":"When the user clicks the clearAll icon on Appliedfilter section","stepMatchArguments":[]},{"pwStepLine":31,"gherkinStepLine":30,"keywordType":"Outcome","textWithKeyword":"Then the filter is removed and it is not displayed on Applied filter section","stepMatchArguments":[]}]},
  {"pwTestLine":34,"pickleLine":33,"tags":[],"steps":[{"pwStepLine":35,"gherkinStepLine":34,"keywordType":"Context","textWithKeyword":"Given the user is inside the 99acres trivandrum page","stepMatchArguments":[]},{"pwStepLine":36,"gherkinStepLine":35,"keywordType":"Action","textWithKeyword":"When the user clicks the dropdown box and selects an option","stepMatchArguments":[]},{"pwStepLine":37,"gherkinStepLine":36,"keywordType":"Outcome","textWithKeyword":"Then the filter is applied and it is displayed on the dropdown button","stepMatchArguments":[]}]},
]; // bdd-data-end