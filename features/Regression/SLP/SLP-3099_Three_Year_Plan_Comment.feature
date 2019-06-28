Feature: Three Year Plan comments

  @rerun
    Scenario: Comments can be saved in 3 Year Plan page
        Given I am a SLP Faculty User
        And I am on 3 Year Plan page
        And I enter a comment "This is a new comment" in the comment modal
        When I click the Save and Close button
        Then I should be on the 3 Year Plan page
        And I can see the comment "This is a new comment" is present in the modal
