  /// <reference types="cypress" />
  require('cypress-xpath');

describe('Open Test page', () => {


  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
  beforeEach('Abrir la pagina como iniciador', () =>{
    cy.visit('https://calendar-challenge-six.vercel.app/')
  })


  it('Llegar hasta febrero', () => {

    cy.ValidarMes()
    
  })

  it('Crear Nota Dia de la Marmota', () => {
    cy.ValidarMes()
    cy.ValidarDiaDeLaMarmota()
    
  })

  it('Borrar Nota Dia de la Marmota', () => {
    cy.ValidarMes()
    cy.ValidarDiaDeLaMarmota()
    cy.BorrarDiaDeLaMarmota()
    
  })
})