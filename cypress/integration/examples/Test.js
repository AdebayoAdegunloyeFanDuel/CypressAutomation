/// <reference types="Cypress" />

describe('My first Test Suite', function()
{
it('My FirstTest case', function(){

cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
cy.get('.search-keyword').type('ca')
cy.wait(2000)
cy.get('.product').should('have.length',5)
cy.get('.product:visible').should('have.length',4) //should is the assertion // ':visible' for items that are only visible. 
//Parent child chaining 
cy.get('.products').as('productLocator') //Setting it as variable

cy.get('@productLocator').find('.product').should('have.length',4)
cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click().then(function(){
    //Print in logs 
    console.log('sf')
})

cy.get('@productLocator').find('.product').each(($el, index, $list) => {
    const VegName = $el.find('h4.product-name').text()
        if(VegName.includes('Cashews'))
        {
        $el.find('button').click()
        }
    })

//assert in logo text correctly displayed
cy.get('.brand').should('have.text', 'GREENKART')
//Logging in cypress
cy.get('.brand').then(function(logoelement)
{
    cy.log(logoelement.text())

})


})

})