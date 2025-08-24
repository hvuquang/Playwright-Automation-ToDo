# Feature: Adding a New Todo Item
#     As a user, I want to add new todo items to my list
#     So that I can track my tasks effectively

#     Background:
#         Given I have an empty todo input field

#     Scenario: Valid Todo Item
#         Given I have a todo item
#         When I press 'Enter'
#         Then The new Item should be displayed

#     Scenario: Empty Text Input Field When An Item Is Added
#         Given I have a todo item
#         When I press 'Enter'
#         Then The input field should be clear

#     Scenario: New items should be appended to the bottom
#         Given the todo list has at least three existing items
#         When I add a new todo item "Buy milk"
#         Then the item "Buy milk" should appear at the bottom of the list


