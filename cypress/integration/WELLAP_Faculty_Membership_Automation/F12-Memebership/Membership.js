import CommonMethod from '../../../support/CommonMethod'
beforeEach(() => {
    CommonMethod.beforeTest()
    CommonMethod.beforeTest()
    cy.fixture('Header').then(function (dataHeader) {
        this.dataHeader = dataHeader
    })
    cy.fixture('Organizationid').then(function (Organizationid) {
        this.dataOrganizationid = Organizationid
    })

})
///////////////////WELL Membership page validation///////////////////////////////////////////////////////////


When('User clicks on User menu', function () {
    cy.wait(2000)
    cy.get(this.locator.membership.userMenu).click()
})

And('User clicks on WELL Membership from User menu', function () {
    cy.xpath(this.locator.membership.myMembership).click()
    cy.wait(1000)
    cy.url().then(geturl => {
        cy.visit(geturl + "membership/pricing")
    })
})
Then('User redirects to Membership page successfully', function () {
    cy.wait(2000)
    cy.contains('Join Us').should('be.visible')
})
And('User verifies the Join Us content in Membership page', function () {
    cy.xpath(this.locator.membership.joinUsContent).should('contain', this.data.membership.joinUsContent)
})
And('User verifies the fields on Membership page', function () {
    cy.xpath(this.locator.membership.joinUsContent).should('be.visible')
    cy.xpath(this.locator.membership.startEnroll).should('be.visible')
    cy.xpath(this.locator.membership.learnMorebtn).should('be.visible')
    cy.wait(1000)
    cy.get(this.locator.membership.subscribeCornerstoneOrKeystone).eq(1).scrollIntoView().should('be.visible')
    cy.get(this.locator.membership.subscribeCornerstoneOrKeystone).eq(2).scrollIntoView().should('be.visible')
    cy.get(this.locator.membership.benefitList).should('have.length', 9)
    cy.get(this.locator.membership.cornerstoneOrKeystoneAmount).eq(0).scrollIntoView().should('be.visible')
    cy.get(this.locator.membership.cornerstoneOrKeystoneAmount).eq(1).scrollIntoView().should('be.visible')
})
And('User verifies the discount names in Membership page', function () {

})
And('User verifies the discount percentages in Membership page', function () {
    cy.get(this.locator.membership.validatePercentage).eq(0).scrollIntoView().should('contain', this.data.membership.cornerstonePercentage[0])
    cy.get(this.locator.membership.validatePercentageRow2).eq(0).scrollIntoView().should('contain', this.data.membership.cornerstonePercentage[1])
    cy.get(this.locator.membership.validatePercentage).eq(3).scrollIntoView().should('contain', this.data.membership.cornerstonePercentage[2])
    cy.get(this.locator.membership.validatePercentageRow2).eq(3).scrollIntoView().should('contain', this.data.membership.cornerstonePercentage[3])
})
And('User verifies the keystone amount in Membership page', function () {
    cy.get(this.locator.membership.cornerstoneOrKeystoneAmount).eq(0).should('contain', this.data.membership.cornerstoneAmount)
})
And('User verifies the Cornerstone amount in Membership page', function () {
    cy.get(this.locator.membership.cornerstoneOrKeystoneAmount).eq(1).should('contain', this.data.membership.keystoneAmount)
})
/////////////////////////WELL Cornerstone Subscription page validation/////////////////////////////////////////////////////////////////
Given('User navigate to the Membership page', function () {
    cy.get(this.locator.membership.subscribeCornerstoneOrKeystone).eq(1).scrollIntoView().should('be.visible')
})
When('User clicks on Cornerstone Subscription button', function () {
    cy.get(this.locator.membership.subscribeCornerstoneOrKeystone).eq(1).scrollIntoView().should('be.visible').click()

})
Then('User redirects to Organization Details page successfully', function () {
    cy.wait(2000)
    cy.get(this.locator.membership.membershipTab).eq(0).should('be.visible')
    cy.get(this.locator.membership.membershipTab).eq(1).should('be.visible')
    cy.get(this.locator.membership.membershipTab).eq(2).should('be.visible')
})
///////////////////////////WELL Organization Details page validation////////////////////////////////////////////////////////

