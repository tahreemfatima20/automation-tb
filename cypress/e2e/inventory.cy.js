// cypress/e2e/Inventory.cy.js
import InventoryPage from '../pages/inventoryPage';

describe('Inventory Page tests', () => {
  const inventory = new InventoryPage();

  beforeEach(() => {
    cy.login();
    cy.visit('/inventory');
    cy.url().should('include', '/inventory');
  });
  
  it('should add new product', () => {
    inventory.visit();

    inventory.addProduct({
      category: 'Mobile',
      name: 'iPhone 14',
      condition: 'New',
      quantity: '10',
      originalPrice: '10000',
      sellingPrice: '12000',
      image: ''
    });

    // Optional: verify product added
    cy.contains('iPhone 14 ').should('be.visible');
  });
});


// import LoginPage from '../pages/LoginPage';
// import InventoryPage from '../pages/inventoryPage';

// describe('Inventory Page tests', () => {
//   const loginPage = new LoginPage();
//   const inventory = new InventoryPage();

//   beforeEach(() => {
//     cy.visit('/login');

//     loginPage.login(
//       Cypress.env('email'),
//       Cypress.env('password')
//     );

//     cy.url({ timeout: 20000 }).should('include', '/dashboard');
//   });

//   it('should add new product', () => {
//     inventory.visit();

//     inventory.addProduct({
//       category: 'Mobile',
//       name: 'iPhone 14',
//       condition: 'New',
//       quantity: '10',
//       originalPrice: '10000',
//       sellingPrice: '12000',
//       image: ''
//     });

//     cy.contains('iPhone 14').should('be.visible');
//   });
// });


// import LoginPage from '../pages/LoginPage';
// import InventoryPage from '../pages/inventoryPage';

// describe('Inventory Page tests', () => {
//   const loginPage = new LoginPage();
//   const inventory = new InventoryPage();

//   beforeEach(() => {
//     cy.visit('/login');

//     loginPage.login(
//       Cypress.env('email'),
//       Cypress.env('password')
//     );

//     cy.url({ timeout: 20000 }).should('include', '/dashboard');
//   });

//   it('should add new product', () => {
//     inventory.visit();

//     inventory.addProduct({
//       category: 'Mobile',
//       name: 'iPhone 14',
//       condition: 'New',
//       quantity: '10',
//       originalPrice: '10000',
//       sellingPrice: '12000',
//       image: ''
//     });

//     cy.contains('iPhone 14').should('be.visible');
//   });
// });
