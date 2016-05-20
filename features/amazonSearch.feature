Feature: User can Search
  As an unauthenticated user
  I want to search for something
  So I can find purchase options

  Scenario: Searched for qa testing
    Given I am on the homepage for "Amazon"
    When I search for "qa testing"
    Then I am shown a positive number of results
