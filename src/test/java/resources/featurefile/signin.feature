Feature: Login Functionality
  As user, I would like to login With valid credentials

  Background: I am on Login page of automation practice
    Given     I on home page
    When      I click on login link
    Then      I am on login page

  Scenario: I should navigate to login page successfully
    When    I am on login page
    Then    I am successfully navigate to login page
    And     I can see the authentication message "AUTHENTICATION"

  Scenario: I should able to login with valid credentials
      When    I enter username "john222@gmail.com"
      And     I enter password "123456"
      And     I click on login button
      Then    I am successfully login with valid credentials
      And     I can see the sign out link


