Feature: 3 year plan readonly when switching to other faculty

  @mytest
  Scenario: Change view according to faculty selected
    Given I am a SLP Faculty User
    And I am on 3 Year Plan page
    When I search for a faculty which is not my own "Faculty of Science"
    Then The 3 year plan page for "Faculty of Science" is displayed
    And 3 Year Plan page is read only
