// Para que este resuelto correctamente es *necesario* que:
// - Se cree un test case que abra la pagina
// - La pagina abre siempre en el mes actual, tiene que haber un test case que recorra los meses hasta llegar a Febrero ( no importa en que mes empiece )
// - Se tiene que crear un test case que analice si en el 2 de Febrero ya existe el dia de la marmota, si no existe crearlo
// - Se tiene que crear un test case que borre el registro del dia de la marmota

//Se agregan estas referencias que son para ayudas para realizar las lineas de codigos y agregar la funcion de Xpath
/// <reference types="cypress" />
require("cypress-xpath");

describe("Conjunto de Test de Calendario", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
  });

  //Como iniciador se abre la pagina del calendario
  before("Abrir la pagina como iniciador", () => {
    cy.visit("https://calendar-challenge-six.vercel.app/");
  });

  // @commandexpres
  it("[@commandexpres]Llegar hasta febrero", () => {
    //Esta funcion recorre todos los meses hasta llegar a febrero estes donde estes
    cy.ValidarMes();
  });
  // @commandexpres
  it("[@commandexpres]Crear Nota Dia de la Marmota", () => {
    //Esta funcion agrega la nota "El Dia de la Marmota" el dia 2 de febrero
    cy.ValidarDiaDeLaMarmota();
  });
  // @borrardia
  it("[@borrardia] Borrar Nota Dia de la Marmota", () => {
    //Esta funcion borra la nota previamente creada en el dia de 2 de febrero
    cy.BorrarDiaDeLaMarmota();
  });
});
