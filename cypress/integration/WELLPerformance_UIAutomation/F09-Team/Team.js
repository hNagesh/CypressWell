import CommonMethod from '../../../support/CommonMethod'
/// <reference types="cypress" />
beforeEach(() => {
    CommonMethod.beforeTest()
})
///////////////////////////Team page/////////////////////////////////
Given('User navigate to the Team page by logging in to wellcertified Account', function () {
    CommonMethod.loginpage()
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
        cy.xpath(this.locator.enrollment.enrollmentStatus).should('contain', 'Registered')
        cy.contains(this.getId.performanceId).click({ force: true })
        cy.wait(2000)
    })
    cy.contains("Team").click()
})
Then('User will be redirected to Team page successfully', function () {
    cy.wait(3000)
    cy.contains("Administrator").should('be.visible')
    cy.xpath(this.locator.hrsaddMember).should('be.visible')
})
And('User verifies the your WELL Performance Rating Team page fields', function () {
    cy.xpath(this.locator.hrsaddMember).should('be.visible')
    cy.xpath(this.locator.hsrchangeProjectAdmin).should('be.visible')
})
/////////////////////////////Add member///////////////////////////////
Given('User navigate to the Team page', function () {
    cy.contains("Team").should('be.visible')
})
When('User click on Add member button and verifies Add member form fields', function () {
    cy.xpath(this.locator.hrsaddMember).scrollIntoView().click({ force: true })
})
And('User clicks on Invite button without entering the mandatory fields for Add member and verifies error message', function () {
    cy.xpath(this.locator.hrsaddMemberSubmit).click()
    cy.contains('Email Address is required.').should('be.visible')
    cy.contains('Project Authorization is required.').should('be.visible')
    cy.contains('Role is required.').should('be.visible')
})
Then('User will be redirected to Team list page successfully', function () {
    cy.contains("We have sent an email invite!").should('be.visible')
})
And('User verifies added member in Team list', function () {
    cy.xpath(this.locator.hrsteamEmail).invoke('text').then((getEmail) => {
        expect(getEmail.trim()).to.equal(this.data.emailTeam)
}) 
})
/////////////////////////////update member///////////////////////////////
When('User click on edit button and verifies Update member form fields', function () {
    cy.wait(2000)
    cy.xpath(this.locator.edithrsaddMember).should('be.visible')
    cy.xpath(this.locator.edithrsaddMember).should('be.visible').click({ force: true })
    cy.xpath(this.locator.hsrrole).should('be.visible')
    cy.xpath(this.locator.hrsupdateMemberSubmit).should('be.visible')
})
And('User clicks on update button', function () {
    cy.xpath(this.locator.hrsupdateMemberSubmit).click()
})
Then('User will be redirected to the Team list page successfully', function () {
    cy.contains("Team").should('be.visible')
})
And('User verifies update member in Team list', function () {
    cy.wait(2000)
    cy.xpath(this.locator.hrsteamEmail).invoke('text').then((getEmail) => {
        expect(getEmail.trim()).to.equal(this.data.emailTeam)
}) 
})
//////////////////delete member/////////////////////////
And('User click on delete button', function () {
    cy.xpath(this.locator.hsrdeletemember).click()
})
And('User verifies deleted member in Team list', function () {
    cy.contains("Removed").should('be.visible')
})
////////////team////////////////////////
And('User clicks on Add member button', function () {
    cy.wait(3000)
    cy.contains("Administrator").should('be.visible')
    cy.xpath(this.locator.hrsaddMember).click({ force: true })
})
When('User enters data to Email Address and Project Role fields', function () {
    cy.xpath(this.locator.hsremailTeam).type(this.data.emailTeam)
    cy.xpath(this.locator.hsrrole).select(this.data.role)
})
And('User selects the Project Authorization option', function () {
    cy.xpath(this.locator.hsrprojectAuthorizationRbtn).check()
})
And('User clicks on invite button', function () {
    cy.wait(2000)
    cy.xpath(this.locator.hrsaddMemberSubmit).click()
})
Then('User verifies added member in Team list', function () {
    cy.wait(2000)
    cy.contains("We have sent an email invite!").should('be.visible')
})
And('User click on edit button', function () {
    cy.xpath(this.locator.edithrsaddMember).click()
})
And('User enters data to the Email Address and Project Role fields', function () {
    cy.xpath(this.locator.hsrrole).select(this.data.updateRole)
})
////////////////////////////change Admin/////////////////////////////////////
When('User click on Change Administrator button and verifies Change Administrator fields', function () {
    cy.xpath(this.locator.hsrchangeProjectAdmin).click()
})
And('User clicks on update button without entering the mandatory fields for Change Administrator and verifies error message', function () {
    cy.xpath(this.locator.hsrupdateChangeAdmin).click()
    cy.contains('Email Address is required.').should('be.visible')
    cy.contains('Role is required.').should('be.visible')
})
And('User enters data to Email Address and Project Role in Change Administrator fields', function () {
    cy.wait(2000)
    cy.xpath(this.locator.hsremailChangeProject).type(this.data.emailTeam)
    cy.xpath(this.locator.hsrprojectRole).select(this.data.role)
})
And('User clicks on update button for Change Administrator', function () {
    cy.wait(2000)
    cy.xpath(this.locator.hsrupdateChangeAdmin).click({ force: true })
    cy.contains("Team").should('be.visible')
})
//////////////////Non User//////////////////////////////////////////////////////////////////////
When('User enters data to Email Address and Project Role fields for Non User', function () {
    cy.xpath(this.locator.hsremailTeam).type(this.data.nouseremailid)
    cy.xpath(this.locator.hsrrole).select(this.data.role)
})

And('User verifies invite pending in Team list for Non User', function () {
    cy.wait(2000)
    cy.xpath(this.locator.hsrinvitePending).invoke('text').then((status) => {
        var str = status.trim()
    expect(str).to.equal("Invite pending")
    })
})