Given('User navigate to the Organization Details page', function () {
    cy.get(this.locator.membership.membershipTab).eq(0).should('be.visible')
    cy.get(this.locator.membership.membershipTab).eq(1).should('be.visible')
    cy.get(this.locator.membership.membershipTab).eq(2).should('be.visible')
})

And('User verifies fields on the Organization Details page', function () {
    cy.xpath(this.locator.membership.organizationName).should('be.visible')
    cy.xpath(this.locator.membership.membershipLeveloption1).should('be.visible')
    cy.xpath(this.locator.membership.membershipLeveloption2).should('be.visible')
    cy.xpath(this.locator.membership.numberofyears).scrollIntoView().should('be.visible')
    cy.xpath(this.locator.membership.orgcontinuebtn).should('be.visible')
    cy.get(this.locator.membership.applybtnOrg).should('be.visible')
    cy.xpath(this.locator.membership.addDomainbtn).should('be.visible')

})
And('User clicks on continue button without entering the mandatory fields and verifies error meassage', function () {
    cy.xpath(this.locator.membership.orgcontinuebtn).scrollIntoView().should('be.visible').click()
    cy.get(this.locator.membership.errormessageOrg).should('have.length', 3)
})
And('User enter Organization name', function () {
    cy.xpath(this.locator.membership.organizationName).type(this.data.ownerOrganization)
})
And('User upload Organization logo', function () {
    cy.xpath(this.locator.membership.organizationLogo).attachFile(this.data.testDataPath)
    cy.wait(2000)
})
And('User enter data to Organization Domains', function () {
    cy.xpath(this.locator.membership.Domain).type(this.data.membership.addDomain)
})
And('User enter data to Organization website', function () {
    cy.xpath(this.locator.membership.organizationwebsite).type(this.data.url)
})
And('User check number of year', function () {
    cy.xpath(this.locator.membership.numberofyears).should('be.visible').check()
})
And('User clicks on continue button for Organization Details', function () {
    cy.xpath(this.locator.membership.orgcontinuebtn).should('be.visible').click()
})
Then('User redirects to Point of Contact page successfully', function () {
    cy.wait(2000)
    cy.xpath(this.locator.membership.namePointContact).should('be.visible')
})
///////////////////////////WELL Point of Contact page validation///////////////////////////////////////////
Given('User navigate to the Point of Contact page', function () {
    cy.contains("Point of Contact").should('be.visible')
    cy.wait(1000)
})
And('User verifies fields on the Point of Contact page', function () {
    cy.xpath(this.locator.membership.Name).should('be.visible')
    cy.xpath(this.locator.membership.Email).should('be.visible')
    cy.xpath(this.locator.membership.Jobtitle).should('be.visible')
    cy.xpath(this.locator.membership.Phonenumber).should('be.visible')
    cy.xpath(this.locator.membership.Backbtn).should('be.visible')
    cy.xpath(this.locator.membership.Continuebutton).should('be.visible')
})

And('User clicks on the continue button without entering the mandatory fields and verifies error meassage', function () {
    cy.xpath(this.locator.membership.Continuebutton).click({ force: true })
    cy.get(this.locator.membership.errormessageOrg).should('have.length', 2)
    cy.wait(2000)
})
And('User enter Name, Email and phone number', function () {
    cy.xpath(this.locator.membership.Name).type(this.data.membership.Name, { force: true })
    cy.wait(1000)
    cy.xpath(this.locator.membership.Email).type(this.data.membership.Email, { force: true })
    cy.wait(2000)
    cy.xpath(this.locator.membership.Jobtitle).type(this.data.membership.Jobtitle, { force: true })
    cy.wait(1000)
    cy.xpath(this.locator.membership.Phonenumber).type(this.data.membership.Phonenumber, { force: true })
})

