#-------------------------------------------------------------------------------------
# Authors : Gokul & Seena                        Reviewed By:Adil
# Date : 17/01/2022                              Reviewed On:
# Last Updated By:Gokul
# Last Updated On:31/01/2022
# Feature Name: Completing Scorecard for WELL V2 Project
# Feature Description: Completing Scorecard for WELL Certification Project
#---------------------------------------------------------------------------------------
Feature: F08.01-Completing Scorecard for WELL V2 Project

#Scenario-1
@SmokeTest
Scenario: Filling WELL Scorecard for WELL Certification Project
    Given User navigates to the WELL Scorecard page by logging in to wellcertified
    When User clicks on Start Building button in Dashbaord CTA
#########################Air###################
    And User selects Air concepts
    And User selects all the preconditions as YES for Air
    And User selects maximum optimization points for Air
    And User selects radio button option
    And User upload document for scorecard part for Air
    And User added comment for scorecard part for Air
#########################Water###################
   And User selects Water concepts
    And User selects all the preconditions as YES for Water
    And User selects maximum optimization points for Water
    And User upload document for scorecard part for Water
    And User added comment for scorecard part for Water
#########################Nourishment###################
    And User selects Nourishment concepts
    And User selects all the preconditions as YES for Nourishment
    And User selects maximum optimization points for Nourishment
#########################Light###################
    And User selects Light concepts
    And User selects all the preconditions as YES for Light
    And User selects maximum optimization points for Light
#########################Movement###################
    And User selects Movement concepts
    And User selects all the preconditions as YES for Movement
    And User selects maximum optimization points for Movement
#########################Thermal Comfort###################
    And User selects Thermal Comfort concepts
    And User selects all the preconditions as YES for Thermal Comfort
    And User selects maximum optimization points for Thermal Comfort
#########################Sound###################
    And User selects Sound concepts
    And User selects all the preconditions as YES for Sound
    And User selects maximum optimization points for Sound
#########################Materials###################
    And User selects Materials concepts
    And User selects all the preconditions as YES for Materials
    And User selects maximum optimization points for Materials
#########################Mind###################
    And User selects Mind concepts
    And User selects all the preconditions as YES for Mind
    And User selects maximum optimization points for Mind
#########################Community###################
    And User selects Community concepts
    And User selects all the preconditions as YES for Community
    And User selects maximum optimization points for Community
#########################Innovation###################
    And User selects Innovation concepts
    And User selects maximum optimization points for Innovation
    ###################Targeted points validation#################################
    Then User verifies the targeted points in the WELL scorecard
    And User verifies the warning message in the Scorecard Summary
    And User selects maximum 110 points in the scorecard
    And User verifies the warning message should not present in the Scorecard Summary
    