Feature: Tuition fee dvca eftsl is displayed

Description of feature goes here

//@inProgress

@mytest
Scenario: Edit fields on Tuition Fee Setting Administration page
    Given I am a DVCA User 
    When I am on Tuition Fee Setting Administration for New Proposals page
    Then I should be able to edit all fields except faculty comment field