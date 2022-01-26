Cypress.Commands.add('chooseSize', () => {
  cy.get('div[data-attribute-code="size"]')
  .first()
  .find('div.swatch__option')
  .first()
  .click()
})

Cypress.Commands.add('chooseColor', () => {
  cy.get('div[data-attribute-code="color"]')
  .first()
  .find('div.swatch__option')
  .first()
  .click()
})

Cypress.Commands.add('addToBasket', () => {
  cy.get('button[class*="button--add-to"]')
  .first()
  .click()
})

describe('Add product to basket', () => {

  it('Add product to basket from a products list page', () => {
    cy.visit('https://alpaca-community.snowdog.dev/women.html')

    cy.chooseSize()
    cy.chooseColor()
    cy.addToBasket()

    cy.get('[data-ui-id="message-success"]')
    .should('be.visible')

    cy.get('[data-testid="minicart-link"]')
    .click()
    .get('div.minicart-product')
    .should('be.visible')
  })

  it('Add product to basket from a product info page', () => {

    const PRODUCT_NAME = 'erika-running-short'

    cy.visit(`https://alpaca-community.snowdog.dev/${PRODUCT_NAME}.html`)

    cy.chooseSize()
    cy.chooseColor()
    cy.addToBasket()

    cy.get('[data-ui-id="message-success"]')
    .should('be.visible')

    cy.get('[data-testid="minicart-link"]')
    .click()
    .get('div.minicart-product')
    .should('be.visible')
  })

})
