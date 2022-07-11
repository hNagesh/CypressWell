#-------------------------------------------------------------------------------------
# Authors : Gokul & Seena                        Reviewed By:Adil
# Date : 17/01/2022                              Reviewed On:
# Last Updated By:Gokul
# Last Updated On:31/01/2022
# Feature Name: validating Promotions for WELL V2 Project
# Feature Description: validating Promotions for WELL V2 Project
#---------------------------------------------------------------------------------------
Feature: F16-Validating Promotions for WELL V2 Project

    # Scenario-1
    @RegressionTest
    Scenario:Verifies Promotions fields
        Given User navigate to the editpage by logging in to wellcertified
        When User clicks on Promotions tab
        Then User will be redirected to Promotions page
        And User verifies Promotions fields
        And User verifies Marketing and PR guidelines for WELL projects
        And User verifies Welcome to WELL Toolkit
            