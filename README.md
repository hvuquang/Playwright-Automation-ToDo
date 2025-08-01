# Playwright-Automation-ToDo

Core concepts:
- Fixtures: For establishing the environment and test isolation 
- Locators: For finding elements with auto-wait and auto-retry
- Assertions: For validating outcomes of automated actions web assertions

### [Fixture](https://playwright.dev/docs/test-fixtures#introduction)
- Based on the concept of text fixtures, which are used to establish the env of each test
- Isolated between tests
```
import { test, expect } from '@playwright/test';

/*{page} argument tell Playwright to set up {page} fixture*/
test('basic test', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  await expect(page).toHaveTitle(/Playwright/);
});
```
### [Locator](https://playwright.dev/docs/locators#introduction)
- Represent a way to find element(s)
  - Locating elements
  - Locate in Shadow Dom
  - Filtering locators

### [Assertion](https://playwright.dev/docs/test-assertions#introduction)
