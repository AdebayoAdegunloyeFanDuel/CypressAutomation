/// <reference types="Cypress" />

describe('My Forth Test Suite', function()
{
it('My ForthTest case', function(){


cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

//Mouse over
// cy.get('div.mouse-hover-content').invoke('show')
//if you do not want to hover, you can force click
cy.contains('Top').click({force: true})
cy.url().should('include','top')


})



})
