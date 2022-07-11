#------------------------------------------------------------------------------------
# Authors : Seena                               Reviewed By:Devi and Adil
# Date : 09/05/2022                               Reviewed On:
# Last Updated By:
# Last Updated On:
# Feature Name: Delete WELL Faculty
# Feature Description: Delete WELL Faculty as Admin user
#------------------------------------------------------------------------------------
Feature: F09-Delete WELL Faculty


    #Scenario-1
    @RegressionTest
    Scenario:Verifies Delete WELL Membership
        Given User gets the authenticated user Token and store into json file
        When User gets the Faculty Id and store into json file
        And User gets the admin user token and store into json file
        Then User delete WELL Faculty
        And User verifies deleted Faculty by status code 200 in response