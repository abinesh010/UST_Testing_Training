This is a playwright automation test for 99acres website filter module.

Here i have done testing for trivandrum properties page, it checks if the filter properties on left side aer accessible and can be used to filter and clear.

For example: To get properties with 3BHK,Ready To Move,New Launch etc...

The tests folder is the important folder and whatever files we wish to run should be in tests folder.

Here i have done normal playwright testing, Playwright testing using Page Object Model,
playwright testing by Data Driven Testing and playwright BDD.

To do normal playwright testing add the filter.spec.ts from toRunAddinTest folder to tests folder and remove remaining everything from there and type in terminal "npx playwright test filter.spec.ts".

To perform testing with page object model, check if pages folder contains the filterpom.ts file and it is imported in filterPage.spec.ts and add it from the toRunAddinTest folder to tests folder and Remove remaining files from from tests folder. to run it type "px playwright test filterpage.spec.ts"

To perform Data Driven testing make sure utils,pages and test-data folders containing excelReader.ts, filterpom.ts and filterdata.xlsx are present and tests should only have filterDataDriven.spec.ts .To run type in terminal "npx playwright test filterDataDriven.spec.ts"

To perform BDD make sure the gherkin filis in features folder in tests,steps folder contains the steps i.e filterbdd.ts. Remove remaining files and folders and run "npm run bdd".
The scripts are already included in package.json ,so first testcases are generated from gherkin file after copying it into steps file and completing the tests run.