Feature: SignUp, Sign In and Purchase Product
  As user , I would like to purchase product with my valid account

  Scenario: I should able to create account with valid information
    When    I click on login link
    And     I enter email address for create account "john@gmail.com"
    And     I click on create account button
    And     I enter the first name "johnen"
    And     I enter the last name "sena"
    And     I enter the password "1234567"
    And     I enter the address "johnen road"
    And     I enter the city "london"
    And     I select the state "Hawaii"
    And     I enter the zipcode "12345"
    And     I select the country "United States"
    And     I enter the phone number "1234567890"
    And     I enter the alias address "My address"
    And     I click on registration button
    Then    I am successfully registration with valid information
    And     I can see the my account message "My Account"

  Scenario: TC-002 Sign In with newly created user credentials
    Given   I am on the Sign In Page
    When    Login using newly create credentials
    Then    I shall verify the address information in my address section

  Scenario: TC-003 Add product to Online Cart and checkout
    Given   I am on the Sign In Page
    When    Login using newly create credentials
    And     I add below product to cart
      | Dresses  | CASUAL DRESSES | Printed Dress               | demo_3 | 2 |
      | Women    | TOPS           | Faded Short Sleeve T-shirts | demo_1 | 3 |
    Then   I shall validate shopping cart as below
      | Printed Dress               | SKU : demo_3 | 2 |
      | Faded Short Sleeve T-shirts | SKU : demo_1 | 3 |
    Then   I shall be able to Buy the product
    And    I shall be able to Buy using cheque payment