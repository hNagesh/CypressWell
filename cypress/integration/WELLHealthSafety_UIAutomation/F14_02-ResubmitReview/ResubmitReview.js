import CommonMethod from '../../../support/CommonMethod'
/// <reference types="cypress" />
beforeEach(() => {
    CommonMethod.beforeTest()
})
Given('User navigating to the Review Page by logging in to the wellcertified', function () {
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
            cy.xpath(this.locator.adminhsrstatus).invoke('text').then((status)=>{
                expect(status.trim()).to.equal("Under Review")
                })
        cy.contains(this.projectid.WELLHealthSafety).click({ force: true })
        cy.contains('Reviews').should('be.visible')
    })
})
And('User verifies the Submitted and Estimated Review date in projects Reviews list', function () {
    cy.xpath(this.locator.submittedOnDate).should('be.visible')
    
})
And('User verifies Review phase in projects Reviews list', function () {
    cy.wait(3000)
    cy.contains('Reviews').should('be.visible')
    cy.xpath(this.locator.reviewPhaselists).should('contain',"Preliminary Health-Safety Review")
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
Then('User will be redirected to Preliminary Health-Safety Review page', function () {
    cy.contains('Preliminary Health-Safety Review').scrollIntoView().should('be.visible')
    
})
And('User verifies comments', function () {
    cy.contains(this.data.testdata).scrollIntoView().should('be.visible')
})
And('User verifies status', function () {
    cy.wait(2000)
    cy.xpath(this.locator.statusPHSR).should('contain',"In Progress")
})
