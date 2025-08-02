import { expect } from "@playwright/test";
import { HomePage } from "../../pages/HomePage";
import { Given, When, Then } from '@cucumber/cucumber';

let homePage: HomePage;

Given('Playwright URL', async function () {
    homePage = new HomePage(this.page);
});

When('I types URL into search engine', async function () {
    await homePage.navigateToHomePage();
});

Then('I should see the website with the title Playwright', async function () {
    await expect(this.page).toHaveTitle(/Playwright/);
});