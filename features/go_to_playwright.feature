Feature: Go to Playwright
    Check if users has gone to Playwright website successully

    Scenario: Go to Playwright
    Given Playwright URL
    When I types URL into search engine
    Then I should see the website with the title Playwright