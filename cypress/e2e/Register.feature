Feature: Register
    Scenario Outline: Register user into resgister page
        Given I visit EBAC Store register page
        When I register with email and password
        Then My account page must be visible