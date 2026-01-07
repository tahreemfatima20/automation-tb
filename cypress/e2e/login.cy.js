import LoginPage from '../pages/LoginPage';

const loginPage = new LoginPage();

//T1: The user logins successfully 

describe('TechBazaar Seller Login', () => {
  it('logs in successfully with valid credentials', () => {
    cy.visit('/login');

    const email = Cypress.env('email');
    const password = Cypress.env('password');

    loginPage.login(email, password);

    cy.url({ timeout: 20000 }).should('include', '/');
  });
});