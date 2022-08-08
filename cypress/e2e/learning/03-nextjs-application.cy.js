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

  it("sign in the user", () => {
    cy.visit("http://localhost:3000/login");
    cy.get("input[type='email'").type("abc@gmail.com");
    cy.get("input[type='password'").type("password");
    cy.get("form").submit();
  });

  it("create new feed post", () => {
    // assert that only 2 post are there
    cy.intercept("get", "http://localhost:3000/api/posts?limit=10", {
      fixture: "posts.json",
    });

    cy.get(".PostList_root__Cj_24")
      .find(".Post_root__6WEkA")
      .should("be.visible")
      .and("have.length", 2);

    cy.intercept("POST", "http://localhost:3000/api/posts", {
      body: { content: "I am from cypress again" },
    });

    // create new post
    cy.get(".Input_input__fo8G3")
      .type("I am from cypress")
      .then(() => {
        cy.get("form").submit();
        cy.contains("You have posted successfully");
      });
  });
});
