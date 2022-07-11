#------------------------------------------------------------------------------------
# Authors : Gokul T                               Reviewed By:Devi and Adil
# Date : 07/05/2022                             Reviewed On: 
# Last Updated By:
# Last Updated On:
# Feature Name: Delete WELL Membership
# Feature Description: Delete WELL Membership by Organisation Id
#------------------------------------------------------------------------------------
Feature: F13-Delete WELL Membership
    
       #Scenario-1
    @RegressionTest
    Scenario:Verifies Delete WELL Membership
       Given User gets the authenticated user Token and store into json file
        When User gets the authenticated user Organisation Id and store into json file
        And User gets the admin user token and store into json file
        Then User delete Membership by user Organisation Id 
        And User verifies deleted Membership by status code 200 in response