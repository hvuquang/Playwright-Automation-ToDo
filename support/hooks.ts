// support/hooks.ts

// WHY THIS FILE IS NEEDED EVEN WITH playwright.config.ts?
/*
- playwright.config.ts is only used by Playwright Test Runner.
- Cucumber uses its own runner and ignores that config.
→ So we set up Playwright manually in hooks.ts.
*/

// SO, WHAT IS A TEST RUNNER?
/*
- A program, that understands and executes your tests
- Each tool has its own runner
- Test files + runner together --> form the auto system
- Role:
+ Load test files: spec.ts, test.ts or feature,.. and load them
+ Understand your syntax: test(), describe(), Given(), When(),... and runs them in order
+ Execute test
+ Report result

Examples:
- Playwright: built-in runner: npx playwright test
- Cucumber: npx cucumber-js
-....
*/


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
