Feature: Tuition fee dvca eftsl is displayed

Description of feature goes here

@mytest
Scenario: New proposal "action" button
    Given I am a DVCA User
    And I am on the Tuition Fee Administration Proposal page
    When I click on new proposal action button
    Then Tuition Fee Setting Administration for New Proposals page is loaded
    And "Reject Proposal" action button exists 
    And "Approve Proposal" action button exists

@skip
Scenario: Delete proposal "action" button
    Given I am a DVCA User
    And I am on the Tuition Fee Administration Proposal page
    When I click on delete proposal action button
    Then Tuition Fee Setting Administration for Delete Proposals page is loaded
    And "Reject Proposed Deletion" delete action button exists 
    And "Approve Proposed Deletion" delete action button exists

    @mytest2
Scenario: Cancel new proposal action 
    Given I am a DVCA User 
    And I am on Tuition Fee Setting Administration for New Proposals page
    When I click on the "Cancel" button
    Then the Tuition Fee Setting Admin page is displayed
 
Scenario: Cancel proposed deletion action 
    Given I am a DVCA User 
    And I am on Tuition Fee Setting Administration for Proposed Deletions page
    When I click on the "Cancel" button
    Then the Tuition Fee Setting Admin page is displayed