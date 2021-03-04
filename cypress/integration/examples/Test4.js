/// <reference types="Cypress" />

describe('My Forth Test Suite', function()
{
it('My ForthTest case', function(){


cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
cy.get('#alertbtn').click()
cy.get('[value="Confirm"]').click()
//window:alert
cy.on('window:alert',(str)=>
{
    //mocha compare strings
    expect(str).to.equal('Hello , share this practice page and share your knowledge')
})
cy.on('window:confirm',(str)=>
{
    //mocha compare strings
    expect(str).to.equal('Hello , Are you sure you want to confirm?')
})
//removing target; normally target will open in a new tab. but this is removed to open on the same page
cy.get('#opentab').invoke('removeAttr','target').click()
cy.url().should('include','qaclickacademy')
cy.go('back')


})



})
