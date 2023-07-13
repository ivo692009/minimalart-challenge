/// <reference types="cypress" />
require("cypress-xpath");

describe("Llegar hasta febrero", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
  });

  //Como iniciador se abre la pagina del calendario
  before("Abrir la pagina como iniciador", () => {
    cy.visit("https://calendar-challenge-six.vercel.app/");
  });

  it("Llegar hasta febrero", () => {
    //Esta funcion recorre todos los meses hasta llegar a febrero estes donde estes
    cy.ValidarMes();
  });
});