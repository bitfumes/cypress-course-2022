/// <reference types="cypress" />

describe("interacting with input field", () => {
  it.skip("visit google home page", () => {
    cy.visit("https://google.com");
  });

  it.skip("click on input field and see search suggestion dropdown", () => {
    cy.get("[name='q']").click();

    const searchDropdown = ".erkvQe > .OBMEnb";
    cy.get(searchDropdown).should("be.visible").contains("Trending searches");

    //   clicking on google logo
    cy.get(".lnXdpd").click();
    cy.get(searchDropdown).should("not.be.visible");
  });

  it.skip("type bitfumes on the search input field and asset suggestion and click on second result", () => {
    cy.get("[name='q']").type("bitfumes");

    const searchDropdownList = ".erkvQe > .OBMEnb > ul";
    cy.get(searchDropdownList)
      .find("li")
      .eq(1)
      .contains("bitfumes github")
      .click();

    cy.contains("https://github.com › bitfumes");
  });

  it("type bitfumes on the search input field and press enter to perform search", () => {
    cy.visit("https://google.com");
    cy.get("input.gLFyf").type("bitfumes {enter}", { delay: 500 });
  });
});