And('User check Agree to share point of contact', function () {
    cy.xpath(this.locator.membership.contactdetailscheckbox).scrollIntoView().check({ force: true })
    cy.wait(1000)
})
And('User clicks on continue button', function () {
    cy.xpath(this.locator.membership.Continuebutton).click({ force: true })
    cy.wait(1000)
})
Then('User redirects to Owner Details page successfully', function () {
    cy.contains("Owner Details").should('be.visible')
    cy.wait(2000)
})
///////////////////////////WELL Owner Details validation///////////////////////////////////////////////////
Given('User navigate to the Owner Details page', function () {
    cy.contains("Owner Details").should('be.visible')
    cy.wait(2000)
})
And('User verifies fields on the Owner Details page', function () {
    cy.xpath(this.locator.membership.Ownername).should('be.visible')
    cy.xpath(this.locator.membership.OwnerEmail).should('be.visible')
    cy.xpath(this.locator.membership.Ownerjob).should('be.visible')
    cy.xpath(this.locator.membership.Ownernumber).should('be.visible')
    cy.xpath(this.locator.membership.BackButton).should('be.visible')
    cy.xpath(this.locator.membership.continue).should('be.visible')
})

And('User clicks on the continue button without entering mandatory fields and verifies error meassage', function () {
    cy.xpath(this.locator.membership.continue).click({ force: true })
    cy.get(this.locator.membership.errormessageOrg).should('have.length', 2)
    cy.wait(2000)
})
And('User enter Owner Name, Owner Email Address, Owner Job Title and Owner Phone Number', function () {
    cy.xpath(this.locator.membership.Ownername).type(this.data.membership.Name)
    cy.wait(1000)
    cy.xpath(this.locator.membership.OwnerEmail).type(this.data.membership.Email)
    cy.wait(1000)
    cy.xpath(this.locator.membership.Ownerjob).type(this.data.membership.Jobtitle)
    cy.wait(1000)
    cy.xpath(this.locator.membership.Ownernumber).type(this.data.membership.Phonenumber)
})
And('User clicks on the continue button', function () {
    cy.xpath(this.locator.membership.continue).click({ force: true })
    cy.wait(3000)
})
Then('User redirects to Office Address page successfully', function () {
    cy.contains("Office Address").should('be.visible')
    cy.wait(2000)
})
////////////////////////////WELL Office Address validation//////////////////////////////////
Given('User navigate to the Office Address page', function () {
    cy.contains("Office Address").should('be.visible')
    cy.wait(3000)
})
And('User verifies fields on the Office Address page', function () {
    cy.xpath(this.locator.membership.Officecountry).should('be.visible')
    cy.xpath(this.locator.membership.Officestreet).should('be.visible')
    cy.xpath(this.locator.membership.Officecity).should('be.visible')
    cy.xpath(this.locator.membership.Officepostalcode).should('be.visible')
    cy.xpath(this.locator.membership.Officebackbtn).should('be.visible')
    cy.xpath(this.locator.membership.Officecontinuebtn).should('be.visible')
})

And('User clicks on continue button without entering the mandatory fields and verify the error meassage', function () {
    cy.xpath(this.locator.membership.Officecontinuebtn).click({ force: true })
    cy.wait(2000)
    cy.get(this.locator.membership.errormessageOrg).should('have.length', 4)
    cy.wait(2000)
})
And('User select country and state', function () {
    cy.xpath(this.locator.membership.Officecountry).select(this.data.membership.Officecountry)
    cy.wait(2000)
    cy.xpath(this.locator.membership.Officestate).select(this.data.membership.Officestate)
    cy.wait(1000)
})
And('User enter Street, City and Postal code', function () {
    cy.xpath(this.locator.membership.Officestreet).type(this.data.membership.Officestreet)
    cy.wait(1000)
    cy.xpath(this.locator.membership.Officecity).type(this.data.membership.Officecity)
    cy.wait(1000)
    cy.xpath(this.locator.membership.Officepostalcode).type(this.data.membership.Officepostalcode)
    cy.wait(1000)
})
And('User clicks on the Office Address continue button', function () {
    cy.xpath(this.locator.membership.Officecontinuebtn).click({ force: true })
    cy.wait(1000)
})
Then('User redirects to Terms and Conditions page successfully', function () {
    cy.contains("Terms").should('be.visible')
    cy.wait(2000)
})
////////////////////////////////////////////Terms and condition///////////////////////////////////////
Given('User navigate to the Terms and Conditions page', function () {
    cy.contains("Terms").should('be.visible')
    cy.wait(2000)
})
And('User verifies fields on the Terms and Conditions page', function () {
    cy.xpath(this.locator.membership.termscheckbox).should('be.visible')
    cy.xpath(this.locator.membership.termsbackbtn).should('be.visible')
    cy.xpath(this.locator.membership.Procedtopaymentbtn).should('be.visible')
})

