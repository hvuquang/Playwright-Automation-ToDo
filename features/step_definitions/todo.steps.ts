import { Given, When, Then } from "@cucumber/cucumber";
import { TodoItem } from "../../pages/TodoItem";
import { TodoPage } from "../../pages/TodoPage";
import { expect } from "playwright/test";

let todoPage: TodoPage;

let TODO_ITEMS: TodoItem[] = [
  {
    content: "buy some cheese",
  },
  {
    content: "feed the cat",
  },
  {
    content: "book a doctors appointment",
  },
];

Given("I have a todo item", async function () {
  todoPage = new TodoPage(this.page);
  await todoPage.goto();
});

When("I press 'Enter'", async function () {
  await todoPage.addTodoItem(TODO_ITEMS[0]);
});

Then("The new Item should be displayed", async function () {
  await expect(todoPage.todoItem).toHaveText(TODO_ITEMS[0].content);
});

Then("The input field should be clear", async function () {
  await expect(todoPage.newTodoInput).toBeEmpty();
});

Given("the todo list has at least three existing items", async function () {
  todoPage = new TodoPage(this.page);
  await todoPage.goto();
  for (let item of TODO_ITEMS) {
    await todoPage.addTodoItem(item);
  }
});

When('I add a new todo item "Buy milk"', async function () {
  let newItem: TodoItem = {
    content: "Buy milk",
  };
  await todoPage.addTodoItem(newItem);
});

Then(`the item "Buy milk" should appear at the bottom of the list`, async function () {
  const lastItem = await todoPage.todoList.last();
  await expect(lastItem).toHaveText("Buy milk");
});
