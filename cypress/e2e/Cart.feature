Feature: Cart

    Background:
        Given I add product to a cart and visit cart page

        Scenario: Cart Page
            When Cart page is displayed
            Then The added product must be displayed
       
        Scenario: Edit Product
            When I edit a product in the cart
            Then The cart must be updated

        Scenario: Delete Product
            When I delete the product from the cart
            Then The cart must be empty