And('User clicks on Proceed payment button without entering the mandatory fields and verifies error meassage', function () {
    cy.xpath(this.locator.membership.Procedtopaymentbtn).click({ force: true })
    cy.contains("I accept the terms and conditions is required.").scrollIntoView().should('be.visible')
    cy.wait(1000)
})
And('User check on accept Terms and Conditions', function () {
    cy.xpath(this.locator.membership.termscheckbox).check({ force: true })
    cy.wait(2000)
})
And('User clicks on Proceed payment button', function () {
    cy.xpath(this.locator.membership.Procedtopaymentbtn).should('be.visible').click()
    // cy.wait(2000)
    // cy.get("[data-id='membership-terms-Update']").trigger("dblclick")

    // cy.contains('Proceed to Payment').click({ force: true })
})
Then('User redirects to Review details page successfully', function () {
    cy.contains("Review details").should('be.visible')
    cy.wait(2000)
})

/////////////////////////////////////WELL Promotions validation////////////////////////////////////
And('User clicks on WELL Membership Dashboard from User menu', function () {
    cy.xpath(this.locator.membership.myMembership).click()
    cy.wait(1000)
    cy.url().then(geturl => {
        cy.visit(geturl + "membership/dashboard")
    })
    cy.wait(1000)
})
Then('User redirects to Promotion page successfully', function () {
    cy.wait(1000)
  cy.contains("Tool Kit").should('be.visible')
})
And('User verifies fields on the Promotion page', function () {
    cy.xpath(this.locator.membership.Memberlogo).should('be.visible')
    cy.xpath(this.locator.membership.PromotionToolKit).should('be.visible')
    cy.xpath(this.locator.membership.CornerstoneMembership).should('be.visible')
    cy.xpath(this.locator.membership.Agreementbtn).should('be.visible')
})
And('User verifies Tool kit card name', function () {
    cy.get(this.locator.membership.PromotionCardcount).eq(0).should('contain.text', 'WELL Cornerstone member mark')
    cy.get(this.locator.membership.PromotionCardcount).eq(1).should('contain.text', 'IWBI Brand Guidelines')
    cy.get(this.locator.membership.PromotionCardcount).eq(2).should('contain.text', 'Press Release Template')
    cy.get(this.locator.membership.PromotionCardcount).eq(3).should('contain.text', 'IWBI Member Public Relations Guidelines')
    cy.get(this.locator.membership.PromotionCardcount).eq(4).should('contain.text', 'Social Media Posts')
    cy.get(this.locator.membership.PromotionCardcount).eq(5).should('contain.text', 'Social Media Promotional Assets')
    cy.wait(3000)
})
/////////////////////////////////Verifies Educations fields////////////////////////////////////
And('User clicks on Education tab', function () {
    cy.contains("Education").click()
})
Then('User will be redirected to Education page', function () {
    cy.contains("Keep Learning").should('be.visible')
})
And('User verifies Education fields', function () {
    cy.xpath(this.locator.membership.Memberlogo).should('be.visible')
    cy.xpath(this.locator.membership.CornerstoneMembership).should('be.visible')
    cy.xpath(this.locator.membership.Agreementbtn).should('be.visible')
})
And('User verifies card name', function () {
    cy.get(this.locator.membership.EducationCardcount).eq(0).should('contain.text', 'Become a WELL AP')
    cy.get(this.locator.membership.EducationCardcount).eq(1).should('contain.text', 'On-demand education')
    cy.get(this.locator.membership.EducationCardcount).eq(2).should('contain.text', 'Telling the WELL Story')
    cy.get(this.locator.membership.EducationCardcount).eq(3).scrollIntoView().should('contain.text', 'Ergonomics: Setting yourself up for success')
    cy.get(this.locator.membership.EducationCardcount).eq(4).should('contain.text', 'Connecting wellness strategies to research')
    cy.get(this.locator.membership.EducationCardcount).eq(5).should('contain.text', '2021 IWBI Member Meeting')
    cy.wait(2000)
    cy.contains("Resources to help you thrive").scrollIntoView().should('be.visible')
    cy.get(this.locator.membership.EducationCardcount).eq(6).scrollIntoView().should('contain.text', 'WELL Research Digests')
    cy.get(this.locator.membership.EducationCardcount).eq(7).should('contain.text', 'WELL for Every Industry')
    cy.get(this.locator.membership.EducationCardcount).eq(8).should('contain.text', 'IWBI Special Report')
    cy.get(this.locator.membership.EducationCardcount).eq(9).scrollIntoView().should('contain.text', 'IWBI Global Research Agenda')
    cy.get(this.locator.membership.EducationCardcount).eq(10).should('contain.text', 'WELL Country Briefs')
    cy.get(this.locator.membership.EducationCardcount).eq(11).should('contain.text', 'Crosswalks and Alignments')
    cy.get(this.locator.membership.EducationCardcount).eq(12).should('contain.text', 'The Business Case for Health and Well-being')
    cy.get(this.locator.membership.EducationCardcount).eq(13).should('contain.text', 'ASID Report: Design in the Workplace')
    cy.get(this.locator.membership.EducationCardcount).eq(14).scrollIntoView().should('contain.text', 'A surprising way to cut real estate costs')
})
And('User verifies card count', function () {
    cy.get(this.locator.membership.EducationCardcount).should('have.length', 15)
})
//////////////billing///////////////////////////////////
And('User verifies fields on the Billing page', function () {
    cy.xpath(this.locator.membership.Memberlogo).should('be.visible')
    cy.xpath(this.locator.membership.IwbItext).should('be.visible')
    cy.xpath(this.locator.membership.CornerstoneMembership).should('be.visible')
    cy.xpath(this.locator.membership.Agreementbtn).should('be.visible')
    cy.xpath(this.locator.payNow).should('be.visible')
})
Then('User redirects to Invoice page successfully', function () {
    cy.xpath(this.locator.membership.Invoice).should('contain', 'Invoice')
})
And('User verifies fields on the Invoice page', function () {
    cy.xpath(this.locator.membership.backInvoice).should('be.visible')
    cy.xpath(this.locator.membership.updateInvoice).should('be.visible')
    cy.xpath(this.locator.membership.downloadInvoice).should('be.visible')
})
And('User verifies Payment status in Invoice page', function () {
    cy.xpath(this.locator.membership.Unpaidbtn).should('contain', 'Unpaid')

})
And('User verifies WELL logo on the Invoice page', function () {
    cy.xpath(this.locator.membership.wellLogo).scrollIntoView().should('be.visible')
})
And('User verifies WELL Address for United States on the Invoice page', function () {
    cy.wait(2000)
    cy.get(this.locator.membership.getWellAddress).scrollIntoView().should('contain', "International WELL Building Institute, PBC")
})
And('User verifies Owner Email on the Invoice page', function () {
    cy.wait(2000)
    cy.xpath(this.locator.membership.InvoiceEmail).should('contain', this.data.email)
})
And('User verifies Address on the Invoice page', function () {
    cy.xpath(this.locator.membership.getInvoiceOwnerAddress).should('contain', this.data.membership.Officestreet)
})
And('User verifies country on the Invoice page', function () {
    cy.get(this.locator.membership.getdateOrAdr).should('contain', this.data.membership.Officecountry)
})
And('User verifies Amount on the Invoice page', function () {
    cy.get(this.locator.membership.getPaymentAmount).should('contain', this.data.membership.Amount)
})
And('User verifies date on the Invoice page', function () {
    cy.get(this.locator.membership.getdateOrAdr).eq(0).should('contain', CommonMethod.CurrentDate())
})
And('User verifies fields on the Payment Options', function () {
    cy.xpath(this.locator.cardrbtn).should('be.visible')
    cy.xpath(this.locator.checkrbtn).should('be.visible')
    cy.xpath(this.locator.wireTransferrbtn).should('be.visible')
    cy.xpath(this.locator.cardholdername).should('be.visible')
    cy.xpath(this.locator.discount).should('be.visible')
    cy.xpath(this.locator.applyDiscount).should('be.visible')
    cy.wait(2000)
    cy.get('.__PrivateStripeElement:eq(0) > iframe').then(function ($ele) {
        const iframe = $ele.contents().find('body')
        cy.wait(4000)
        cy.wrap(iframe).should('be.visible')
    })
    cy.get('.__PrivateStripeElement:eq(1) > iframe').then(function ($ele) {
        const iframe = $ele.contents().find('body')
        cy.wrap(iframe).should('be.visible')
    })
    cy.get('.__PrivateStripeElement:eq(2) > iframe').then(function ($ele) {
        const iframe = $ele.contents().find('body')
        cy.wrap(iframe).should('be.visible')
    })

})
And('User update Invoice fields', function () {
    cy.xpath(this.locator.membership.updateInvoice).click()
    cy.wait(2000)
    cy.xpath(this.locator.membership.Officecity).clear().type(this.data.membership.Officestreet)
    cy.wait(1000)
    cy.xpath(this.locator.membership.UpdateInvoicebtn).click()
    cy.wait(2000)
})
And('User verifies the updated field', function () {
    cy.xpath(this.locator.membership.getInvoiceOwnerAddress).scrollIntoView().should('contain', this.data.membership.Officestreet)
    cy.wait(2000)
})
And('User verifies Organisation Name on the Invoice page', function () {
    cy.xpath(this.locator.membership.InvoiceIWBI).should('contain', this.data.membership.ownerOrganization)
})

