Feature: 3 year plan unsaved warning

  @mytest
  Scenario: Leaving the 3 Year Plan page with unsaved data warning
    Given I am a SLP Faculty User
    And I am on 3 Year Plan page
    And I have modified the projection to any random value
    When I navigate Home
    Then I receive an alert stating I have unsaved data