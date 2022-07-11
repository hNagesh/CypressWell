
import CommonMethod from '../../../support/CommonMethod'
beforeEach(() => {
    CommonMethod.beforeTest()
})
/////////////Filling WELL Scorecard for WELL Certification Project///////////////
Given('User navigates to the WELL Scorecard page by logging in to wellcertified', function () {
    CommonMethod.loginpage()
    cy.fixture('V2ProjectId').then(function (projectid) {
        this.projectid = projectid
        cy.xpath(this.locator.projectMenu).click()
    cy.wait(1000)
        cy.xpath(this.locator.Wellcertification).click()
        cy.xpath(this.locator.id).click({ force: true })
        cy.wait(2000)
        cy.xpath(this.locator.id).type(this.projectid.ChinaV2Project)
        cy.contains('Apply').click({ force: true })
        cy.wait(3000)
        cy.xpath(this.locator.projectidcompare).invoke('text').then((projectidcompare) => {
            expect(projectidcompare.trim()).to.equal(this.projectid.ChinaV2Project)
        })
        cy.wait(2000)
        cy.xpath(this.locator.projectstatus).invoke('text').then((status) => {
            expect(status).to.equal("Registered")
        })
        cy.contains(this.projectid.ChinaV2Project).click({ force: true })
    })
})
And('User verifies the Start Building button in Dashbaord CTA', function () {
    cy.wait(2000)
    cy.xpath(this.locator.Startbuildingbtn).should('be.visible')
})
When('User clicks on Start Building button in Dashbaord CTA', function () {
    cy.xpath(this.locator.Startbuildingbtn).click({ force: true })
})

