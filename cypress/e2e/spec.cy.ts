describe('Weboldal teszt', () => {

  before(() => {
    cy.visit('http://localhost:4200/#/dashboard');
    cy.wait(2000)

  });

  it('Should redirect to the /user page when the Profile link is clicked', () => {
    cy.get('a[href="#/user"]').click();

    cy.url().should('include', '/user');
  });

  it('Should log in with the correct credentials', () => {
    cy.visit('localhost:4200/#/user');
    cy.wait(2000)

    cy.get('input[formcontrolname="email"]').type('tesztelo@gmail.com');

    cy.get('input[formcontrolname="password"]').type('000000');
    cy.wait(2000)

    cy.get('button.form-btn').contains('Bejelentkezés').click();

    cy.url().should('include', '/profile');

    cy.get('input[formcontrolname="displayName"]').type('teszt');
    cy.wait(2000)

    cy.get('input[formcontrolname="address"]').type('Eger xy utca 190/A');
    cy.wait(2000)

    cy.get('button.save-button.margin-top').click();
    cy.wait(2000)

  });

  it('Should log in with the correct credentials', () => {
    cy.visit('http://localhost:4200/#/products');
    cy.wait(3000)

    cy.get('.product-card').first().click();
    cy.wait(2000)

    cy.get('.cart-btn').click();
    cy.wait(2000)

    cy.get('app-custom-cart-button').contains('Tovább a kosárhoz').click();
    cy.wait(2000)

    cy.get('#mat-mdc-slide-toggle-2-button').click();
    cy.wait(2000)

    cy.get('button[routerlink="/shipping"]').click();
    cy.wait(2000)

    cy.url().should('include', '/shipping');
    cy.wait(2000)

    cy.get('button.order-btn').click();

    cy.wait(3000)
  });
  it('Should log in with the correct credentials', () => {
    cy.visit('http://localhost:4200/#/user');
    cy.wait(2000)

    cy.get('button.mat-mdc-menu-trigger').click();
    cy.wait(2000)

    cy.get('button[routerlink="/user/orders"]').click();
  });
});
