// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })



Cypress.Commands.add('ValidarMes', () => { 
    let mes
    cy.get('#\__next > div > main > .Grid_header__yAoy_ > div:nth-child(2)').invoke('text').then((text) => {
      if(text!= "february"){
        cy.xpath('//*[@id="__next"]/div/main/div[1]/div[1]').click()
        cy.wait(200);
        cy.ValidarMes();
      }
      });
    
})

Cypress.Commands.add('ValidarDiaDeLaMarmota', () => { 

    cy.get('p')
    .contains('Dia de la Marmota')
    .should('not.exist').then(()=>{
        cy.get('div > main > div > .Grid_spaceHolder__IVVTT > .Grid_spaceInMonth__JTF6k:nth-child(5)').click()
        cy.get('.Grid_modalBody__zvK4C > .Grid_reminderBox__yQ64v > .Grid_reminderContent__pLoKD > .Grid_reminderInput__pQ5qK > textarea').click().type("Dia de la Marmota")
        cy.get('.Grid_modal__dk4Wd > .Grid_modalContent__slmaD > .Grid_modalHeader__n8UvY > .Grid_icon__bYeIv > .Grid_customIcon__JyTa0').click()
    })
    
    
})

Cypress.Commands.add('BorrarDiaDeLaMarmota', () => { 
    cy.get('p')
    .contains('Dia de la Marmota')
    .should('exist').then(()=>{
    
        cy.get('.Grid_spaceHolder__IVVTT > .Grid_spaceInMonth__JTF6k > .Grid_reminders__1zv9q > .Grid_reminder__OelsH > .Grid_reminderDesc__gFOG_').click()
        cy.get('.Grid_modalBody__zvK4C > .Grid_reminderBox__yQ64v:nth-child(1) > .Grid_reminderContent__pLoKD > .Grid_reminderIcons__4mm3s > .Grid_icon-cancel__HmIzw').click()
        cy.get('.Grid_modal__dk4Wd > .Grid_modalContent__slmaD > .Grid_modalHeader__n8UvY > .Grid_icon__bYeIv > .Grid_customIcon__JyTa0').click()
    })
})

