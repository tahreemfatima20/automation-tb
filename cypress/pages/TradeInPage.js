class TradeInPage {

  openTradeInMenu() {
    cy.get('#tooltip-anchor-Trade-in', { timeout: 20000 })
      .scrollIntoView()
      .click();
  }

  clickAddCustomer() {
    cy.get('#trade-in-add-customer', { timeout: 10000 })
      .should('be.visible')
      .click();
  }

  fillCustomerDetails(customer) {
    cy.get('input[placeholder="Full Name"]')
      .should('be.visible')
      .type(customer.name);

    cy.get('input[placeholder="+92-3XX-XXXXXXX"]')
      .type(customer.phone);

    cy.get('input[placeholder="example@mail.com"]')
      .type(customer.email);

    cy.get('input[placeholder="XXXXX-XXXXXXX-X"]')
      .type(customer.cnic);
  }

  uploadCNIC(frontPath, backPath) {
    cy.get('input[name="cnic_front"]')
      .selectFile(frontPath, { force: true });

    cy.get('input[name="cnic_back"]')
      .selectFile(backPath, { force: true });
  }

  submitCustomer() {
    cy.get('#trade-in-add-customer-button')
      .should('be.enabled')
      .click();
  }

  
  verifyCustomerAdded(customer) {
    cy.get('#trade-in-customer-modal', { timeout: 15000 })
      .should('not.exist');

    cy.contains('h5.text-dark', 'No result found!')
      .should('not.exist');

    cy.get('#trade-in-customer-table', { timeout: 15000 })
      .should('contain.text', customer.name)
      .and('contain.text', customer.email);
  }
}

export default TradeInPage;