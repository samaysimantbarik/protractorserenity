Feature: Tuition fee settings relabel the new 'delete' button to read 'remove proposal' 

Description of feature goes here

@inProgress
Scenario: Relabel the new 'delete' button to read 'remove proposal' 
    Given I am a DVCA User
    When I am on the Tuition Fee Setting page
    Then "Remove Proposal" button exists