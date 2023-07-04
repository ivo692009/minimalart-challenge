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
    //Esta funcion recorre todos los meses hasta llegar a Febrero
    //Como Cypress no permite bucles por defecto decidi optar por una recurrencia simple

    //Consigo el texto del div central de los meses de forma relativa y lo invoco como texto
    cy.get('#\__next > div > main > .Grid_header__yAoy_ > div:nth-child(2)').invoke('text').then((text) => {
      //Valido si el texto NO es febrero
        if(text!= "february"){
        //Se clickea el boton NEXT para ir hacia atras
        cy.xpath('//*[@id="__next"]/div/main/div[1]/div[1]').click()
        //Se hace una espera forzada para la carga de la pagina para que funcione bien
        cy.wait(200);
        //Vuelvo a llamar a la funcion para seguir retrocediendo en meses.
        cy.ValidarMes();
      }
      });
    
})

Cypress.Commands.add('ValidarDiaDeLaMarmota', () => { 
//Esta funcion YA posicionado en febrero, valida que no existe la nota, y si no existe se crea la nota

    //Primero validamos que estemos en febrero
    cy.ValidarMes()

    //Despues hacemos una validacion con respecto a si existe una nota
    cy.contarElementosDiv().then((cantidadElementos) => {
        //Se setea la variable para poder validar la cantidad de divs
        cy.wrap(cantidadElementos).as('cantidadDiv');
    });
 
    cy.get('@cantidadDiv').then((cantidadDiv) => {
        // Realizar aserciones utilizando 'cantidadDiv'

        if(cantidadDiv<=2){
            //Si entra en este bloque significa que no existe el dia de la marmota
            cy.get('p').contains('Dia de la Marmota').should('not.exist').then(()=>{
                //Se cliquea el Div del dia 2 de febrero
                cy.get('div > main > div > .Grid_spaceHolder__IVVTT > .Grid_spaceInMonth__JTF6k:nth-child(5)').click()
                //Se cliquea el div para crear la nota y se escribe "Dia de la Marmota"
                cy.get('.Grid_modalBody__zvK4C > .Grid_reminderBox__yQ64v > .Grid_reminderContent__pLoKD > .Grid_reminderInput__pQ5qK > textarea').click().type("Dia de la Marmota")
                //Se cliquea la Cruz para cerrar el Div de las notas
                cy.get('.Grid_modal__dk4Wd > .Grid_modalContent__slmaD > .Grid_modalHeader__n8UvY > .Grid_icon__bYeIv > .Grid_customIcon__JyTa0').click()
            })

        }else{
            cy.get('p').contains('Dia de la Marmota').should('exist').then(()=>{
                //Esta validacion indica que El dia de la Marmota ya existe
            cy.log("El dia de la marmota ya existe")
            })
        }

    });
})

Cypress.Commands.add('BorrarDiaDeLaMarmota', () => { 
    //Esta funcion borra la nota que dice "Dia de la Marmota"
    //Solo funciona si existe la nota previamente
    //Primero validamos que estemos en febrero
    cy.ValidarMes()

    //Despues hacemos una validacion con respecto a si existe una nota
    cy.contarElementosDiv().then((cantidadElementos) => {
        //seteamos la variable con la cantidad de divs encontradas
        cy.wrap(cantidadElementos).as('cantidadDiv');
    });
 
    cy.get('@cantidadDiv').then((cantidadDiv) => {
        // Realizar aserciones utilizando 'cantidadDiv'
        //Validamos la cantidad de DIVS encontrados
        if(cantidadDiv<=2){
            //Si entra en este bloque significa que no existe el dia de la marmota
            cy.get('p').contains('Dia de la Marmota').should('not.exist').then(()=>{
                //Esta validacion indica que El dia de la Marmota no existe
            cy.log("El dia de la marmota no existe")
            })

            }else{
                cy.get('p').contains('Dia de la Marmota').should('exist').then(()=>{
                    //Se cliquea en el Div del 2 de febrero
                    cy.get('.Grid_spaceHolder__IVVTT > .Grid_spaceInMonth__JTF6k > .Grid_reminders__1zv9q > .Grid_reminder__OelsH > .Grid_reminderDesc__gFOG_').click()
                    //Se cliquea la cruz para borrar la nota
                    cy.xpath('/html/body/div[2]/div/main/div[2]/div[3]/div[2]/div[2]/div[1]/div/div[3]/span[2]').click()
                    //Se cliquea la cruz para cerrar el Div de las notas
                    cy.get('.Grid_modal__dk4Wd > .Grid_modalContent__slmaD > .Grid_modalHeader__n8UvY > .Grid_icon__bYeIv > .Grid_customIcon__JyTa0').click()
                })
        }
    });
    

//Pasado este punto se habra borrado la nota
})


  Cypress.Commands.add('contarElementosDiv', () => {
    //Esta es una funcion para que detecte si en el dia 2 de febrero existe alguna nota
    //Teniendo en cuenta que sin notas, la cantidad de DIVS son 2
    return cy.xpath('/html/body/div[2]/div/main/div[2]/div[2]/div[5]') // Selecciona el div padre
      .find('div') // Encuentra todos los div dentro del padre
      .its('length') // Obtiene la longitud de los elementos encontrados
      .then((cantidad) => {
        const cantidadElementosDiv = cantidad; // Obtiene la cantidad de elementos div
        return cantidadElementosDiv; // Devuelve la cantidad numérica
      });
  });