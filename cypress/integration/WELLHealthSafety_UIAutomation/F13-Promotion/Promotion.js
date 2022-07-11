import CommonMethod from '../../../support/CommonMethod'
/// <reference types="cypress" />
beforeEach(() => {
    CommonMethod.beforeTest()
})
Given('User navigate to the Edit page by logging in to wellcertified', function () {
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
        cy.xpath(this.locator.hsrstatuscompare).invoke('text').then((status) => {
            expect(status.trim()).to.equal("Registered")
        })
        cy.contains(this.projectid.WELLHealthSafety).click({ force: true })
        cy.wait(2000)
       })
})
Then('User will be redirected to Promotion page', function () {
    cy.contains('Promotion').should('be.visible')
})
And('User verifies Promotion fields', function () {
    cy.xpath(this.locator.HSRpromotionfields).should('be.visible')
})
And('User verifies Engagement Materials cards', function () {
    cy.get(this.locator.resourceCard).eq(0).should('contain.text','Welcome to WELL Toolkit')
     cy.get(this.locator.resourceCard).eq(1).should('contain.text','IWBI branding guidelines')
     cy.get(this.locator.resourceCard).eq(2).should('contain.text','Marketing and PR guidelines for the WELL Health-Safety Rating')
})
And('User verifies WELL Store cards', function () {
    cy.get(this.locator.resourceCard).eq(8).should('contain.text','Blue Standard Decal(English)')
     cy.get(this.locator.resourceCard).eq(9).should('contain.text','Blue Standard Decal (English and Simplified Chinese)')
     cy.get(this.locator.resourceCard).eq(10).should('contain.text','Blue Standard Decal (English and Traditional Chinese)')
     cy.get(this.locator.resourceCard).eq(11).should('contain.text','White/Transparent Standard Decal(English)')
     cy.get(this.locator.resourceCard).eq(12).should('contain.text','White/Transparent Standard Decal (English and Simplified Chinese)')
     cy.get(this.locator.resourceCard).eq(13).should('contain.text','White/Transparent Standard Decal (English and Traditional Chinese)')    
})
