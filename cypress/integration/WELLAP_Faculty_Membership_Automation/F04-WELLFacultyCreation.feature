#------------------------------------------------------------------------------------
# Authors : Seena K                               Reviewed By:Devi and Adil
# Date : 22/06/2022                               Reviewed On:
# Last Updated By:
# Last Updated On:
# Feature Name: WELL Faculty
# Feature Description: WELL Faculty
#------------------------------------------------------------------------------------
Feature: WELL Faculty Creation

    #Scenario-1
    @RegressionTest
    Scenario:Validating WELL Faculty page
        Given User logged in to the WELL certified account
        When User clicks on WELL Faculty from top menu under Training
        And User navigate to the WELL Faculty page successfully
        And User verifies the fields on the WELL Faculty page
        And User clicks on continue button
        Then User will be redirected to the WELL Faculty Application page successfully

    #Scenario-2
    @RegressionTest
    Scenario:Validating WELL Faculty Application page
        ###Personal Details
        Given User is on WELL Faculty Application page
        And User verifies Personal Details fields on the WELL Faculty Application page
        When User enters data to First name, Last name and Email fields
        ###Address
        And User verifies Address fields on the WELL Faculty Application page
        And User clicks on continue button without entering the mandatory fields and verifies error meassage
        And User enters data to Country, State, Street address, City and Postal Code fields
        ###Job Details
        And User verifies Job Details fields on the WELL Faculty Application page
        And User enters data to Employer, Position and Languages
        And User upload cv or resume
        And User selects yes or no for Are you a current USGBC Faculty Member
        And User selects Credentials & Certificates
        And User selects yes or no for Migrated from USGBC
        And User selects yes or no for Are you an Advisor
        And User selects yes or no for Part of a Member organization
        And User selects yes or no for Are you LEED Faculty
        And User clicks on the continue button
        Then User will be redirected to the Presentation and Facilitation Skills page successfully

    #Scenario-3
    @RegressionTest
    Scenario:Validating Presentation and Facilitation Skills
        Given User is on Presentation and Facilitation Skills page
        And User verifies fields on the Presentation and Facilitation Skills page
        When User clicks on Save and Review Application button without entering the mandatory fields and verifies error meassage
        And User enters data to Describe your qualifications and experience
        And User upload file for list of your appearances
        And User upload at least 2 documents for Letters of recommendation
        And User upload file for demonstrate your presentation
        And User enters data to tell us about your experience
        And User enters data to indicate your willingness to travel for WELL events
        And User checks the terms and conditions checkbox
        And User clicks on the Save and Review Application button
        Then User verifies the application draft saved page
        And User clicks on Submit Application button
        Then User will be redirected to the Presentation and Facilitation Skills page successfully

    # Scenario-4
    @RegressionTest
    Scenario:Validating Review Results
        Given User logged in to WELL certified account
        When User clicks on the WELL Faculty from top menu under Admin
        Then User will be redirected to the Admin Faculty Faculty list page successfully        
        And User verifies fields on the Admin Faculty Faculty list page
        And User verifies Application Status as pending and clicks on View under actions
        And User verifies Review Application popup
        And User clicks on Review Application button
        And User will be redirected to the Personal Details page
        And User verifies fields on the Personal Details page
        And User clicks on Personal Details continue button
        And User will be redirected to Presentation and Facilitation Skills page
        And User verifies fields on Presentation and Facilitation Skills page
        And User checks the terms and conditions checkbox and clicks on continue button
        And User will be redirected to the Review Application page successfully
        And User verifies fields on the Review Application page
        And User selects the Application Status
        And User selects the Application Approved Date
        And User enters data to Approved By field
        And User selects the Faculty Expiration date
        And User enters data to Reason Denial, Region and Source fields
        And User selects Yes, quality option for Teaching Experience
        And User enters data to Teaching Experience Notes, WELL Events Taught, Willingness to Train fields
        And User selects Yes or No for Technical, Business Development, Red Flag fields
        And User checks the Workshops checkbox
        And User upload Scorecard Documents
        And User enters data to Next Step
        And User selects Next Step Date
        And User enters data to Admin Notes, Admin Notes 2, Admin Notes 3 fields        
        And User clicks on Update And Review Application button
        And User verifies Congratulations popup
        And User clicks on Return button 
        And User verifies Application Status as Approved

    #Scenario-5
    @RegressionTest
    Scenario:Validate Invoice Page
        Given User logged in to the WELL certified account
        When User clicks on WELL Faculty from top menu under Training
        Then User navigate to the WELL Faculty page successfully
        And User clicks on Pay Invoice
        And User redirects to Invoice page 
        And User verifies fields on the Invoice page
        And User verifies Payment status in Invoice page
        And User verifies WELL logo on the Invoice page
        And User verifies WELL Address for United States on the Invoice page
        And User verifies Owner Email on the Invoice page
        And User verifies Address on the Invoice page
        And User verifies country on the Invoice page
        And User verifies Amount on the Invoice page
        And User verifies fields on the Payment Options
        And User enters the Card Details
        And User clicks on pay now button
        And User navigate to the Dashboard page successfully
        
    

    
























