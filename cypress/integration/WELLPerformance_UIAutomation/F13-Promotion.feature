#------------------------------------------------------------------------------------
# Authors : Seena                               Reviewed By:Devi and Adil
# Date : 09/05/2022                             Reviewed On: 
# Last Updated By:
# Last Updated On:
# Feature Name: WELL Performance Rating Promotions
# Feature Description: WELL Performance Rating Promotions
#------------------------------------------------------------------------------------
Feature:F13-Promotions module for WELL Performance Rating

#Scenario-1
    @RegressionTest
    Scenario:Verifies Promotions fields
        Given User navigate to the Promotions page by logging in to wellcertified
        When User clicks on Promotions tab
        Then User will be redirected to Promotion page
        And User verifies Promotion fields
        And User verifies Engagement Materials cards


        