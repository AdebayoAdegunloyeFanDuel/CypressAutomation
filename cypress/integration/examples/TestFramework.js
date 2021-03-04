/// <reference types="Cypress" />
import HomePage from '../../support/pageObjects/HomePage'
import ProductPage from '../../support/pageObjects/ProductPage'


describe('My Framework Test Suite', function()
{
    before(function(){
        //Runs once before all the test in the block
        cy.fixture('example').then(function(data)
        {   
            //Initialling the data
            this.data=data
        })
    })

it('My FrameWorkTest case', function(){
const homePage = new HomePage()
const productPage = new ProductPage()

    cy.visit(Cypress.env('url'))
    homePage.getEditBox().type(this.data.name)
    homePage.getGender().select(this.data.gender)
    homePage.getTwoWayDataBinding().should('have.value',this.data.name)
    homePage.getEditBox().should('have.attr','minlength',2)
    //check it is diabled
    homePage.getEntrepreneaur().should('be.disabled')

    homePage.getShopTab().click()

    //This is loopig through productName in fixtures/example.json
    this.data.productName.forEach(element => {
        cy.selectProduct(element)
    });

    productPage.checkOutButton().click()

    productPage.itemTotal()
    
    productPage.grandTotal()
    productPage.buyProducts().click()
    productPage.enterCountry().type('India')

    // Override Cypress specific time-out
    Cypress.config('defaultCommandTimeout', 8000)
    productPage.countrySuggestion().click()
    productPage.checkBox().check({force: true})
    productPage.purchaseButton().click()
    productPage.alert().then(function(element)
    {
        const actualText=element.text()
        expect(actualText.includes("Success! ")).to.be.true
    })






})

})
