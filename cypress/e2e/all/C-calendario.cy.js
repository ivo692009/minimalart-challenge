/// <reference types="cypress" />
require("cypress-xpath");

describe("Borrar dia de la marmota", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
  });

  //Como iniciador se abre la pagina del calendario
  before("Abrir la pagina como iniciador", () => {
    cy.visit("https://calendar-challenge-six.vercel.app/");
  });

  it("Borrar Nota Dia de la Marmota", () => {
    //Esta funcion borra la nota previamente creada en el dia de 2 de febrero
    cy.BorrarDiaDeLaMarmota();
  });
});