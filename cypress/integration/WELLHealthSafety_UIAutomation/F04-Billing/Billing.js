import CommonMethod from '../../../support/CommonMethod'
/// <reference types="cypress" />
beforeEach(() => {
    CommonMethod.beforeTest()
})
Given('User navigate to the Dashboard page by logging in to wellcertified', function () {
    cy.wait(2000)
    CommonMethod.loginpage()
    cy.wait(2000)
    cy.fixture('HSRId').then(function (projectid) {
        this.projectid = projectid
        cy.xpath(this.locator.projectMenu).click()
        cy.wait(1000)
        cy.xpath(this.locator.Wellhealthsafety).click()
        cy.wait(2000)
        cy.contains('Apply').click({ force: true })
        cy.xpath(this.locator.idSearch).type(this.projectid.WELLHealthSafety)
        cy.wait(2000)
        cy.contains('Apply').click({ force: true })
        cy.wait(3000)
        cy.xpath(this.locator.projectidcompare).invoke('text').then((projectidcompare)=>{
            expect(projectidcompare.trim()).to.equal(this.projectid.WELLHealthSafety)
            })
        cy.wait(2000)
        cy.xpath(this.locator.hsrstatuscompare).invoke('text').then((status)=>{
            expect(status.trim()).to.equal("Registered")
            })
        cy.contains(this.projectid.WELLHealthSafety).click({ force: true })
        cy.wait(2000)
        })
})

Then('User will be redirected to the WELL Health-Safety Billing page successfully', function () {
    cy.xpath(this.locator.Paidbtn).should('be.visible')
    cy.contains('Download receipt').should('be.visible')
})
////////////////////////////////////////////////////////////////////////////////////////////////
Given('User is on billing page by logging in to wellcertified', function () {
    cy.xpath(this.locator.Paidbtn).should('be.visible')
})
When('User clicks on paid button', function () {
    cy.xpath(this.locator.Paidbtn).click()
})
Then('User will be redirected to WELL Health Safety Receipt page successfully', function () {
    cy.contains('Receipt ').should('be.visible')
})
And('User verifies fields on WELL Health Safety Receipt page', function () {
    cy.xpath(this.locator.Paidbtn).should('be.visible')
    cy.xpath(this.locator.Downloadbtn).should('be.visible')
    cy.xpath(this.locator.Downloadreceipt).should('be.visible')
})

And('User verifies the Payment Status in Receipt page', function () {
    cy.xpath(this.locator.Paidbtn).should('be.visible')
})
And('User verifies Payment date in Receipt page', function () {
    cy.xpath(this.locator.Paidbtn).should('contain','paid')
    
})
And('User verifies the Payment date in Receipt page', function () {
   cy.xpath(this.locator.Paidbtn).should('contain','paid')
    var currentDate = CommonMethod.CurrentDate()
    cy.xpath(this.locator.hsrreciptDate).should('contain',currentDate)
})
And('User verifies the Paid amount', function () {
    cy.contains(this.data.PaymentAmount).should('be.visible')
})
And('User verifies Download receipt', function () {
    cy.xpath(this.locator.Downloadreceipt).should('be.visible')
})



