Feature: Tuition fee new proposal modal

Description of feature goes here

@inProgress
Scenario: I would like to change the order of drop down fields in the modal
    Given I am a Tuition Fee Edit User
    And I am on the Tuition Fee Setting page
    When I click on the "new-proposal" button
    Then the "new-proposals" modal is displayed    