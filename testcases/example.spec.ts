import { test, expect } from "@playwright/test";

test.describe("example", () => {
  test("has title", async ({ page }) => {
    await page.goto("https://playwright.dev/");

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright/);
  });

  test("get started link", async ({ page }) => {
    await page.goto("https://playwright.dev/");

    // Click the get started link.
    await page.getByRole("link", { name: "Get started" }).click();

    // Expects page to have a heading with the name of Installation.
    await expect(
      page.getByRole("heading", { name: "Installation" })
    ).toBeVisible();
  });

  /* STRUCTURE OF A TESTCASE */
  // Pattern - ARRANGE - ACT - ASSERTION
  // Arrange: set up env for the tests, including fixtures like page, or running beforeEach, beforeAll to set up initial state
  // Act: locate elements, act on them
  // Assert: validate expected outcomes from the actions

  test("get search modal", async ({ page }) => {
    // NAVIGATION
    await page.goto("https://playwright.dev/");

    // ACTION
    await page.getByRole("button", { name: "Search (Ctrl+K)" }).click();

    const modal = page.locator(".DocSearch-Modal");

    // ASSERTION
    await expect(modal).toBeVisible();
  });

test("test", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  await page.getByRole('button', { name: 'Node.js' }).click();

  const menu = page.locator(".dropdown__menu");

  await expect(menu.getByText('Node.jsPythonJava.NET')).toMatchAriaSnapshot(`
- list:
  - listitem:
    - link "Node.js":
      - /url: /
  - listitem:
    - link "Python":
      - /url: /python/
  - listitem:
    - link "Java":
      - /url: /java/
  - listitem:
    - link ".NET":
      - /url: /dotnet/
  `);
});

});
