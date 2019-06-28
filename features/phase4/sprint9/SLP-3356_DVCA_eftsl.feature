Feature: Tuition fee dvca eftsl is displayed

Description of feature goes here

@inProgress
Scenario: dvca eftsl is displayed
    Given I am a Tuition Fee Edit User
    When I am on the Tuition Fee Setting page
    Then "2018 EFTSL" heading is displayed

