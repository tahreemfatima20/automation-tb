// cypress/pages/InventoryPage.js
class InventoryPage {
  visit() {
    cy.visit('/inventory');
  }

   clickAddButton() {
    cy.wait(15000);
    cy.get('#inventory-add-button').click({ force: true });
  }


  selectCategory(category) {
    cy.get('#inventory-form-category').click();
    cy.contains(category).click();
  }

  enterProductName(name) {
    cy.get('[placeholder="e.g. dell"]').type(name);
  }

  selectCondition(condition) {
    cy.get('#inventory-form-condition').click();
    cy.contains(condition).click();
  }

  enterQuantity(quantity) {
    cy.get('[placeholder="e.g. 12 Items"]').type(quantity);
  }

  enterPrice(originalPrice, sellingPrice) {
    cy.get('[placeholder="e.g. 500"]').eq(0).type(originalPrice);
    cy.get('[placeholder="e.g. 500"]').eq(1).type(sellingPrice);
  }

  uploadImage(filePath) {
    cy.get('input[type="file"]').selectFile(filePath);
  }

  clickSave() {
    cy.contains('Save').click();
  }

  // methods for adding a product
  addProduct({ category, name, condition, quantity, originalPrice, sellingPrice, image }) {
    this.clickAddButton();
    this.selectCategory(category);
    this.enterProductName(name);
    this.selectCondition(condition);
    this.enterQuantity(quantity);
    this.enterPrice(originalPrice, sellingPrice);
    this.uploadImage(image);
    this.clickSave();
  }
}

export default InventoryPage;