/// <reference types="cypress" />
require("cypress-xpath");

describe("Creacion del dia de la marmota", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
  });

  //Como iniciador se abre la pagina del calendario
  before("Abrir la pagina como iniciador", () => {
    cy.visit("https://calendar-challenge-six.vercel.app/");
  });

  it("Crear Nota Dia de la Marmota", () => {
    //Esta funcion agrega la nota "El Dia de la Marmota" el dia 2 de febrero
    cy.ValidarDiaDeLaMarmota();
  });
});
  