////////////////////Team////////////////////////////////////////
And('User clicks on Team tab', function () {
    cy.contains("Team").click()
})
And('User verifies fields on the Team page', function () {
    cy.xpath(this.locator.membership.Memberlogo).should('be.visible')
    cy.xpath(this.locator.membership.CornerstoneMembership).should('be.visible')
    cy.xpath(this.locator.membership.Agreementbtn).should('be.visible')
    cy.xpath(this.locator.membership.Teamowner).should('be.visible')
    cy.xpath(this.locator.membership.RegistrationCode).should('be.visible')
    cy.xpath(this.locator.membership.AddMemberbtn).should('be.visible')
    cy.wait(3000)
})
When('User click on Add member button and verifies Add member form fields', function () {
    cy.xpath(this.locator.membership.AddMemberbtn).click({ force: true })
    cy.wait(3000)
    cy.xpath(this.locator.membership.EmailAddress).should('be.visible')
    cy.xpath(this.locator.membership.TeamMember).should('be.visible')
    cy.xpath(this.locator.membership.Invitebtn).should('be.visible')
    cy.wait(3000)
})
And('User clicks on Invite button without entering the mandatory fields for Add member and verifies error message', function () {
    cy.xpath(this.locator.membership.Invitebtn).click({ force: true })
    cy.wait(1000)
    cy.get(this.locator.membership.errormessageOrg).should('have.length', 2)
})
And('User enters data to Email Address and Project Role fields', function () {
    cy.xpath(this.locator.membership.EmailAddress).type(this.data.membership.TeamEmail)
    cy.wait(1000)
    cy.xpath(this.locator.membership.TeamMember).click()
})
And('User clicks on invite button', function () {
    cy.xpath(this.locator.membership.Invitebtn).click({ force: true })
})
Then('User will be redirected to Team page successfully', function () {
    cy.xpath(this.locator.membership.TeamMembertxt).should('contain', "Team Members")
    cy.xpath(this.locator.membership.EditMemberbtn).should('be.visible')
    cy.xpath(this.locator.membership.Deletebtn).should('be.visible')
    cy.wait(2000)
})
And('User verifies Role', function () {
    cy.xpath(this.locator.membership.Role).should('contain', this.data.membership.Role)
})
And('User verifies Email', function () {
    cy.xpath(this.locator.membership.Teamemail).should('contain', this.data.membership.TeamEmail)
})
And('User verifies Status', function () {
    cy.xpath(this.locator.membership.status).should('contain', this.data.membership.status)
    cy.wait(2000)
})
And('User update Project Role', function () {
    cy.xpath(this.locator.membership.EditMemberbtn).click({ force: true })
    cy.wait(1000)
    cy.xpath(this.locator.membership.TeamManager).click()
    cy.wait(1000)
    cy.xpath(this.locator.membership.Updatebtn).click({ force: true })
})
And('User verifies the updated Project Role', function () {
    cy.xpath(this.locator.membership.Role).should('contain', this.data.membership.TeamRole)
})
And('User delete Team Member', function () {
    cy.xpath(this.locator.membership.Deletebtn).click({ force: true })
})
And('User verifies the deleted Team Member', function () {
    cy.xpath(this.locator.membership.Teamemail).should('not.exist')
})
/////////////Profile///////////////////////////////////////////////

