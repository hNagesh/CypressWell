#-------------------------------------------------------------------------------------
# Authors : Gokul & Seena                        Reviewed By:Adil
# Date : 17/01/2022                              Reviewed On:
# Last Updated By:Gokul
# Last Updated On:31/01/2022
# Feature Name: Validating Scorecard
# Feature Description: Validating Scorecard for WELL Certification Project
#---------------------------------------------------------------------------------------
Feature: F08-Validating Scorecard for WELL V2 Project

#Scenario-1
@RegressionTest
Scenario: Verifying WELL Scorecard tab in the left panel
    Given User navigates to the Dashboard page by logging in to wellcertified
    And User verifies the Start Building button in Dashbaord CTA
    When User clicks on Start Building button in Dashbaord CTA
    Then User redirects to the WELL Scorecard page
	
#Scenario-2
@RegressionTest
Scenario: Verifying Continue Customizing button in Dashboard CTA
    Given User navigates to the Dashboard page by logging in to wellcertified
    And User verifies the Continue Customizing button in Dashboard CTA
    When User clicks on Continue Customizing button in Dashboard CTA
    Then User redirects to the WELL Scorecard page

#Scenario-3
@RegressionTest
Scenario: Verifying WELL Scorecard page fields
    Given User navigates to the Dashboard page by logging in to wellcertified
    When User clicks on Continue Customizing button in Dashboard CTA
    Then User redirects to the WELL Scorecard page
    And User verifies Scorecard page fields

#Scenario-4
@RegressionTest
Scenario: Verifying Search functionality in ALL Concepts 
    Given User navigates to WELL Scorecard page
    When User enter the scorecard part name in the search field
    Then User verifies the search result

#Scenario-5
	@RegressionTest
Scenario: Verifying Show/Hide Banner in WELLs Scorecard page 
    Given User navigates to WELL Scorecard page
    When User clicks on ShowHide Banner button 
    Then User verifies the Banner in the Scorecard page

#Scenario-6
    @RegressionTest
Scenario: Verifying Expand/Collapse Rows in WELLs Scorecard page 
    Given User navigates to WELL Scorecard page
    When User clicks on ExpandCollapse Rows button
    Then User verifies the expanded rows in Scorecard page

#Scenario-7
@RegressionTest
Scenario: Verifying PRECONDITIONS progress bar by Selecting YES pursue status
    Given User navigates to the Dashboard page by logging in to wellcertified
    When User clicks on Continue Customizing button in Dashboard CTA
    And User selects Air concepts
    Then User verifies the Air concepts page fields
    And User verifies the status count in PRECONDITIONS progress bar by Selecting YES,May Be and No pursue status
    And User verifies the percentage in PRECONDITIONS progress bar by Selecting YES pursue status
    
#Scenario-8
@RegressionTest
Scenario: Verifying OPTIMIZATIONS progress bar by Selecting No/Maybe pursue status
    Given User navigates to WELL Scorecard page
    Then User verifies the Air concepts page fields
    And User verifies the status count in OPTIMIZATIONS progress bar by Selecting YES,May Be and No pursue status
    And User verifies the percentage in OPTIMIZATIONS progress bar by Selecting No or Maybe pursue status

#Scenario-9
@RegressionTest
Scenario: Verifying POINTS progress bar by Selecting points
    Given User navigates to WELL Scorecard page
    Then User verifies the Air concepts page fields
    And User verifies the pursued points in POINTS progress bar by Selecting YES pursue status
    And User verifies the total points in POINTS progress bar by Selecting YES pursue status
    And User verifies the percentage in POINTS progress bar by Selecting YES pursue status
    And User verify warning message when selcting more than 12 points

#Scenario-10
@RegressionTest
Scenario: Verifying Scorecard Summary in the WELL Scorecard
    Given User navigates to WELL Scorecard page 
    When User clicks on Targeted points button
    Then User verifies the Scorecard Summary page fields

#Scenario-11
@RegressionTest
Scenario: Verifying Requirements in Scorecard part
    Given User navigates to WELL Scorecard page
    When User clicks on scorecard part 
    Then User verifies the Requirements fields

#Scenario-12
@RegressionTest
Scenario: Verifying Resources in Scorecard part
    Given User navigates to Resources in Scorecard part
    Then User verifies the Resources fields
    And User verifies the FAQ fields

#Scenario-13
@RegressionTest
Scenario: Verifying Documents Upload field
    Given User navigates to Documents in scorecard part
    When User clicks plus icon for document uploaded
    Then User verifies the Add Documents fields
    And User selects verification method
    And User upload document 
    And User clikcs on Submit button and verifies the uploaded document
    And User delete the uploaded document 
    And User verifies No upload documents Message

#Scenario-14
@RegressionTest
Scenario: Verifying Comments field
    Given User navigates to Comments in scorecard part
    When User clicks plus icon for comments
    Then User verifies the Add comment fields
    And User adds comment 
    And User clikcs on Save button and verifies the added comment
    And User update the comment 
    And User delete the comment
    And User verifies deleted comment

#Scenario-15   
@RegressionTest
Scenario: Verifying Filters in the WELL Scorecard
    Given User navigates to WELL Scorecard page 
    When User clicks the filters button 
    Then User verifies the filter page fields
    And User verifies the pursue status count by selecting the Response checkbox
    And User verifies the verification fields
    And User verifies the Part Type fields
