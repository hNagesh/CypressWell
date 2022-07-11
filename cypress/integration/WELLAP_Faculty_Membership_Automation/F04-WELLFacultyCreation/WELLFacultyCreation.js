import CommonMethod from '../../../support/CommonMethod'
beforeEach(() => {
    CommonMethod.beforeTest()
})
When('User clicks on WELL Faculty from top menu under Training', function () {
    cy.xpath(this.locator.WellFaculty.WellFaculty).click({ force: true })
    cy.wait(2000)
})
And('User navigate to the WELL Faculty page successfully', function () {
    cy.contains("About").should('be.visible')
})
And('User verifies the fields on the WELL Faculty page', function () {
    cy.contains("Eligibility").should('be.visible')
    cy.xpath(this.locator.WellFaculty.Register).should('be.visible')
    cy.xpath(this.locator.WellFaculty.SubmitForReview).should('be.visible')
    cy.xpath(this.locator.WellFaculty.ReviewResults).should('be.visible')
    cy.xpath(this.locator.WellFaculty.PayInvoice).should('be.visible')
})
And('User clicks on continue button', function () {
    cy.xpath(this.locator.WellFaculty.Continuebtn).click({ force: true })
    cy.wait(3000)
})
Then('User will be redirected to the WELL Faculty Application page successfully', function () {
    cy.contains("WELL Faculty Application").should('be.visible')
})
////////////////////////////Validating WELL Faculty Application page/////////////////////////////////////
Given('User is on WELL Faculty Application page', function () {
    cy.contains("Personal Details").should('be.visible')
})
And('User verifies Personal Details fields on the WELL Faculty Application page', function () {
    cy.xpath(this.locator.WellFaculty.Firstname).should('be.visible')
    cy.xpath(this.locator.WellFaculty.Lastname).should('be.visible')
    cy.xpath(this.locator.WellFaculty.Email).should('be.visible')
})
When('User enters data to First name, Last name and Email fields', function () {
    cy.xpath(this.locator.WellFaculty.Firstname).clear().type(this.data.WellFaculty.Firstname)
    cy.xpath(this.locator.WellFaculty.Lastname).clear().type(this.data.WellFaculty.Lastname)
    // cy.xpath(this.locator.WellFaculty.Email).clear().type(this.data.WellFaculty.Email)
    cy.wait(2000)
})
/////////////////////////////////////Address////////////////////////////////////////////////////////
And('User verifies Address fields on the WELL Faculty Application page', function () {
    cy.contains("Address").should('be.visible')
    cy.xpath(this.locator.WellFaculty.Country).should('be.visible')
    cy.xpath(this.locator.WellFaculty.Streetaddress).should('be.visible')
    cy.xpath(this.locator.WellFaculty.City).should('be.visible')
    cy.xpath(this.locator.WellFaculty.PostalCode).should('be.visible')
    cy.wait(2000)
})
And('User clicks on continue button without entering the mandatory fields and verifies error meassage', function () {
    cy.xpath(this.locator.WellFaculty.ContinueButton).click({ force: true })
    cy.contains("Country is required").should('be.visible')
    cy.wait(2000)
})
And('User enters data to Country, State, Street address, City and Postal Code fields', function () {
    cy.xpath(this.locator.WellFaculty.Country).select(this.data.WellFaculty.countryName)
    cy.xpath(this.locator.WellFaculty.State).select(this.data.WellFaculty.stateName)
    cy.xpath(this.locator.WellFaculty.Streetaddress).type(this.data.WellFaculty.streetName)
    cy.xpath(this.locator.WellFaculty.City).type(this.data.WellFaculty.cityName)
    cy.xpath(this.locator.WellFaculty.PostalCode).type(this.data.WellFaculty.postalCode)
    cy.wait(2000)
})
/////////////////////////////////////Job Details////////////////////////////////////////////////////////
And('User verifies Job Details fields on the WELL Faculty Application page', function () {
    cy.contains("Job Details").should('be.visible')
    cy.xpath(this.locator.WellFaculty.Employer).should('be.visible')
    cy.xpath(this.locator.WellFaculty.Position).should('be.visible')
    cy.get(this.locator.WellFaculty.Language).should('be.visible')
})
And('User enters data to Employer, Position and Languages', function () {
    cy.xpath(this.locator.WellFaculty.Employer).type(this.data.WellFaculty.EmployerName)
    cy.xpath(this.locator.WellFaculty.Position).type(this.data.WellFaculty.Position)
    cy.wait(2000)
    cy.get(this.locator.WellFaculty.Language).eq(0).click()
    cy.contains("English").click({ force: true })
    cy.wait(2000)
})
And('User upload cv or resume', function () {
    cy.xpath(this.locator.WellFaculty.UploadResume).attachFile(this.data.WellFaculty.UploadResume, { force: true })
    cy.wait(2000)
})
And('User selects yes or no for Are you a current USGBC Faculty Member', function () {
    cy.get(this.locator.WellFaculty.Radiobtn).eq(1).click({ force: true })
    cy.wait(2000)
})
And('User selects Credentials & Certificates', function () {
    cy.get(this.locator.WellFaculty.Radiobtn).eq(2).click({ force: true })
    cy.wait(2000)
})
And('User selects yes or no for Migrated from USGBC', function () {
    cy.get(this.locator.WellFaculty.Radiobtn).eq(6).click({ force: true })
    cy.wait(2000)
})
And('User selects yes or no for Are you an Advisor', function () {
    cy.get(this.locator.WellFaculty.Radiobtn).eq(9).click({ force: true })
    cy.wait(2000)
})
And('User selects yes or no for Part of a Member organization', function () {
    cy.get(this.locator.WellFaculty.Radiobtn).eq(11).click({ force: true })
    cy.wait(2000)
})
And('User selects yes or no for Are you LEED Faculty', function () {
    cy.get(this.locator.WellFaculty.Radiobtn).eq(13).click({ force: true })
    cy.wait(2000)
})
And('User clicks on the continue button', function () {
    cy.xpath(this.locator.WellFaculty.ContinueButton).click({ force: true })
    cy.wait(2000)
})
Then('User will be redirected to the Presentation and Facilitation Skills page successfully', function () {
    cy.contains("Presentation and Facilitation Skills").scrollIntoView().should('be.visible')
    cy.wait(2000)
})
////////////////////////////Validating Presentation and Facilitation Skills page/////////////////////////
Given('User is on Presentation and Facilitation Skills page', function () {
    cy.contains("Presentation and Facilitation Skills").should('be.visible')
})
And('User verifies fields on the Presentation and Facilitation Skills page', function () {
    cy.xpath(this.locator.WellFaculty.qualifications).should('be.visible')
    cy.xpath(this.locator.WellFaculty.Experience).scrollIntoView().should('be.visible')
    cy.xpath(this.locator.WellFaculty.Willingness).scrollIntoView().should('be.visible')
    cy.xpath(this.locator.WellFaculty.Termsandconditions).should('be.visible')
    cy.xpath(this.locator.WellFaculty.Previouspagebtn).scrollIntoView().should('be.visible')
    cy.xpath(this.locator.WellFaculty.SaveandReviewApplicationbtn).should('be.visible')
})
When('User clicks on Save and Review Application button without entering the mandatory fields and verifies error meassage', function () {
    cy.xpath(this.locator.WellFaculty.SaveandReviewApplicationbtn).scrollIntoView().click({ force: true })
    cy.wait(2000)
    cy.contains("Please confirm the terms and conditions").should('be.visible')
})
And('User enters data to Describe your qualifications and experience', function () {
    cy.xpath(this.locator.WellFaculty.qualifications).scrollIntoView().type(this.data.WellFaculty.Testdata)
    cy.wait(2000)
})
And('User upload file for list of your appearances', function () {
    cy.xpath(this.locator.WellFaculty.appearancesUpload).attachFile(this.data.WellFaculty.UploadResume, { force: true })
    cy.wait(2000)
})
And('User upload at least 2 documents for Letters of recommendation', function () {
    cy.xpath(this.locator.WellFaculty.recommendationUpload).attachFile(this.data.WellFaculty.UploadResume, { force: true })
    cy.wait(3000)
    cy.xpath(this.locator.WellFaculty.Addanotherfilebtn).click({ force: true })
    cy.wait(2000)
    cy.xpath(this.locator.WellFaculty.recommendationUpload).attachFile(this.data.WellFaculty.Uploadfile, { force: true })
    cy.wait(3000)
})
And('User upload file for demonstrate your presentation', function () {
    cy.xpath(this.locator.WellFaculty.presentationUpload).attachFile(this.data.WellFaculty.UploadResume, { force: true })
    cy.wait(3000)
})
And('User enters data to tell us about your experience', function () {
    cy.xpath(this.locator.WellFaculty.Experience).type(this.data.WellFaculty.Testdata)
    cy.wait(2000)
})
And('User enters data to indicate your willingness to travel for WELL events', function () {
    cy.xpath(this.locator.WellFaculty.Willingness).type(this.data.WellFaculty.Testdata)
    cy.wait(2000)
})
And('User checks the terms and conditions checkbox', function () {
    cy.xpath(this.locator.WellFaculty.Termsandconditions).check()
    cy.wait(2000)
})
And('User clicks on the Save and Review Application button', function () {
    cy.xpath(this.locator.WellFaculty.SaveandReviewApplicationbtn).click({ force: true })
    cy.wait(2000)
})
Then('User verifies the application draft saved page', function () {
    cy.contains("Your application draft has been saved!").should('be.visible')
    cy.wait(2000)
    cy.xpath(this.locator.WellFaculty.SubmitApplicationbtn).should('be.visible')
    cy.xpath(this.locator.WellFaculty.Reviewapplicationbtn).should('be.visible')
    cy.wait(2000)
})
And('User clicks on Submit Application button', function () {
    cy.xpath(this.locator.WellFaculty.SubmitApplicationbtn).click({ multiple: true })
})
Then('User will be redirected to the Presentation and Facilitation Skills page successfully', function () {

})
////////////////////////////Validating Review Results///////////////////////////////////////////
Given('User logged in to WELL certified account', function () {
    CommonMethod.adminLogin()
    cy.contains("Dashboard").should('be.visible')
    cy.wait(2000)
})
When('User clicks on the WELL Faculty from top menu under Admin', function () {
    cy.xpath(this.locator.WellFaculty.AdminWELLFaculty).click({ force: true })
    cy.wait(2000)
})
Then('User will be redirected to the Admin Faculty Faculty list page successfully', function () {
    cy.contains("Admin Faculty").should('be.visible')
    cy.wait(3000)
})
And('User verifies fields on the Admin Faculty Faculty list page', function () {
    cy.xpath(this.locator.WellFaculty.Firstname).should('be.visible')
    cy.xpath(this.locator.WellFaculty.Lastname).should('be.visible')
    cy.xpath(this.locator.WellFaculty.Email).should('be.visible')
    cy.xpath(this.locator.WellFaculty.AdminApplicationStatus).should('be.visible')
    cy.xpath(this.locator.WellFaculty.Applybtn).should('be.visible').click({ force: true })
})
And('User verifies Application Status as pending and clicks on View under actions', function () {
    cy.xpath(this.locator.WellFaculty.Email).type(this.data.WellFaculty.Email)
    cy.wait(2000)
    cy.xpath(this.locator.WellFaculty.Applybtn).click({ force: true })
    cy.wait(2000)
    cy.get(this.locator.WellFaculty.Status).should('contain', "pending")
   cy.wait(2000)
    cy.get(this.locator.WellFaculty.Viewbtn).should('be.visible').click()
    cy.wait(3000)
})
And('User verifies Review Application popup', function () {
    cy.contains("Your application has been successfully sent for review").should('be.visible')
    cy.wait(2000)
    cy.xpath(this.locator.WellFaculty.ApplicationStatus).should('contain', "pending")
    cy.wait(2000)
    cy.xpath(this.locator.WellFaculty.ReviewApplicationbtn).should('be.visible')
    cy.xpath(this.locator.WellFaculty.Returnbtn).should('be.visible')
    cy.wait(2000)
})
And('User clicks on Review Application button', function () {
    cy.xpath(this.locator.WellFaculty.ReviewApplicationbtn).click({ force: true })
})
And('User will be redirected to the Personal Details page', function () {
    cy.contains("Personal Details").should('be.visible')
})
And('User verifies fields on the Personal Details page', function () {
    cy.xpath(this.locator.WellFaculty.Firstname).should('be.visible')
    cy.xpath(this.locator.WellFaculty.Lastname).should('be.visible')
    cy.xpath(this.locator.WellFaculty.Email).should('be.visible')
    cy.wait(2000)
    cy.contains("Address").should('be.visible')
    cy.xpath(this.locator.WellFaculty.Country).should('be.visible')
    cy.xpath(this.locator.WellFaculty.Streetaddress).should('be.visible')
    cy.xpath(this.locator.WellFaculty.City).should('be.visible')
    cy.xpath(this.locator.WellFaculty.PostalCode).scrollIntoView().should('be.visible')
    cy.wait(2000)
    cy.contains("Job Details").should('be.visible')
    cy.xpath(this.locator.WellFaculty.Employer).should('be.visible')
    cy.xpath(this.locator.WellFaculty.Position).should('be.visible')
    cy.get(this.locator.WellFaculty.Language).should('be.visible')
    cy.xpath(this.locator.WellFaculty.ContinueButton).scrollIntoView().should('be.visible')
    cy.wait(3000)
})
And('User clicks on Personal Details continue button', function () {
    cy.xpath(this.locator.WellFaculty.ContinueButton).scrollIntoView().click({ force: true })
    cy.wait(3000)
})
And('User will be redirected to Presentation and Facilitation Skills page', function () {
    cy.contains("Presentation and Facilitation Skills").scrollIntoView().should('be.visible')
})
And('User verifies fields on Presentation and Facilitation Skills page', function () {
    cy.xpath(this.locator.WellFaculty.qualifications).should('be.visible')
    cy.xpath(this.locator.WellFaculty.Experience).scrollIntoView().should('be.visible')
    cy.xpath(this.locator.WellFaculty.Willingness).scrollIntoView().should('be.visible')
    cy.xpath(this.locator.WellFaculty.Termsandconditions).should('be.visible')
    cy.xpath(this.locator.WellFaculty.AdminPreviouspagebtn).scrollIntoView().should('be.visible')
    cy.xpath(this.locator.WellFaculty.SaveandReviewApplicationbtn).should('be.visible')
    cy.xpath(this.locator.WellFaculty.ContinueButton).scrollIntoView().should('be.visible')
    cy.wait(2000)
})
And('User checks the terms and conditions checkbox and clicks on continue button', function () {
    cy.xpath(this.locator.WellFaculty.Termsandconditions).check()
    cy.wait(2000)
    cy.xpath(this.locator.WellFaculty.ContinueButton).scrollIntoView().click({ force: true })
    cy.wait(2000)
})
And('User will be redirected to the Review Application page successfully', function () {
    cy.contains("Application Status").scrollIntoView().should('be.visible')
})
And('User verifies fields on the Review Application page', function () {
    cy.xpath(this.locator.WellFaculty.ApplicationApproveddate).should('be.visible')
    cy.xpath(this.locator.WellFaculty.Approvedby).should('be.visible')
    cy.xpath(this.locator.WellFaculty.ReasonDenial).should('be.visible')
    cy.xpath(this.locator.WellFaculty.Region).should('be.visible')
    cy.wait(2000)
    cy.xpath(this.locator.WellFaculty.Source).should('be.visible')
    cy.xpath(this.locator.WellFaculty.TeachingExperienceNotes).should('be.visible')
    cy.xpath(this.locator.WellFaculty.WELLEventsTaught).scrollIntoView().should('be.visible')
    cy.xpath(this.locator.WellFaculty.WillingnesstoTrain).should('be.visible')
    cy.wait(3000)
    cy.xpath(this.locator.WellFaculty.Previouspagebutton).scrollIntoView().should('be.visible')
    cy.xpath(this.locator.WellFaculty.UpdateAndReviewApplicationbtn).scrollIntoView().should('be.visible')
})
And('User selects the Application Status', function () {
    cy.get(this.locator.WellFaculty.AdminReviewApplication).eq(1).click({ force: true })
})
And('User selects the Application Approved Date', function () {
    cy.xpath(this.locator.WellFaculty.ApplicationApproveddate).click({ force: true })
    cy.wait(2000)
    cy.xpath(this.locator.WellFaculty.ApproveddateOKbtn).click({ force: true })
})
And('User enters data to Approved By field', function () {
    cy.xpath(this.locator.WellFaculty.Approvedby).type(this.data.WellFaculty.Testdata)
})
And('User selects the Faculty Expiration date', function () {
    cy.xpath(this.locator.WellFaculty.FacultyExpirationdate).click({ force: true })
    cy.wait(2000)
    cy.xpath(this.locator.WellFaculty.selectMonth).click({ force: true })
    cy.wait(2000)
    cy.xpath(this.locator.WellFaculty.DecMonth).scrollIntoView().click({ force: true })
    cy.wait(2000)
    cy.xpath(this.locator.WellFaculty.ApproveddateOKbtn).click({ force: true })
    cy.wait(2000)
    cy.xpath(this.locator.WellFaculty.ApproveddateOKbtn).click({ force: true })

})
And('User enters data to Reason Denial, Region and Source fields', function () {
    cy.xpath(this.locator.WellFaculty.ReasonDenial).scrollIntoView().type(this.data.WellFaculty.Testdata)
    cy.wait(2000)
    cy.xpath(this.locator.WellFaculty.Region).type(this.data.WellFaculty.Testdata)
    cy.wait(2000)
    cy.xpath(this.locator.WellFaculty.Source).type(this.data.WellFaculty.Testdata)
})
And('User selects Yes, quality option for Teaching Experience', function () {
    cy.get(this.locator.WellFaculty.AdminReviewApplication).eq(4).click({ force: true })
})
And('User enters data to Teaching Experience Notes, WELL Events Taught, Willingness to Train fields', function () {
    cy.xpath(this.locator.WellFaculty.TeachingExperienceNotes).type(this.data.WellFaculty.Testdata)
    cy.wait(3000)
    cy.xpath(this.locator.WellFaculty.WELLEventsTaught).type(this.data.WellFaculty.Testdata)
    cy.wait(3000)
    cy.xpath(this.locator.WellFaculty.WillingnesstoTrain).type(this.data.WellFaculty.Testdata)
    cy.wait(3000)
})
And('User selects Yes or No for Technical, Business Development, Red Flag fields', function () {
    cy.get(this.locator.WellFaculty.AdminReviewApplication).eq(9).click({ force: true })
    cy.wait(2000)
    cy.get(this.locator.WellFaculty.AdminReviewApplication).eq(11).click({ force: true })
    cy.wait(2000)
    cy.get(this.locator.WellFaculty.AdminReviewApplication).eq(13).click({ force: true })
})
And('User checks the Workshops checkbox', function () {
    cy.get(this.locator.WellFaculty.AdminReviewApplication).eq(15).check()
    cy.wait(2000)
})
And('User enters data to Next Step', function () {
    cy.xpath(this.locator.WellFaculty.NextStep).type(this.data.WellFaculty.Testdata)
})
And('User selects Next Step Date', function () {
    cy.xpath(this.locator.WellFaculty.NextStepDate).click({ force: true })
    cy.wait(2000)
    cy.xpath(this.locator.WellFaculty.ApproveddateOKbtn).click({ force: true })
    cy.wait(2000)
})
And('User enters data to Admin Notes, Admin Notes 2, Admin Notes 3 fields', function () {
    cy.xpath(this.locator.WellFaculty.AdminNotes).type(this.data.WellFaculty.Testdata)
    cy.wait(3000)
    cy.xpath(this.locator.WellFaculty.AdminNotes2).type(this.data.WellFaculty.Testdata)
    cy.wait(3000)
    cy.xpath(this.locator.WellFaculty.AdminNotes3).type(this.data.WellFaculty.Testdata)
    cy.wait(3000)
})
And('User upload Scorecard Documents', function () {
    cy.xpath(this.locator.WellFaculty.ScorecardUpload).attachFile(this.data.WellFaculty.Uploadfile, { force: true })
    cy.wait(3000)
})
And('User clicks on Update And Review Application button', function () {
    cy.xpath(this.locator.WellFaculty.UpdateAndReviewApplicationbtn).click({ force: true })
    cy.wait(5000)
})
And('User verifies Congratulations popup', function () {
    cy.contains("Your application has been approved after review")
    cy.wait(3000)
})
And('User clicks on Return button', function () {
    cy.xpath(this.locator.WellFaculty.Returnbutton).click({ force: true })
    cy.wait(3000)
})
And('User verifies Application Status as Approved', function () {
    cy.get(this.locator.WellFaculty.Status).should('contain',"approved")
})
////////////////////////////////////////Validate Invoice/////////////////////////////////////////////////
And('User clicks on Pay Invoice', function () {
    cy.xpath(this.locator.WellFaculty.PayInvoicebtn).click({ force: true })
})
And('User redirects to Invoice page', function () {
    cy.xpath(this.locator.WellFaculty.Invoice).should('contain', 'Invoice')
})
And('User verifies fields on the Invoice page', function () {
    cy.xpath(this.locator.WellFaculty.backInvoice).should('be.visible')
    cy.xpath(this.locator.WellFaculty.updateInvoice).should('be.visible')
    cy.xpath(this.locator.WellFaculty.downloadInvoice).should('be.visible')
})
And('User verifies Payment status in Invoice page', function () {
    cy.xpath(this.locator.WellFaculty.Unpaidbtn).should('contain', 'Unpaid')

})
And('User verifies WELL logo on the Invoice page', function () {
    cy.xpath(this.locator.WellFaculty.wellLogo).scrollIntoView().should('be.visible')
})
And('User verifies WELL Address for United States on the Invoice page', function () {
    cy.wait(2000)
    cy.get(this.locator.WellFaculty.getWellAddress).scrollIntoView().should('contain', "International WELL Building Institute, PBC")
})
And('User verifies Owner Email on the Invoice page', function () {
    cy.get(this.locator.WellFaculty.getdateOremailOrAdr).eq(1).should('contain', this.data.email)
})
And('User verifies Address on the Invoice page', function () {
    cy.xpath(this.locator.WellFaculty.getInvoiceOwnerAddress).should('contain', this.data.streetName)
})
And('User verifies country on the Invoice page', function () {
    cy.get(this.locator.WellFaculty.getdateOremailOrAdr).should('contain', "IN")
})
And('User verifies Amount on the Invoice page', function () {
    cy.get(this.locator.WellFaculty.getPaymentAmount).should('contain', '500')
})
And('User verifies date on the Invoice page', function () {
    cy.get(this.locator.WellFaculty.getdateOremailOrAdr).eq(0).should('contain', CommonMethod.CurrentDate())
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
And('User enters the Card Details', function () {
    cy.xpath(this.locator.cardholdername).type("user")
    cy.wait(4000)
    cy.get('.__PrivateStripeElement:eq(0) > iframe').then(function ($ele) {
        const iframe = $ele.contents().find('body')
        cy.wrap(iframe).click().type(this.data.cardNumber)
    })
    cy.get('.__PrivateStripeElement:eq(1) > iframe').then(function ($ele) {
        const iframe = $ele.contents().find('body')
        cy.wrap(iframe).click().type(this.data.month)
    })
    cy.get('.__PrivateStripeElement:eq(2) > iframe').then(function ($ele) {
        const iframe = $ele.contents().find('body')
        cy.wrap(iframe).click().type(this.data.cvcNumber)
    })
    cy.wait(2000)
})
And('User clicks on pay now button', function () {
    cy.xpath(this.locator.WellFaculty.Paynowbtn).click({ force: true })
    cy.wait(5000)
})
And('User navigate to the Dashboard page successfully', function () {
    cy.contains("Dashboard").should('be.visible')
})