Then('User redirects to Profile page successfully', function () {
    cy.xpath(this.locator.membership.Memberlogo).should('be.visible')
    cy.xpath(this.locator.membership.IwbItext).should('be.visible')
    cy.xpath(this.locator.membership.CornerstoneMembership).should('be.visible')
    cy.xpath(this.locator.membership.Agreementbtn).should('be.visible')
    cy.wait(2000)
})
And('User verifies fields on Profile page', function () {
    cy.get(this.locator.membership.OwnerOrgName).should('be.visible')
    cy.get(this.locator.membership.Profiledomain).eq(3).should('be.visible')
    cy.get(this.locator.membership.Profiledomain).eq(4).scrollIntoView().should('be.visible')
    cy.get(this.locator.membership.ProfileQuestions).eq(0).should('be.visible')
    cy.get(this.locator.membership.ProfileQuestions).eq(1).scrollIntoView().should('be.visible')
    cy.get(this.locator.membership.ProfileQuestions).eq(2).should('be.visible')
    cy.get(this.locator.membership.ProfileQuestions).eq(3).scrollIntoView().should('be.visible')
    cy.get(this.locator.membership.ProfileQuestions).eq(4).scrollIntoView().should('be.visible')
    cy.get(this.locator.membership.Profiledomain).eq(5).scrollIntoView().should('be.visible')
    cy.get(this.locator.membership.Profiledomain).eq(6).should('be.visible')
    cy.get(this.locator.membership.Profiledomain).eq(7).should('be.visible')
    cy.get(this.locator.membership.Profiledomain).eq(8).scrollIntoView().should('be.visible')
    cy.get(this.locator.membership.Profiledomain).eq(9).should('be.visible')
    cy.get(this.locator.membership.Profiledomain).eq(10).should('be.visible')
    cy.get(this.locator.membership.Profiledomain).eq(11).should('be.visible')
    cy.get(this.locator.membership.Profiledomain).eq(12).scrollIntoView().should('be.visible')
    cy.get(this.locator.membership.ProfileCountryorstate).eq(0).should('be.visible')
    cy.get(this.locator.membership.ProfileCountryorstate).eq(1).should('be.visible')
    cy.xpath(this.locator.membership.Officestreet).scrollIntoView().should('be.visible')
    cy.xpath(this.locator.membership.Officecity).should('be.visible')
    cy.xpath(this.locator.membership.Officepostalcode).should('be.visible')
    cy.xpath(this.locator.membership.ProfileUpdatebtn).scrollIntoView().should('be.visible')
    cy.wait(3000)

})
And('User enters data to Organization question fields', function () {
    cy.get(this.locator.membership.ProfileQuestions).eq(0).scrollIntoView().click({ force: true }).clear().type(this.data.membership.joinUsContent, { force: true })
    cy.wait(2000)
    cy.get(this.locator.membership.ProfileQuestions).eq(0).scrollIntoView().click({ force: true }).clear().type(this.data.membership.joinUsContent, { force: true })
    cy.wait(2000)
    cy.get(this.locator.membership.ProfileQuestions).eq(1).scrollIntoView().click({ force: true }).clear().type(this.data.membership.joinUsContent, { force: true })
    cy.wait(2000)
    cy.get(this.locator.membership.ProfileQuestions).eq(2).scrollIntoView().click({ force: true }).clear().type(this.data.membership.joinUsContent, { force: true })
    cy.wait(2000)
    cy.get(this.locator.membership.ProfileQuestions).eq(3).scrollIntoView().click({ force: true }).clear().type(this.data.membership.joinUsContent, { force: true })
    cy.wait(3000)
})
And('User click on update button', function () {
    cy.xpath(this.locator.membership.ProfileUpdatebtn).scrollIntoView().click({ force: true })
})
And('User verifies the updated Organization question data', function () {
    cy.get(this.locator.membership.ProfileQuestions).should('contain', this.data.membership.joinUsContent)
})
///////////Keystone Subscription///////////////////////////////////////////
When('User clicks on Keystone Subscription button', function () {
    cy.get(this.locator.membership.subscribeCornerstoneOrKeystone).eq(2).scrollIntoView().should('be.visible').click()

})

