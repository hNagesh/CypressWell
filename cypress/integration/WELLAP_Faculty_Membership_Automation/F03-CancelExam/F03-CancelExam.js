import CommonMethod from '../../../support/CommonMethod'
/// <reference types="cypress" />
beforeEach(() => {
    CommonMethod.beforeTest()
})
Given('User logged in to the WELL certified account', function () {
    CommonMethod.adminLogin()
    cy.contains("Dashboard").should('be.visible')
    cy.wait(2000)
})
When('User clicks on Exams from top menu under Admin', function () {
    cy.xpath(this.locator.AdminWELLAP.Exambtn).click({ force: true })
})
And('User redirects to Admin Exams list page successfully', function () {
    cy.contains("Admin Exams").should('be.visible')
})
And('User verifies the fields on the Exams list page', function () {
    cy.xpath(this.locator.AdminWELLAP.Eligibilityid).should('be.visible')
    cy.xpath(this.locator.AdminWELLAP.Applybtn).should('be.visible')
    cy.xpath(this.locator.AdminWELLAP.Paymentstatus).should('contain','paid')
    cy.wait(4000)
    cy.fixture('WELLAPId').then(function (projectid) {
        this.projectid = projectid
        cy.wait(2000)
        cy.xpath(this.locator.AdminWELLAP.Eligibilityid).click({ force: true })
        cy.wait(2000)
        cy.xpath(this.locator.AdminWELLAP.Eligibilityid).type(this.projectid.EligibilityID)
        cy.wait(2000)
        cy.contains('Apply').click({ force: true })
        cy.wait(2000)
    })
})
And('User clicks on Edit button', function () {
    cy.xpath(this.locator.AdminWELLAP.Examstatus).should('contain','pending')
    cy.wait(3000)
    cy.xpath(this.locator.AdminWELLAP.Editbtn).scrollIntoView().click({ force: true })
})
Then('User will be redirected to the Exam Details page successfully', function () {
    cy.contains("Exam Details").should('be.visible')
})
And('User verifies the fields on the Exam Details page', function () {
    cy.contains("Exam Details").should('be.visible')
    cy.xpath(this.locator.AdminWELLAP.Examdetailseditbtn).should('be.visible')
    cy.xpath(this.locator.AdminWELLAP.DownloadRecepitbtn).should('be.visible')
    cy.xpath(this.locator.AdminWELLAP.ScheduleExambtn).should('be.visible')
    cy.xpath(this.locator.AdminWELLAP.CancelExambtn).should('be.visible')
    cy.wait(3000)
})
And('User clicks on Cancel Exam button', function () {
    cy.xpath(this.locator.AdminWELLAP.CancelExambtn).click({ force: true })
    cy.wait(3000)
})
And('User redirects to Admin Exams list page', function () {
    cy.contains("Admin Exams").scrollIntoView().should('be.visible')
})
And('USer verifies the Exam cancelled Status', function () {
    cy.xpath(this.locator.AdminWELLAP.Examstatus).should('contain','cancelled')
})
