/// <reference types="cypress" />

describe('locators', () => {
  beforeEach(() => {
    cy.visit('/elements')
  })

  it('locating elements with get', () => {
    //get all elements by tag name
    cy.get('button')

    //get all elements by classname
    cy.get('.btn-with-class')

    //get all elements with specific classes
    cy.get('[class="Elements-btn btn-with-class"]')
    cy.get('[class="Elements-btn btn-with-class more-btn-classes"]')
  
    //get all elements with identical
    cy.get('#btn-with-id')

    //get all elements by specific attribute
    cy.get('[type="submit"]')

    //get all elements by tag name AND class
    cy.get('button.Elements-btn')

    //get all elements by tag name AND class AND id 
    cy.get('button.Elements-btn#btn-with-id')

    //get all elements by tag name AND class AND type attribute
    cy.get('button.Elements-btn[type="submit"]')

    //get all elements with specific data test id
    cy.getByTestId('btn-id-1')
  })

  it('locating elements with contains', () => {
    //get element by text
    cy.contains('Unique Text')

    //get element by text
    cy.contains('Not Unique Text')
    
    //with selector 
    cy.contains('[type="submit"]', 'Not Unique Text')

    cy.get('form').contains('Not Unique Text')

    cy.get('[type="submit"]').contains('Not Unique Text')
  })

  it('locating elements with find', () => {
    cy.get('#form-1').find('.btn-1')
    cy.get('#form-1').find('.btn-2')
  })
})