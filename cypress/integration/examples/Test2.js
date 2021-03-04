/// <reference types="Cypress" />

describe('My Second Test Suite', function()
{
it('My SecondTest case', function(){

cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
cy.get('.search-keyword').type('ca')
cy.wait(2000)
//Parent child chaining 
cy.get('.products').as('productLocator') //Setting it as variable

cy.get('@productLocator').find('.product').each(($el, index, $list) => {
    const VegName = $el.find('h4.product-name').text()
        if(VegName.includes('Cashews'))
        {
        $el.find('button').click()
        }
    })
    cy.get('.cart-icon > img').click()
    cy.contains('PROCEED TO CHECKOUT').click()
    cy.contains('Place Order').click()


})

})