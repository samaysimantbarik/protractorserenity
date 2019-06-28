Feature: Tuition fee actual percentage

Description of feature goes here

@skip
Scenario: I would like the actual percentage calculated by formulae
    Given I am a Tuition Fee Edit User
    And I am on the Tuition Fee Setting page
    When I change the percentage value to "100"
    Then Actual Percentage is calculated is "99.81"


