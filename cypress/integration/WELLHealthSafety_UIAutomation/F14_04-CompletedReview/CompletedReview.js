import CommonMethod from '../../../support/CommonMethod'
/// <reference types="cypress" />
beforeEach(() => {
    CommonMethod.beforeTest()
})
Given('User navigates to the Reviews page by logging in to the wellcertified', function () {
    CommonMethod.loginpage()
    cy.fixture('HSRId').then(function (projectid) {
        this.projectid = projectid
        cy.wait(2000)
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
        cy.xpath(this.locator.actionhsrstatus).invoke('text').then((status)=>{
            expect(status.trim()).to.equal("Action Required")
            })
        cy.contains(this.projectid.WELLHealthSafety).click({ force: true })
        cy.contains('Reviews').should('be.visible')
    })
})
And('User verifies Reviews fields', function () {
    cy.wait(2000)
    cy.xpath(this.locator.submitReview).should('be.visible')
})
And('User verifies Review phase in Reviews list', function () {
    cy.xpath(this.locator.reviewPhaselists).should('contain',"Preliminary Health-Safety Review")
})
And('User verifies status in Reviews list', function () {
    cy.xpath(this.locator.reviewcompletestatuslist).should('contain',"Completed")

})
///////////////////////////View Page////////////////////////////////////////////////////
Given('User navigates to the Reviews page', function () {
    cy.contains("Reviews").should('be.visible')
})

Then('User will be redirected to Preliminary Health-Safety Review page', function () {
cy.contains("Preliminary Health-Safety Review").should('be.visible')

})
Then('User verifies Preliminary Health-Safety Review fields', function () {
    cy.xpath(this.locator.submittedOnDatePHSR).should('be.visible')
    cy.xpath(this.locator.reviewedstatusPHSRR).should('be.visible')
    cy.xpath(this.locator.paidstatusPHSR).should('be.visible')
    })
And('User verifies status on Project Reviews', function () {
    cy.xpath(this.locator.reviewedstatusPHSRR).should('contain',"Reviewed")
})
And('User verifies payment status for Reviews', function () {
    cy.xpath(this.locator.paidstatusPHSR).should('contain',"paid")
})
And('User verifies comments on Project Reviews', function () {
    cy.contains(this.data.testdata).should('be.visible')
})
