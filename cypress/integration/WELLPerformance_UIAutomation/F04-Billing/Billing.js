import CommonMethod from '../../../support/CommonMethod'
/// <reference types="cypress" />
beforeEach(() => {
    CommonMethod.beforeTest()
})
Given('User navigate to the Dashboard page by logging in to wellcertified', function () {
    cy.wait(2000)
    CommonMethod.loginpage()
    cy.wait(2000)
    cy.xpath(this.locator.projectMenu).click()
    cy.wait(1000)
    cy.xpath(this.locator.PerformanceList.WellPerformance).click()
    cy.get(this.locator.PerformanceList.Applysearch).should('be.visible').click({ force: true })
    cy.wait(2000)
    cy.fixture('performanceId').then(function (getId) {
        this.getId = getId
        cy.get(this.locator.PerformanceList.IDorNamesearch).eq(0).type(this.getId.performanceId)
        cy.wait(2000)
        cy.get(this.locator.PerformanceList.Applysearch).should('be.visible').click({ force: true })
        cy.contains(this.getId.performanceId).click({ force: true })
        cy.wait(2000)
    })
})

Then('User will be redirected to the WELL Performance Rating Billing page successfully', function () {
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
Then('User will be redirected to WELL Performance Rating Receipt page successfully', function () {
    cy.contains('Receipt ').should('be.visible')
})
And('User verifies fields on WELL Performance Rating Receipt page', function () {
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
    cy.get(this.locator.enrollment.getPaymentAmount).should('contain',"2,730")
})
And('User verifies Download receipt', function () {
    cy.xpath(this.locator.Downloadreceipt).should('be.visible')
})



