import { Page } from "@playwright/test";

export class HomePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigateToHomePage() {
        await this.page.goto("https://playwright.dev/");
    }

}