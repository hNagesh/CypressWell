import CommonMethod from '../../../support/CommonMethod'
beforeEach(() => {
    CommonMethod.beforeTest()
    cy.fixture('Header').then(function (dataHeader) {
        this.dataHeader = dataHeader
    })
    cy.fixture('Organizationid').then(function (Organizationid) {
        this.dataOrganizationid = Organizationid
    })
})
const responseDelete = { response: '' }
const responseOrgId = { response: '' }
   

