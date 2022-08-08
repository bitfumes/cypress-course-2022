/// <reference types="cypress" />

// check this github repo for the nextjs mongo project
// glone this :  https://github.com/hoangvvo/nextjs-mongodb-app

describe("test feeds are available", () => {
  it("visit feed page", () => {
    cy.visit("http://localhost:3000/feed");
  });

  it("count the feed as 2", () => {
    cy.intercept("get", "http://localhost:3000/api/posts?limit=10", {
      fixture: "posts.json",
    });

    cy.get(".PostList_root__Cj_24")
      .find(".Post_root__6WEkA")
      .should("be.visible")
      .and("have.length", 2);
  });
});
