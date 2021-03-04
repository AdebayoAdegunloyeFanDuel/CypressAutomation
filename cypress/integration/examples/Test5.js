/// <reference types="Cypress" />

describe('My Forth Test Suite', function()
{
it('My ForthTest case', function(){


cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

//Working with table. Scan the whole table and go through the row 
cy.get('tr td:nth-child(2)').each(($el, index, $list) => {
    const text=$el.text()
        if(text.includes("Python"))
        {
            cy.get('tr td:nth-child(2)').eq(index).next().then(function(price)
            {
                const priceText = price.text()
                expect(priceText).to.equal('25')
            })
        }
        })


})



})
