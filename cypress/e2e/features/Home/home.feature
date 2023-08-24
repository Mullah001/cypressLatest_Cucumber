Feature: Chick-fil-A Canada | Home

    Chicken, Waffle Potato Fries, & More | Chick-fil-A Canada

    Background: User visit the Home page
        Given I visit the home page of website

        Scenario: I verify the title of the home page
        When I verify the title of the home page

        Scenario: Validate the title and url of the Menu Nav item
        When I click on 'nav_Menu' Nav item
        Then I verify the title of the 'nav_Menu' page
        And I verify the url of 'nav_Menu' page