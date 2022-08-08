/// <reference types="cypress" />

// check this github repo for the nextjs mongo project
// glone this :  https://github.com/hoangvvo/nextjs-mongodb-app

describe("test feeds are available", () => {
  let baseURL;

  before(() => {
    baseURL = Cypress.env("baseURL");
  });

  beforeEach(() => {
    cy.intercept("get", `${baseURL}/api/posts?limit=10`, {
      fixture: "posts.json",
    });
  });

  it("visit feed page", () => {
    cy.visit(`${baseURL}/feed`);
  });

  it("count the feed as 2", () => {
    cy.posts().should("have.length", 2);
  });

  it("sign in the user", () => {
    cy.login();
  });

  it("create new feed post", () => {
    cy.posts().should("have.length", 2);

    cy.intercept("POST", "http://localhost:3000/api/posts", {
      body: { content: "I am from cypress again" },
    });

    // create new post
    cy.createPost("I am from cypress");
  });
});
