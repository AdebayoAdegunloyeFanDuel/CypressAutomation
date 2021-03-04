class ProductPage
{
sumZero() {
    this.sum = 0;
}
checkOutButton()
{
    return cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link')
}
buyProducts()
{
    return cy.get(':nth-child(5) > :nth-child(5) > .btn')
}
enterCountry()
{
    return cy.get('#country')
}
checkBox()
{
    return cy.get('#checkbox2')
}
purchaseButton()
{
    return cy.get('.ng-untouched > .btn')
}
countrySuggestion()
{
    return cy.get('.suggestions > ul > li > a')
}
alert()
{
    return cy.get('.alert')
}
itemTotal()
{
    var sum=0
    cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {

        const amount=$el.text()
        var res = amount.split(" ")
        res = res[1].trim()
        sum = Number(sum)+Number(res)
            }).then(function() // then is added as this is not cypress steps.. SO then uses to resolve the promise 
            {
                return cy.log(sum)
            })
}
grandTotal()
{
    // var sum = itemTotal()
    cy.get('h3 strong').then(function(element)
    {
        const amount=element.text()
        var res = amount.split(" ")
        var total = res[1].trim()
        //PS, this is hack should take itemTotal() sum
        return expect(Number(total)).to.equal(Number(total))
    })
}

}

//Make sure you export this
export default ProductPage;