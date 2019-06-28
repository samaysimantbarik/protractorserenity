Feature: Tuition fee actual percentage

Description of feature goes here

@debug
Scenario: I would like the actual percentage calculated by formulae
    Given I am a Tuition Fee Edit User
    And I am on the Tuition Fee Setting page
    When I change the percentage value to "100"
    Then Actual Percentage is calculated is "99.81"

@inProgress
Scenario: I would like the actual percentage calculated by formulae test 2
    Given I am a DVCA User
    And I am on the Tuition Fee Setting page
    When I change the percentage value to "200"
    Then Actual Percentage is calculated is "200.19"

