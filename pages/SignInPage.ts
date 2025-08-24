import { Locator, Page } from "@playwright/test";

export class SignInPage {
  private readonly page: Page;
  readonly logInBtn: Locator;
  readonly homepage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.logInBtn = page.locator("#sysverb_login");
    this.homepage = page.locator("#header-logo-link");
  }

  async navigateToSignIn() {
    await this.page.goto(process.env.URL as string);
  }

  async fillInAccount() {
    const userNameField = await this.page.locator("#user_name");
    await userNameField.fill(process.env.USER_NAME as string);
    const passWordField = await this.page.locator("#user_password");
    await passWordField.fill(process.env.PASSWORD as string);
  }
}
