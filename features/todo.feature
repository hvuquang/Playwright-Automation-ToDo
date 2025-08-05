Feature: New Todo
    Check if new item is added to the list

    Scenario: Valid Todo Item
        Given I have a todo item
        When I press 'Enter'
        Then The new Item should be displayed

    Scenario: Empty Text Input Field When An Item Is Added
        Given I have a todo item
        When I press 'Enter'
        Then The input field should be clear

    Scenario: New items should be appended to the bottom
        Given the todo list has at least three existing items
        When I add a new todo item "Buy milk"
        Then the item "Buy milk" should appear at the bottom of the list


