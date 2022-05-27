Feature: Women Category Functionality
  As user, I would like to shopping on women's category

  @sanity @smoke @regression
  Scenario Outline: I should able to added the product on add to cart basket
    When            I click on women link tab
    And             I click on product "<ProductName>"
    And             I change the quantity "<Quantity>"
    And             I select the size "<Size>"
    And             I select colour "<Colour>"
    And             I click on add to card button
    Then            I am successfully added the product on add to cart basket
    And             I can see the addtocart message "Product successfully added to your shopping cart"
    And             I close the popup

    Examples:
      | ProductName                            | Quantity | Size | Colour |
      | Blouse                                 | 2        | M    | White  |
      | Printed Dress                          | 3        | L    | Orange |
      | Printed Chiffon Dress                  | 4        | S    | Green  |
      | Printed Summer Dress with Price $28.98 | 2        | M    | Blue   |