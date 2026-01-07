class LoginPage {
  
  emailField = '#validationCustomEmail';
  continueButton = 'button.btn.btn-primary';
  passwordField = '#validationCustomPassword';
  loginButton = '.w-100.btn.btn-primary';

  
  enterEmail(email) {
    cy.get(this.emailField).should('be.visible').type(email);
  }

  clickContinue() {
    cy.get(this.continueButton).should('be.enabled').click();
  }

  enterPassword(password) {
    cy.get(this.passwordField).should('be.visible').type(password);
  }

  clickLogin() {
    cy.get(this.loginButton).should('be.enabled').click();
  }


  login(email, password) {
    this.enterEmail(email);
    this.clickContinue();
    this.enterPassword(password);
    this.clickLogin();
  }
}


export default LoginPage;