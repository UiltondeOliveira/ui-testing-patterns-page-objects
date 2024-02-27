Feature: Checkout
    Scenario: Successful Checkout
        Given I visit EBAC Store products page
        When I add the product to the cart and i fill the step Checkout
        Then The purchase confirmation screen should be displayed