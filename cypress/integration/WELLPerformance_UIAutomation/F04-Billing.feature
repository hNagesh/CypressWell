#------------------------------------------------------------------------------------
# Authors : Gokul T                               Reviewed By:Devi and Adil
# Date : 09/05/2022                               Reviewed On: 
# Last Updated By:
# Last Updated On:
# Feature Name: WELL Performance Rating Billing
# Feature Description: Validating the Billing for WELL Performance Rating
#------------------------------------------------------------------------------------
Feature: F04-Validating the Billing for WELL Performance Rating

    #Scenario-1
    @RegressionTest
    Scenario:Billing page validation
        Given User navigate to the Dashboard page by logging in to wellcertified
        When User clicks on Billing tab
        Then User will be redirected to the WELL Performance Rating Billing page successfully

    #Scenario-2
    @RegressionTest
    Scenario:Receipt page validation
        Given User is on billing page by logging in to wellcertified
        When User clicks on paid button
        Then User will be redirected to WELL Performance Rating Receipt page successfully
        And User verifies fields on WELL Performance Rating Receipt page
        And User verifies the Payment Status in Receipt page
        And User verifies the Payment date in Receipt page
        And User verifies Download receipt
         And User verifies the Paid amount