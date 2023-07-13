//Esta una referencia para las ayudas para los comandos con cypress
/// <reference types="cypress" />
//Agregamos esta referencia para utilizar el Xpath como funcion
require("cypress-xpath");

//Importamos el objeto donde tenemos nuestro recorrido y validaciones
import CalendarioObject from "../../support/PageObjects/Calendario/Calendario_PO";

describe("Calendario PageObject", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });
  //Creamos la instacia objeto
  const master = new CalendarioObject();

  beforeEach("Abrir la pagina como iniciador", () => {
    cy.visit("https://calendar-challenge-six.vercel.app/");
  });

  it("Llegar hasta febrero", () => {
    //Esta funcion recorre todos los meses hasta llegar a febrero estes donde estes
    master.ValidarMes();
  });

  it("Crear Nota Dia de la Marmota", () => {
    //Esta funcion agrega la nota "El Dia de la Marmota" el dia 2 de febrero
    master.ValidarDiaDeLaMarmota();
  });
  it("Borrar Nota Dia de la Marmota", () => {
    //Esta funcion borra la nota previamente creada en el dia de 2 de febrero
    master.BorrarDiaDeLaMarmota();
  });
});
