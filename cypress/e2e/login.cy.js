import LoginPage from '../pages/LoginPage';

const loginPage = new LoginPage();

describe('TechBazaar Seller Login', () => {
  it('logs in successfully with valid credentials', () => {
    // Visit the login page
    cy.visit('https://uat.seller.techbazaar.pk/login');

    // Directly pass your credentials
    const email = 'yelif20224@fixwap.com';
    const password = 'test111';

    loginPage.login(email, password);

    // Verify navigation to dashboard
    cy.url({ timeout: 20000 }).should('include', '/dashboard');
  });
});