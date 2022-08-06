/// <reference types="cypress" />

describe("learn about locators", () => {
  it("visit google home page", () => {
    cy.visit("https://google.com");
  });

  it("can locate a button on the page", () => {
    // cy.get("input");
    // cy.get(".gLFyf");
    // cy.get('input[title="Search"]');
    cy.get('[name="q"]');
  });
});
