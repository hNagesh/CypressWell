import CommonMethod from '../../../support/CommonMethod'

beforeEach(() => {
    CommonMethod.beforeTest()
    cy.fixture('FacultyHeader').then(function (dataHeader) {
        this.dataHeader = dataHeader
    })
    cy.fixture('FacultyId').then(function (facultyid) {
        this.datafacultyid = facultyid
    })
})
const responseDelete = { response: '' }
const facultyID = { response: '' }
Given('User gets the authenticated user Token and store into json file', function () {
    cy.request({
        method: 'POST',
        url: 'https://test-v2-api.wellcertified.com/api/authenticate',
        body: {
            'email': this.data.email,
            'password': this.data.password
        }
    }).then((response) => {
        var token = response.body.token
        var authtoken = "Bearer " + token
        cy.readFile('cypress/fixtures/FacultyHeader.json').then((obj) => {
            obj.token = authtoken
            cy.writeFile('cypress/fixtures/FacultyHeader.json', obj)
        })
    })
})
When('User gets the Faculty Id and store into json file', function () {
    cy.request({
        method: 'GET',
        url: 'https://test-v2-api.wellcertified.com/api/faculty/get',
        headers: {
            'Authorization': this.dataHeader.token
        }
    }).then((response) => {
        facultyID.response = response
       var responsefaculty = response.body.id
        if (responsefaculty >= 3) {
            cy.readFile('cypress/fixtures/FacultyId.json').then((obj) => {
                obj.FaculId = responsefaculty
                cy.writeFile('cypress/fixtures/FacultyId.json', obj)
            })
        }
    })
})
And('User gets the admin user token and store into json file', function () {
    cy.request({
        method: 'POST',
        url: 'https://test-v2-api.wellcertified.com/api/authenticate',
        body: {
            'email': this.data.adminUsername,
            'password': this.data.adminPassword
        }
    }).then((response) => {
        var token = response.body.token
        var authtoken = "Bearer " + token
        cy.readFile('cypress/fixtures/FacultyHeader.json').then((obj) => {
            obj.adminToken = authtoken
            cy.writeFile('cypress/fixtures/FacultyHeader.json', obj)
        })
    })
})
Then('User delete WELL Faculty', function () {
    cy.wait(3000)
    var FaculId = facultyID.response.body.id
    cy.request({
        method: 'DELETE',
        url: 'https://test-v2-api.wellcertified.com/api/faculty/' + FaculId,
        headers: {
            'Authorization': this.dataHeader.adminToken
        }
    }).then((resdelete) => {
        responseDelete.response = resdelete
    })
})
And('User verifies deleted Faculty by status code 200 in response', function () {
    expect(responseDelete.response.status).to.eq(200)
    expect(responseDelete.response.body.msg).to.eq("success")
})
