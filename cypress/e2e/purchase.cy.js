
import PurchaseOrderPage from '../pages/purchaseorderpage.js';

const purchaseOrderPage = new PurchaseOrderPage();

describe('Add Purchase Order', () => {

  it('adds a purchase order successfully', () => {

    beforeEach(() => {
    cy.login();
    cy.visit('/inventory');
    cy.url().should('include', '/purchase-order');
  });
    

    // PO flow
    purchaseOrderPage.openPurchaseOrderMenu();
    purchaseOrderPage.clickAddPurchaseOrder();

    purchaseOrderPage.selectSupplier();
    purchaseOrderPage.selectProduct('Iphone 11');

    purchaseOrderPage.enterQtyAndAmount('2', '5000');
    purchaseOrderPage.selectPaymentType('Cash');
    purchaseOrderPage.enterPaidAmount('10000');

    purchaseOrderPage.submitPurchaseOrder();
    purchaseOrderPage.addIMEI('435462546274333');

    cy.pause(); // optional
  });
});
