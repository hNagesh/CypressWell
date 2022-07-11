#-------------------------------------------------------------------------------------
# Authors : Seena                                       Reviewed By: Devi and Adil
# Date : 08/02/2022                                      Reviewed On: 09/02/2022
# Last Updated By:
# Last Updated On:
# Feature Name:  Cancel Exam in WELL AP
# Feature Description: Cancel Exam
#---------------------------------------------------------------------------------------
Feature: F03-Cancel Exam in WELL AP

    #Scenario-1
    @RegressionTest
    Scenario:Cancel Exam
        Given User logged in to the WELL certified account
        When User clicks on Exams from top menu under Admin
        And User redirects to Admin Exams list page successfully
        And User verifies the fields on the Exams list page
        And User clicks on Edit button
        Then User will be redirected to the Exam Details page successfully
        And User verifies the fields on the Exam Details page
        And User clicks on Cancel Exam button
        And User redirects to Admin Exams list page 
        And USer verifies the Exam cancelled Status


