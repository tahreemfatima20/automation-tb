class PurchaseOrderPage {

  openPurchaseOrderMenu() {
    cy.get('#tooltip-anchor-Purchase-Order', { timeout: 20000 })
      .scrollIntoView()
      .click();
  }

  clickAddPurchaseOrder() {
    cy.get('#purchase-order-add-purchase-order', { timeout: 15000 })
      .should('be.visible')
      .click();
  }

  selectSupplier() {
   selectSupplier() 
  cy.get('.py-3.px-3.modal-body')
    .find('.react-select-container__control')  
    .first() 
    .click() 
    .find('input')  
    .type('{downarrow}{enter}'); 
  }

  selectProduct(productName) {
    cy.get('.py-3.px-3.modal-body')
      .find('.react-select-container__value-container')
      .contains('Select')
      .first()
      .click()
      .find('input')
      .type(productName);

    cy.wait(1000);
    cy.get('input').type('{downarrow}{enter}');
  }

  enterQtyAndAmount(qty, amount) {
    cy.get('input[placeholder="Rs. 500"]')
      .first()
      .should('be.enabled')
      .clear()
      .type(amount);

    cy.get('input[placeholder="Qty.5"]')
      .clear()
      .type(qty);
  }

  selectPaymentType(type) {
    cy.contains('label', 'Payment Type')
      .parent()
      .find('.react-select-container__control')
      .click()
      .find('input')
      .type(type);

    cy.wait(1000);
    cy.get('input').type('{downarrow}{enter}');
  }

  enterPaidAmount(amount) {
    cy.contains('label', 'Paid Amount*')
      .parent()
      .find('input')
      .clear()
      .type(amount);
  }

  submitPurchaseOrder() {
    cy.get('#add-Purchase-order-add-button')
      .should('be.visible')
      .click();
  }

  addIMEI(imei) {
    cy.contains('Add IMEI(s)', { timeout: 10000 })
      .should('be.visible')
      .click();

    cy.get('#tag-input')
      .should('be.visible')
      .type(`${imei}{enter}`);

    cy.contains('button', 'Save')
      .should('be.visible')
      .click();
  }
}

export default PurchaseOrderPage;
