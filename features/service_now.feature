Feature: Log in ServiceNow Account
    
    Scenario: Log in User Account
    Given User Account Filled In The Log In Form
    When I click sign in button
    Then I should see the ServiceNow title on the header

Feature: Impersonate

    Impersonate User
    Scenario: Impersonate Another User
    Given User Account Filled In The Log In Form
    When I choose user to Impersonate
    Then I should see the Impersonate User Name on the avater