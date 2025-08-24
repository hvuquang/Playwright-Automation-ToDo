import { Given, When, Then } from "@cucumber/cucumber";
import { SignInPage } from "../../pages/SignInPage";
import { expect } from "playwright/test";

let signInPage :SignInPage;

Given("User Account Filled In The Log In Form", {timeout: 20000}, async function () {
    signInPage = new SignInPage(this.page);
    await signInPage.navigateToSignIn();
    await signInPage.fillInAccount();
})

When("I click sign in button", async function () {
    await signInPage.logInBtn.click();
})

Then("I should see the ServiceNow title on the header", {timeout: 10000}, async function () {
    await expect(signInPage.homepage).toBeVisible();
})

