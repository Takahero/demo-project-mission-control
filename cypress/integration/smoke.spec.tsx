/// <reference types="cypress" />

describe('Smoke test', () => {
    it('renders App', () => {
        cy.visit('/')
        cy.get('[data-testid=app]').should('exist')
    })
})