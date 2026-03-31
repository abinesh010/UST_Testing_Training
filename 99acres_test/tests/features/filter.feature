
Feature: Filter feature of 99acres


Scenario: To validate a filter option can be applied
Given the user is inside the 99acres trivandrum page
When the user clicks a filter icon
Then the filter is applied and displayed on Applied filters section  


Scenario: To validate a filter option can be cleared
Given the user is inside the 99acres trivandrum page
When the user clicks a filter icon
Then the filter is applied and displayed on Applied filters section 
When the user clicks the icon on Appliedfilter section
Then the filter is removed and it is not displayed on Applied filter section


Scenario: To validate multiple filter option can be applied
Given the user is inside the 99acres trivandrum page
When the user clicks multiple filter icon
Then the filters is applied and displayed on Applied filters section 


Scenario: To validate multiple filter option can be cleared in once
Given the user is inside the 99acres trivandrum page
When the user clicks multiple filter icon
Then the filters is applied and displayed on Applied filters section 
When the user clicks the clearAll icon on Appliedfilter section
Then the filter is removed and it is not displayed on Applied filter section


Scenario: To validate the application of dropdown filter
Given the user is inside the 99acres trivandrum page
When the user clicks the dropdown box and selects an option
Then the filter is applied and it is displayed on the dropdown button  