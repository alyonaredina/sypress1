Cypress.env() 
Cypress.env('mac') 
Cypress.env('mobile')

describe('authorization', {defaultCommandTimeout: 90000}, () => {       
    it('successful authorization', () => {
        cy.visit('/');
        cy.login('test@test.com', 'test');
        cy.contains(' test@test.com').should('be.visible');
    });

    it('password was entered incorrectly', () => {
        cy.visit('/');
        cy.login('test@test.com', 't');
        cy.get('.mb-3.pl-4.text-danger.font-weight-bold.collapse.show').should('have.text', 'Неправильая почта или пароль');
    });

    it('mail was entered incorrectly', () => {
        cy.visit('/');
        cy.login('t@t', 'test');
        cy.get('.mb-3.pl-4.text-danger.font-weight-bold.collapse.show').should('have.text', 'Неправильая почта или пароль');
    });    
});  


describe('working with the library', {defaultCommandTimeout: 90000}, () => {
    beforeEach (() => {
        cy.visit('/');
        cy.login('test@test.com', 'test');
        cy.contains(' test@test.com').should('be.visible'); 
    }); 
         
    it('Add a book to the library', () => {
        cy.get("button[class='btn btn-warning']").click();        
        cy.get('.modal-title.h4').should('have.text', 'Book description');        
        cy.get('#title').type('Капитанская дочка');
        cy.get('#description').type('роман');
        cy.get('#authors').type('Пушкин А.С.');
        cy.contains('Submit').click();
        cy.contains("Капитанская дочка").should('be.visible');
    });

    it('Add a book to favorites', () => {
        cy.contains('Add to favorite').click();
        cy.contains('Delete from favorite').should('be.visible');
    });

    it('Delete a book from favorites', () => {
        cy.contains('Delete from favorite').click();
        cy.contains('Add to favorite').should('be.visible');            
    });    
});  
   







