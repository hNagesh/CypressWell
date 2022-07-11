#------------------------------------------------------------------------------------
# Authors : Gokul T                               Reviewed By:Devi and Adil
# Date : 07/05/2022                               Reviewed On:
# Last Updated By:
# Last Updated On:
# Feature Name: WELL Membership
# Feature Description: WELL Membership Subscription for Cornerstone and Keystone
#------------------------------------------------------------------------------------
Feature: F03-WELL Create Membership

  #Scenario-1
  # @RegressionTest
  # Scenario:WELL Membership page validation
  #     Given User logged in to the WELL certified account
  #     When User clicks on User menu
  #     And User clicks on WELL Membership from User menu
  #     Then User redirects to Membership page successfully
  #     And User verifies the Join Us content in Membership page
  #     And User verifies the fields on Membership page
  #     And User verifies the discount percentages in Membership page
  #     And User verifies the keystone amount in Membership page
  #     And User verifies the Cornerstone amount in Membership page

  # #Scenario-2
  # @RegressionTest
  # Scenario:WELL Cornerstone Subscription page validation
  #     Given User logged in to the WELL certified account
  #     When User clicks on User menu
  #     And User clicks on WELL Membership from User menu
  #     When User clicks on Cornerstone Subscription button
  #     Then User redirects to Organization Details page successfully

  #  #Scenario-3
  # @RegressionTest
  # Scenario:WELL Organization Details page validation
  #     Given User navigate to the Organization Details page
  #     And User verifies fields on the Organization Details page
  #     And User clicks on continue button without entering the mandatory fields and verifies error meassage
  #     When User enter Organization name
  #     And User upload Organization logo
  #     And User enter data to Organization Domains
  #     And User enter data to Organization website
  #     And User check number of year
  #     And User clicks on continue button for Organization Details
  #     Then User redirects to Point of Contact page successfully

  #  #Scenario-4
  # @RegressionTest
  # Scenario:WELL Point of Contact page validation
  #     Given User navigate to the Point of Contact page
  #     And User verifies fields on the Point of Contact page
  #     And User clicks on the continue button without entering the mandatory fields and verifies error meassage
  #     And User enter Name, Email and phone number
  #     And User check Agree to share point of contact
  #     And User clicks on continue button
  #     Then User redirects to Owner Details page successfully

  # #Scenario-5
  # @RegressionTest
  # Scenario:WELL Owner Details validation
  #     Given User navigate to the Owner Details page
  #     And User verifies fields on the Owner Details page
  #     And User clicks on the continue button without entering mandatory fields and verifies error meassage
  #     And User enter Owner Name, Owner Email Address, Owner Job Title and Owner Phone Number
  #     And User clicks on the continue button
  #     Then User redirects to Office Address page successfully

  # #Scenario-6
  # @RegressionTest
  # Scenario:WELL Office Address validation
  #     Given User navigate to the Office Address page
  #     And User verifies fields on the Office Address page
  #     And User clicks on continue button without entering the mandatory fields and verify the error meassage
  #     And User select country and state
  #     And User enter Street, City and Postal code
  #     And User clicks on the Office Address continue button
  #     Then User redirects to Terms and Conditions page successfully

  #  #Scenario-7
  # @RegressionTest
  # Scenario:WELL Terms and Conditions validation
  #     Given User navigate to the Terms and Conditions page
  #     And User verifies fields on the Terms and Conditions page
  #     When User clicks on Proceed payment button without entering the mandatory fields and verifies error meassage
  #     And User check on accept Terms and Conditions
  #     And User clicks on Proceed payment button

  # #Scenario-8
  #   @RegressionTest
  #   Scenario:WELL Billing validation
  #       Given User logged in to the WELL certified account
  #       When User clicks on User menu
  #       And User clicks on WELL Membership Dashboard from User menu
  #       And User clicks on Billing tab
  #       And User verifies fields on the Billing page
  #       And User clicks on pay now button
  #       Then User redirects to Invoice page successfully
  #       And User verifies fields on the Invoice page
  #       And User verifies Payment status in Invoice page
  #       And User verifies WELL logo on the Invoice page
  #       And User verifies WELL Address for United States on the Invoice page
  #       And User verifies Owner Email on the Invoice page
  #       And User verifies Address on the Invoice page
  #       And User verifies country on the Invoice page
  #       And User verifies Amount on the Invoice page
  #       And User verifies date on the Invoice page
  #       And User verifies fields on the Payment Options
  #       And User update Invoice fields
  #       And User verifies the updated field
  #       And User verifies Organisation Name on the Invoice page

  # #Scenario-9
  # @RegressionTest
  # Scenario:WELL Promotion validation
  #   Given User logged in to the WELL certified account
  #   When User clicks on User menu
  #   And User clicks on WELL Membership Dashboard from User menu
  #   And User clicks on Promotions tab
  #   Then User redirects to Promotion page successfully
  #   And User verifies fields on the Promotion page
  #   And User verifies Tool kit card name

  # #Scenario-10
  # @RegressionTest
  # Scenario:Verifies Education fields
  #   Given User logged in to the WELL certified account
  #   When User clicks on User menu
  #   And User clicks on WELL Membership Dashboard from User menu
  #   And User clicks on Education tab
  #   Then User will be redirected to Education page
  #   And User verifies Education fields
  #   And User verifies card name
  #   And User verifies card count

  # #Scenario-11
  # @RegressionTest
  # Scenario:WELL Team validation
  #   Given User logged in to the WELL certified account
  #   When User clicks on User menu
  #   And User clicks on WELL Membership Dashboard from User menu
  #   And User clicks on Team tab
  #   And User verifies fields on the Team page
  #   When User click on Add member button and verifies Add member form fields
  #   And User clicks on Invite button without entering the mandatory fields for Add member and verifies error message
  #   And User enters data to Email Address and Project Role fields
  #   And User clicks on invite button
  #   Then User will be redirected to Team page successfully
  #   And User verifies Role
  #   And User verifies Email
  #   And User verifies Status
  #   And User update Project Role
  #   And User verifies the updated Project Role
  #   And User delete Team Member
  #   And User verifies the deleted Team Member

  #   # Scenario-12
  #   @RegressionTest
  #   Scenario:WELL Profile validation
  #       Given User logged in to the WELL certified account
  #       When User clicks on User menu
  #       And User clicks on WELL Membership Dashboard from User menu
  #       And User clicks on Profile from the left menu
  #       Then User redirects to Profile page successfully
  #       And User verifies fields on Profile page
  #       And User enters data to Organization question fields
  #       And User click on update button
  #       And User verifies the updated Organization question data

  # #Scenario-13
  # @RegressionTest
  # Scenario:Verifies Delete WELL Membership
  #    Given User gets the authenticated user Token and store into json file
  #     When User gets the authenticated user Organisation Id and store into json file
  #     And User gets the admin user token and store into json file
  #     Then User delete Membership by user Organisation Id
  #     And User verifies deleted Membership by status code 200 in response


  #Scenario-14
  @SmokeTest
  Scenario:WELL Keystone Subscription page validation
    Given User logged in to the WELL certified account
    When User clicks on User menu
    And User clicks on WELL Membership from User menu
    #########WELL Cornerstone Subscription page ################
    And User clicks on Keystone Subscription button
    ###################Organization Details#########################
    And User enter Organization name
    And User upload Organization logo
    And User enter data to Organization Domains
    And User enter data to Organization website
    And User check number of year
    And User clicks on continue button for Organization Details
    #################################WELL Point of Contact page validation################
    And User enter Name, Email and phone number
    And User check Agree to share point of contact
    And User clicks on continue button
    ################Owner Address###########################
    And User enter Owner Name, Owner Email Address, Owner Job Title and Owner Phone Number
    And User clicks on the continue button
    ############################################WELL Office Address validation###############
    And User select country and state
    And User enter Street, City and Postal code
    And User clicks on the Office Address continue button
    ##############################WELL Terms and Conditions validation###############
    And User check on accept Terms and Conditions
    And User clicks on Proceed payment button
    ######################Payment Review details########################################
    And User clicks on Payment Review button
    ####################Payment validation#########################################
    And User enters the Card Details
    And User clicks on pay now button 
    Then User will be redirected to Receipt page successfully
    And User verifies the Receipt for the payment
    ##########################Validate membership####################################
    And User verifes the membership name
    And User verifes the time duration for Keystone membership



