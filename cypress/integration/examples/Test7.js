/// <reference types="Cypress" />

describe('My Forth Test Suite', function()
{
it('My ForthTest case', function(){


// Calling from cypress.json and then adding the subdomain. 
cy.visit(Cypress.env('url')+"/AutomationPractice/")

//Note this is just to show that you can not use visit method for another url. 
cy.get('#opentab').then(function(el)
{
    const url=el.prop('href')
    cy.visit(url)
})


})



})