/////////////////Air/////////////////////
And('User selects Air concepts', function () {
    cy.wait(2000)
    cy.xpath(this.locator.scorecardair).click()
    cy.wait(2000)
})
And('User selects all the preconditions as YES for Air', function () {

    for (var i = 1; i <= 9; i++) {
        cy.xpath("(//*[@class='focus:outline-none duration-150 ease-in-out transition w-full my-auto flex justify-center py-2 px-2 text-sm font-medium transition duration-150 ease-in-out bg-white text-primary-600 border rounded-l-lg transition-colors duration-300'])[1]").click({ force: true })
        cy.wait(3000)
    }
})
And('User selects maximum optimization points for Air', function () {
    for (var i = 10; i <= 19; i++) {
        cy.xpath("(//*[@class='focus:outline-none duration-150 ease-in-out transition w-full my-auto flex justify-center py-2 px-2 text-sm font-medium transition duration-150 ease-in-out bg-white text-primary-600 border rounded-l-lg transition-colors duration-300'])[1]").click({ force: true })
        cy.wait(3000)
    }
    for (var j = 20; j <= 25; j++) {
        cy.xpath("(//*[@class='focus:outline-none duration-150 ease-in-out transition w-full my-auto flex justify-center py-2 px-2 text-sm font-medium transition duration-150 ease-in-out bg-white text-primary-600 border rounded-r-lg  transition-colors duration-300'])[20]").click({ force: true })
        cy.wait(3000)
    }
})
And('User selects radio button option', function () {
    cy.wait(2000)
    cy.xpath(this.locator.scorecardPartSearch).click({ force: true })
    cy.wait(2000)
    cy.xpath(this.locator.scorecardRadiobtn).click({ force: true })
})
And('User upload document for scorecard part for Air', function () {
    cy.wait(2000)
    cy.contains('Requirements').click({ force: true })
    cy.xpath(this.locator.scorecardDocbtn).click({ force: true })
    cy.xpath(this.locator.scorecardverificationdropdown).select(this.data.verificationmethodPT, { force: true })
    cy.xpath(this.locator.scorecarddocupload).attachFile(this.data.Uploadfile, { force: true })
    cy.xpath(this.locator.scorecarddocuploadsubmit).click({ force: true })
    cy.wait(2000)
})
And('User added comment for scorecard part for Air', function () {
    cy.wait(2000)
    cy.xpath(this.locator.scorecardcomntbtn).click({ force: true })
    cy.wait(2000)
    cy.xpath(this.locator.scorecardcomnttxtbx).click({ force: true }).type(this.data.scorecardcmt)
    cy.xpath(this.locator.scorecardprivatecmnt).check({ force: true })
    cy.xpath(this.locator.scorecardcomntsavebtn).click({ force: true })
    cy.wait(2000)
    cy.reload()
    cy.wait(12000)
})
//////////////water/////////////////////////////////
And('User selects Water concepts', function () {
    cy.contains('WELL Building Standard').should('be.visible')
    cy.xpath(this.locator.scorecardwater).click({ force: true })
    cy.wait(2000)
})
And('User selects all the preconditions as YES for Water', function () {
    for (var i = 1; i <= 5; i++) {
        cy.xpath("(//*[@class='focus:outline-none duration-150 ease-in-out transition w-full my-auto flex justify-center py-2 px-2 text-sm font-medium transition duration-150 ease-in-out bg-white text-primary-600 border rounded-l-lg transition-colors duration-300'])[1]").click({ force: true })
        cy.wait(3000)
    }
})
And('User selects maximum optimization points for Water', function () {
    for (var i = 6; i <= 16; i++) {
        cy.xpath("(//*[@class='focus:outline-none duration-150 ease-in-out transition w-full my-auto flex justify-center py-2 px-2 text-sm font-medium transition duration-150 ease-in-out bg-white text-primary-600 border rounded-l-lg transition-colors duration-300'])[1]").click({ force: true })
        cy.wait(3000)
    }
    for (var j = 17; j <= 17; j++) {
        cy.xpath("(//*[@class='focus:outline-none duration-150 ease-in-out transition w-full my-auto flex justify-center py-2 px-2 text-sm font-medium transition duration-150 ease-in-out bg-white text-primary-600 border rounded-r-lg  transition-colors duration-300'])[17]").click({ force: true })
        cy.wait(3000)
    }
})
And('User upload document for scorecard part for Water', function () {
    cy.wait(2000)
    cy.xpath(this.locator.scorecardPartSearch).click({ force: true })
    cy.contains('Requirements').click({ force: true })
    cy.xpath(this.locator.scorecardDocbtn).click({ force: true })
    cy.xpath(this.locator.scorecardverificationdropdown).select(this.data.verificationmethodPT, { force: true })
    cy.xpath(this.locator.scorecarddocupload).attachFile(this.data.Uploadfile, { force: true })
    cy.xpath(this.locator.scorecarddocuploadsubmit).click({ force: true })
})
And('User added comment for scorecard part for Water', function () {
    cy.wait(2000)
    cy.xpath(this.locator.scorecardcomntbtn).click({ force: true })
    cy.wait(2000)
    cy.xpath(this.locator.scorecardcomnttxtbx).type(this.data.scorecardcmt)
    cy.xpath(this.locator.scorecardprivatecmnt).check({ force: true })
    cy.xpath(this.locator.scorecardcomntsavebtn).click({ force: true })
    cy.wait(2000)
    cy.reload()
    cy.wait(12000)
})
///////////////Nourishment///////////////////////
And('User selects Nourishment concepts', function () {
    cy.contains('WELL Building Standard').should('be.visible')
    cy.xpath(this.locator.scorecardnourishment).click({ force: true })
    cy.wait(2000)
})
And('User selects all the preconditions as YES for Nourishment', function () {
    for (var i = 1; i <= 3; i++) {
        cy.xpath("(//*[@class='focus:outline-none duration-150 ease-in-out transition w-full my-auto flex justify-center py-2 px-2 text-sm font-medium transition duration-150 ease-in-out bg-white text-primary-600 border rounded-l-lg transition-colors duration-300'])[1]").click({ force: true })
        cy.wait(2000)
    }
})
And('User selects maximum optimization points for Nourishment', function () {
    for (var i = 4; i <= 13; i++) {
        cy.xpath("(//*[@class='focus:outline-none duration-150 ease-in-out transition w-full my-auto flex justify-center py-2 px-2 text-sm font-medium transition duration-150 ease-in-out bg-white text-primary-600 border rounded-l-lg transition-colors duration-300'])[1]").click({ force: true })
        cy.wait(2000)
    }
    for (var j = 14; j <= 15; j++) {
        cy.xpath("(//*[@class='focus:outline-none duration-150 ease-in-out transition w-full my-auto flex justify-center py-2 px-2 text-sm font-medium transition duration-150 ease-in-out bg-white text-primary-600 border rounded-r-lg  transition-colors duration-300'])[14]").click({ force: true })
        cy.wait(2000)
    }
    cy.wait(4000)
    cy.reload()
    cy.wait(12000)
})
//////////////////Light//////////////////////////////
And('User selects Light concepts', function () {
    cy.contains('WELL Building Standard').should('be.visible')
    cy.xpath(this.locator.scorecardlight).click({ force: true })
    cy.wait(2000)
})
And('User selects all the preconditions as YES for Light', function () {
    for (var i = 1; i <= 2; i++) {
        cy.xpath("(//*[@class='focus:outline-none duration-150 ease-in-out transition w-full my-auto flex justify-center py-2 px-2 text-sm font-medium transition duration-150 ease-in-out bg-white text-primary-600 border rounded-l-lg transition-colors duration-300'])[1]").click({ force: true })
        cy.wait(2000)
    }
})
And('User selects maximum optimization points for Light', function () {
    for (var i = 3; i <= 8; i++) {
        cy.xpath("(//*[@class='focus:outline-none duration-150 ease-in-out transition w-full my-auto flex justify-center py-2 px-2 text-sm font-medium transition duration-150 ease-in-out bg-white text-primary-600 border rounded-l-lg transition-colors duration-300'])[1]").click({ force: true })
        cy.wait(2000)
    }
    for (var j = 9; j <= 12; j++) {
        cy.xpath("(//*[@class='focus:outline-none duration-150 ease-in-out transition w-full my-auto flex justify-center py-2 px-2 text-sm font-medium transition duration-150 ease-in-out bg-white text-primary-600 border rounded-r-lg  transition-colors duration-300'])[9]").click({ force: true })
        cy.wait(2000)
    }
    cy.wait(4000)
    cy.reload()
    cy.wait(12000)
})
//////////////////Movement///////////////////////////////
And('User selects Movement concepts', function () {
    cy.contains('WELL Building Standard').should('be.visible')
    cy.xpath(this.locator.scorecardmovement).click({ force: true })
    cy.wait(2000)
})
And('User selects all the preconditions as YES for Movement', function () {
    for (var i = 1; i <= 3; i++) {
        cy.xpath("(//*[@class='focus:outline-none duration-150 ease-in-out transition w-full my-auto flex justify-center py-2 px-2 text-sm font-medium transition duration-150 ease-in-out bg-white text-primary-600 border rounded-l-lg transition-colors duration-300'])[1]").click({ force: true })
        cy.wait(2000)
    }
})
And('User selects maximum optimization points for Movement', function () {
    for (var i = 4; i <= 11; i++) {
        cy.xpath("(//*[@class='focus:outline-none duration-150 ease-in-out transition w-full my-auto flex justify-center py-2 px-2 text-sm font-medium transition duration-150 ease-in-out bg-white text-primary-600 border rounded-l-lg transition-colors duration-300'])[1]").click({ force: true })
        cy.wait(2000)
    }
    for (var j = 12; j <= 22; j++) {
        cy.xpath("(//*[@class='focus:outline-none duration-150 ease-in-out transition w-full my-auto flex justify-center py-2 px-2 text-sm font-medium transition duration-150 ease-in-out bg-white text-primary-600 border rounded-r-lg  transition-colors duration-300'])[12]").click({ force: true })
        cy.wait(2000)
    }
    cy.wait(4000)
    cy.reload()
    cy.wait(12000)
})
////////////////////Thermal Comfort///////////////////////////
And('User selects Thermal Comfort concepts', function () {
    cy.contains('WELL Building Standard').should('be.visible')
    cy.xpath(this.locator.scorecardthermalcomfort).click({ force: true })
    cy.wait(2000)
})
And('User selects all the preconditions as YES for Thermal Comfort', function () {
    for (var i = 1; i <= 2; i++) {
        cy.xpath("(//*[@class='focus:outline-none duration-150 ease-in-out transition w-full my-auto flex justify-center py-2 px-2 text-sm font-medium transition duration-150 ease-in-out bg-white text-primary-600 border rounded-l-lg transition-colors duration-300'])[1]").click({ force: true })
        cy.wait(2000)
    }
})
And('User selects maximum optimization points for Thermal Comfort', function () {
    for (var i = 3; i <= 11; i++) {
        cy.xpath("(//*[@class='focus:outline-none duration-150 ease-in-out transition w-full my-auto flex justify-center py-2 px-2 text-sm font-medium transition duration-150 ease-in-out bg-white text-primary-600 border rounded-l-lg transition-colors duration-300'])[1]").click({ force: true })
        cy.wait(2000)
    }
    for (var j = 12; j <= 15; j++) {
        cy.xpath("(//*[@class='focus:outline-none duration-150 ease-in-out transition w-full my-auto flex justify-center py-2 px-2 text-sm font-medium transition duration-150 ease-in-out bg-white text-primary-600 border rounded-r-lg  transition-colors duration-300'])[12]").click({ force: true })
        cy.wait(2000)
    }
    cy.wait(4000)
    cy.reload()
    cy.wait(12000)
})
/////////////////////Sound//////////////////////////////
And('User selects Sound concepts', function () {
    cy.contains('WELL Building Standard').should('be.visible')
    cy.xpath(this.locator.scorecardsound).click({ force: true })
    cy.wait(2000)
})
And('User selects all the preconditions as YES for Sound', function () {
    for (var i = 1; i <= 2; i++) {
        cy.xpath("(//*[@class='focus:outline-none duration-150 ease-in-out transition w-full my-auto flex justify-center py-2 px-2 text-sm font-medium transition duration-150 ease-in-out bg-white text-primary-600 border rounded-l-lg transition-colors duration-300'])[1]").click({ force: true })
        cy.wait(2000)
    }
})
And('User selects maximum optimization points for Sound', function () {
    for (var i = 3; i <= 9; i++) {
        cy.xpath("(//*[@class='focus:outline-none duration-150 ease-in-out transition w-full my-auto flex justify-center py-2 px-2 text-sm font-medium transition duration-150 ease-in-out bg-white text-primary-600 border rounded-l-lg transition-colors duration-300'])[1]").click({ force: true })
        cy.wait(2000)
    }
    for (var j = 10; j <= 14; j++) {
        cy.xpath("(//*[@class='focus:outline-none duration-150 ease-in-out transition w-full my-auto flex justify-center py-2 px-2 text-sm font-medium transition duration-150 ease-in-out bg-white text-primary-600 border rounded-r-lg  transition-colors duration-300'])[10]").click({ force: true })
        cy.wait(2000)
    }
    cy.wait(4000)
    cy.reload()
    cy.wait(12000)
})
//////////////////Materials////////////////////////////
And('User selects Materials concepts', function () {
    cy.contains('WELL Building Standard').should('be.visible')
    cy.xpath(this.locator.scorecardmaterials).click({ force: true })
    cy.wait(2000)
})
And('User selects all the preconditions as YES for Materials', function () {
    for (var i = 1; i <= 8; i++) {
        cy.xpath("(//*[@class='focus:outline-none duration-150 ease-in-out transition w-full my-auto flex justify-center py-2 px-2 text-sm font-medium transition duration-150 ease-in-out bg-white text-primary-600 border rounded-l-lg transition-colors duration-300'])[1]").click({ force: true })
        cy.wait(2000)
    }
})
And('User selects maximum optimization points for Materials', function () {
    for (var i = 9; i <= 18; i++) {
        cy.xpath("(//*[@class='focus:outline-none duration-150 ease-in-out transition w-full my-auto flex justify-center py-2 px-2 text-sm font-medium transition duration-150 ease-in-out bg-white text-primary-600 border rounded-l-lg transition-colors duration-300'])[1]").click({ force: true })
        cy.wait(2000)
    }
    for (var j = 19; j <= 24; j++) {
        cy.xpath("(//*[@class='focus:outline-none duration-150 ease-in-out transition w-full my-auto flex justify-center py-2 px-2 text-sm font-medium transition duration-150 ease-in-out bg-white text-primary-600 border rounded-r-lg  transition-colors duration-300'])[19]").click({ force: true })
        cy.wait(2000)
    }
    cy.wait(4000)
    cy.reload()
    cy.wait(12000)
})
/////////////////////Mind////////////////////////////
And('User selects Mind concepts', function () {
    cy.contains('WELL Building Standard').should('be.visible')
    cy.xpath(this.locator.scorecardmind).click({ force: true })
    cy.wait(2000)
})
And('User selects all the preconditions as YES for Mind', function () {
    for (var i = 1; i <= 3; i++) {
        cy.xpath("(//*[@class='focus:outline-none duration-150 ease-in-out transition w-full my-auto flex justify-center py-2 px-2 text-sm font-medium transition duration-150 ease-in-out bg-white text-primary-600 border rounded-l-lg transition-colors duration-300'])[1]").click({ force: true })
        cy.wait(2000)
    }
})
And('User selects maximum optimization points for Mind', function () {
    for (var i = 4; i <= 14; i++) {
        cy.xpath("(//*[@class='focus:outline-none duration-150 ease-in-out transition w-full my-auto flex justify-center py-2 px-2 text-sm font-medium transition duration-150 ease-in-out bg-white text-primary-600 border rounded-l-lg transition-colors duration-300'])[1]").click({ force: true })
        cy.wait(2000)
    }
    for (var j = 15; j <= 19; j++) {
        cy.xpath("(//*[@class='focus:outline-none duration-150 ease-in-out transition w-full my-auto flex justify-center py-2 px-2 text-sm font-medium transition duration-150 ease-in-out bg-white text-primary-600 border rounded-r-lg  transition-colors duration-300'])[15]").click({ force: true })
        cy.wait(3000)
    }
    cy.wait(4000)
    cy.reload()
    cy.wait(12000)
})
//////////////////////Community///////////////////////////////////////
And('User selects Community concepts', function () {
    cy.contains('WELL Building Standard').should('be.visible')
    cy.xpath(this.locator.scorecardcommunity).click({ force: true })
    cy.wait(2000)
})
And('User selects all the preconditions as YES for Community', function () {
    for (var i = 1; i <= 6; i++) {
        cy.xpath("(//*[@class='focus:outline-none duration-150 ease-in-out transition w-full my-auto flex justify-center py-2 px-2 text-sm font-medium transition duration-150 ease-in-out bg-white text-primary-600 border rounded-l-lg transition-colors duration-300'])[1]").click({ force: true })
        cy.wait(2000)
    }
})
And('User selects maximum optimization points for Community', function () {
    for (var i = 7; i <= 8; i++) {
        cy.xpath("(//*[@class='focus:outline-none duration-150 ease-in-out transition w-full my-auto flex justify-center py-2 px-2 text-sm font-medium transition duration-150 ease-in-out bg-white text-primary-600 border rounded-l-lg transition-colors duration-300'])[1]").click({ force: true })
        cy.wait(2000)
    }
    for (var j = 9; j <= 35; j++) {
        cy.xpath("(//*[@class='focus:outline-none duration-150 ease-in-out transition w-full my-auto flex justify-center py-2 px-2 text-sm font-medium transition duration-150 ease-in-out bg-white text-primary-600 border rounded-r-lg  transition-colors duration-300'])[9]").click({ force: true })
        cy.wait(2000)
    }
    cy.wait(4000)
    cy.reload()
    cy.wait(12000)
})
///////////////////////Innovation/////////////////////////////////////////////
And('User selects Innovation concepts', function () {
    cy.contains('WELL Building Standard').should('be.visible')
    cy.xpath(this.locator.scorecardinnovation).click({ force: true })
    cy.wait(2000)
})
And('User selects maximum optimization points for Innovation', function () {
    for (var i = 1; i <= 10; i++) {
        cy.xpath("(//*[@class='focus:outline-none duration-150 ease-in-out transition w-full my-auto flex justify-center py-2 px-2 text-sm font-medium transition duration-150 ease-in-out bg-white text-primary-600 border rounded-l-lg transition-colors duration-300'])[1]").click({ force: true })
        cy.wait(2000)
    }
    for (var j = 11; j <= 18; j++) {
        cy.xpath("(//*[@class='focus:outline-none duration-150 ease-in-out transition w-full my-auto flex justify-center py-2 px-2 text-sm font-medium transition duration-150 ease-in-out bg-white text-primary-600 border rounded-r-lg  transition-colors duration-300'])[11]").click({ force: true })
        cy.wait(2000)
    }
})
Then('User verifies the targeted points in the WELL scorecard', function () {
    cy.wait(2000)
    cy.xpath(this.locator.targetedPoints).click({ force: true })
})
And('User verifies the warning message in the Scorecard Summary', function () {
    cy.wait(2000)
    cy.contains('You are targeting more than the maximum 110 points allowed per submission. Please review the YES status in your scorecard to adjust your selections to lower the total number of points pursuing.').scrollIntoView().should('be.visible')
})
And('User selects maximum 110 points in the scorecard', function () {
    for (var i = 8; i <= 10; i++) {
        cy.xpath("(//*[@class='focus:outline-none duration-150 ease-in-out transition w-full my-auto flex justify-center py-2 px-2 text-sm font-medium transition duration-150 ease-in-out bg-white text-primary-600 border rounded-r-lg  transition-colors duration-300'])[8]").click({ force: true })
        cy.wait(2000)
    }
})
And('User verifies the warning message should not present in the Scorecard Summary', function () {
    cy.contains('You are targeting more than the maximum 110 points allowed per submission. Please review the YES status in your scorecard to adjust your selections to lower the total number of points pursuing.').should('not.exist')
})




