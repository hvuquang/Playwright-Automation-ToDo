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

### First Automation Test
- Using the examples from Playwright including Navigate to Playwright Homepage, To-Do Apps.

#### Apply BDD + POM
1. Define <code>.feature</code>
2. Create <code>step_definitions</code> directory storing <code>.steps.ts</code> step definition file (Using <code>Gherkin</code>)
3. Create <code>Page Object</code> class for reusable
4. Configure <code>hooks.ts</code> for setting up Playwright

### Cucumber Core Concepts
1. Feature
  - A group of related test cases
  - What functionality you're validating
  - Usually a user story in Agile
2. Scenario
  - A concrete example or test case within a Feature
  - Include test steps defining <code>Given</code>, <code>When</code>, <code>Then</code> Arrange - Act - Assert concept
  - Can have multiple Scenarios to cover difference cases: valid, invalid input, etc

### Cucumber, Playwright Mapping Concepts
1. Feature === test.describe()
2. Scenario === test()
3. Step === inside test() logic

### Note-taking from issues
#### tsconfig.ts require
- Cucumber doesn't run <code>.ts</code> files natively --> <code>ts-node</code> interpret step files and support code
- With <code>tsconfig.json</code>, we can:
  - TS version
  - how modules are structured (CommonJS vs ESModules) --> .ts at the end or none
  - which files to include
#### ts-node
- System runs <code>.ts</code> without compilling them first