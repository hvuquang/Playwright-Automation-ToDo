import { expect, Locator, Page } from "@playwright/test";
import { TodoItem } from "./TodoItem";

export class TodoPage {
    
    //readonly: Onced assigned, the variable can't be changed
    readonly page: Page;
    readonly todoItem: Locator;
    readonly newTodoInput: Locator;
    readonly todoList: Locator;

    //runs when the class is instantiated
    constructor(page: Page) {
        this.page = page;
        this.todoItem = page.getByTestId('todo-title');
        this.newTodoInput = page.getByPlaceholder('What needs to be done?');
        
        // MUST HAVE LI
        // SINCE WE NEED TO LOCATE THE ITEM IN THE LIST, NOT THE LIST ITSELF
        this.todoList = page.locator('.todo-list li');
    }

    async goto() {
        await this.page.goto('https://demo.playwright.dev/todomvc');
    }

    // METHOD, not a function
    async addTodoItem(item: TodoItem) {
        if (item.content == '') return;

        const newTodo = this.page.getByPlaceholder('What needs to be done?');
        await newTodo.fill(item.content);
        await newTodo.press('Enter');
    }

    // FALSE
    // INSIDE JS, TS CLASS
    // NO FUNCTION KEYWORD ALLOWED
    // ONLY ACCEPTED METHOD, CONSTRUCTOR
    
    /*
    async function deleteItem() {
        console.log(1);
    }
    */
};