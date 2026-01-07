
import TradeInPage from './pages/TradeInPage';

const tradeInPage = new TradeInPage();

describe('Trade-in Customer Flow', () => {

  it('adds a trade-in customer successfully', () => {

   beforeEach(() => {
    cy.login();
    cy.visit('/inventory');
    cy.url().should('include', '/trade-in');
  });

    //  Close guide popup if shown
    cy.get('body').then(($body) => {
      if ($body.find('.driver-popover-close-btn').length) {
        cy.get('.driver-popover-close-btn').click();
      }
    });

    // Trade-in customer modal flow
    tradeInPage.openTradeInMenu();
    tradeInPage.clickAddCustomer();

    const customer = {
      name: 'Cherry',
      phone: '+92-309-4398584',
      email: 'tahreemkhannn@gmail.com',
      cnic: '35200-2302971-6'
    };

    tradeInPage.fillCustomerDetails(customer);

   tradeInPage.uploadCNIC(
  'cypress/fixtures/cnic-front.jpg',
  'cypress/fixtures/cnic-back.jpg'
    );

    tradeInPage.submitCustomer();
    tradeInPage.verifyCustomerAdded(customer);

   // cy.pause(); 
  });
});