import CommonMethod from '../../../support/CommonMethod'
/// <reference types="cypress" />
beforeEach(() => {
    CommonMethod.beforeTest()
})
Given('User navigates to the Reviews page by logging in to the wellcertified', function () {
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
        cy.wait(2000)
        cy.xpath(this.locator.hsrstatuscompare).should('contain', 'Registered')
        cy.contains(this.getId.performanceId).click({ force: true })
        cy.wait(2000)
    })
        cy.contains('Reviews').should('be.visible')
})
And('User verifies Reviews fields', function () {
    cy.wait(2000)
    cy.xpath(this.locator.wprsubmitReview).should('be.visible')
})
/////////////////////////////////////// Review page//////////////////////////////////////////////////////////

When('User clicks on Submit Reviews button', function () {
    cy.wait(4000)
    cy.xpath(this.locator.wprsubmitReview).should('be.visible')
    cy.xpath(this.locator.wprsubmitReview).should('be.visible').click({ force: true })
})
And('User verifies incomplete scorecard error message', function () {
    cy.contains("Oops! It looks like your scorecard is incomplete.").should('not.exist')
    cy.contains("Please ensure you have provided the documentation for all the features marked as a YES and then resubmit.").should('not.exist')
})
And('User clicks on submit button without entering the mandatory fields and verifies error meassage', function () {
    cy.xpath(this.locator.submitReviewDoc).should('be.visible').click({ force: true })
    cy.contains('Doc-submit-phase is required.').should('be.visible')
    cy.contains('Please provide your comments below to notify the IWBI team is required.').should('be.visible')
})
And('User selects the project phase and verifies options', function () {
    cy.xpath(this.locator.primaryWPR).invoke('text').then((primarywpr) => {
        expect(primarywpr).to.equal("Preliminary Performance Rating Review")
    })
    cy.xpath(this.locator.finalWPR).invoke('text').then((finalwpr) => {
        expect(finalwpr).to.equal("Final Performance Rating Review")
    })
    cy.xpath(this.locator.curativeReviewWPR).invoke('text').then((curativeReview) => {
        expect(curativeReview).to.equal("Curative Action Review")
    })
    cy.xpath(this.locator.projectPhase).select("Preliminary Performance Rating Review")
})
And('User enters the comment', function () {
    cy.xpath(this.locator.commentReview).type(this.data.testdata)
})
And('User clicks on submit button', function () {
    cy.xpath(this.locator.submitReviewDoc).should('be.visible').click({ force: true })
})
And('User verifies the Submitted and Estimated Review date in projects Reviews list', function () {
    cy.xpath(this.locator.submittedOnDate).should('be.visible')
})
And('User verifies Review phase in projects Reviews list', function () {
    cy.xpath(this.locator.reviewPhaselists).should('contain',"Preliminary Performance Rating Review")
})
And('User verifies status in projects Reviews list', function () {
    cy.xpath(this.locator.reviewStatuslist).should('contain',"In Progress")

})
///////////////////////////////////////////////////////////////////////////////
Given('User navigates to the Reviews page by logging in to wellcertified', function () {
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
        cy.wait(2000)
        cy.contains(this.getId.performanceId).click({ force: true })
        cy.wait(2000)
    })
        cy.contains('Reviews').should('be.visible')
})
And('User clicks on view button', function () {
    cy.wait(5000)
    cy.contains('Minimum requirements').should('be.visible')
    cy.xpath(this.locator.viewbtn).click({ force: true })
})
Then('User will be redirected to Preliminary Performance Rating Review page', function () {
cy.contains("Preliminary Performance Rating Review").should('be.visible')

})
Then('User verifies Preliminary Performance Rating Review fields', function () {
    cy.xpath(this.locator.submittedOnDatePHSR).should('be.visible')
    cy.xpath(this.locator.statusHSR).should('be.visible')
    cy.xpath(this.locator.paymentHSR).should('be.visible')
    })
And('User verifies status on Project Reviews', function () {
    cy.xpath(this.locator.statusHSR).should('contain',"In Progress")
    cy.xpath(this.locator.paymentHSR).should('contain',"unpaid")
})
And('User verifies comments on Project Reviews', function () {
    cy.contains(this.data.testdata).should('be.visible')
})
And('User verifies the Submitted and Estimated Review date on Project Reviews', function () {
cy.xpath(this.locator.submittedOnDatePPR).should('be.visible')
     
})