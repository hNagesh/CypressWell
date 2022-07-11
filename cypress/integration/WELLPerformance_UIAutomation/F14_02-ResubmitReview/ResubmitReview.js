import CommonMethod from '../../../support/CommonMethod'
/// <reference types="cypress" />
beforeEach(() => {
    CommonMethod.beforeTest()
})
Given('User navigating to the Review Page by logging in to the wellcertified', function () {
    CommonMethod.loginpage()
    cy.wait(1000)
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
        cy.xpath(this.locator.adminhsrstatus).should('contain', 'Under Review')
        cy.contains(this.getId.performanceId).click({ force: true })
        cy.wait(2000)
    })
        cy.contains('Reviews').should('be.visible')
})
Then('User will be redirected to projects Reviews list page', function () {
    cy.contains('Reviews').should('be.visible')
})
And('User verifies the Submitted and Estimated Review date in projects Reviews list', function () {
    cy.xpath(this.locator.submittedOnDate).should('be.visible')
    
})
And('User verifies Review phase in projects Reviews list', function () {
    cy.wait(3000)
    cy.contains('Reviews').should('be.visible')
    cy.xpath(this.locator.reviewPhaselists).should('contain',"Preliminary Performance Rating Review")
})
And('User verifies status in projects Reviews list', function () {
    cy.xpath(this.locator.resubmitStatusreviewlist).should('contain',"require clarification")
})
/////////////////////////Resubmit Review/////////////////////////////////////////////////

Given('User navigating to the Review page', function () {
    //cy.contains('Project Reviews WELLUIAutomation').should('be.visible')
})

And('User clicks on Resubmit review', function () {
   cy.xpath(this.locator.resubmitreview).click({ force: true })
})
And('User clicks on submit button and verify error message', function () {
    cy.xpath(this.locator.resubmitbtn).click({ force: true })
   cy.contains('Note is required.').should('be.visible')
})
And('User enter the comments', function () {
   cy.xpath(this.locator.reSubmitnote).type(this.data.testdata)
})
And('User clicks on submit button', function () {
    cy.xpath(this.locator.resubmitbtn).click({ force: true })
})
Then('User will be redirected to Preliminary Performance Rating Review page', function () {
    cy.contains('Preliminary Performance Rating Review').scrollIntoView().should('be.visible')
    
})
And('User verifies comments', function () {
    cy.contains(this.data.testdata).scrollIntoView().should('be.visible')
})
And('User verifies status', function () {
    cy.wait(2000)
    cy.xpath(this.locator.statusPHSR).should('contain',"In Progress")
})
