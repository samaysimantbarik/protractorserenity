Feature: Tuition fee dvca eftsl is displayed

Description of feature goes here

@mytest
Scenario: view proposal "history" 
    Given I am a DVCA User
    And I am on the Tuition Fee Administration Proposal page
    When I click on history link
    Then new proposals history heading is visible