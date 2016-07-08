Feature: User can Login
  As an unauthenticated user
  I want to Login
  So I can see a slough of garbage

  Scenario: Login
    Given I am on the homepage for "facebook"
    When I fill out the login form as "jterry"
    Then I click login and see my feed
