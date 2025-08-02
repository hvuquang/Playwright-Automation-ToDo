// support/hooks.ts
import { Before, After } from "@cucumber/cucumber";
import { Browser, BrowserContext, Page, chromium } from "@playwright/test";

let browser: Browser;
let context: BrowserContext;
let page: Page;

Before(async function () {
  browser = await chromium.launch({ headless: false, slowMo: 300 });
  context = await browser.newContext();
  page = await context.newPage();
  this.page = page; // attach page to Cucumber world
});

After(async function () {
  await page.close();
  await context.close();
  await browser.close();
});
