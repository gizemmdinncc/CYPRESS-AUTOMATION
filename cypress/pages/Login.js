 class Login{
it("TC01 EPOSTA-PASSWORD",function(){
cy.visit("https://www.edu.goit.global/account/login")

cy.get('#user_email').type("user888@gmail.com")
cy.get('#user_password').type("1234567890 ")
cy.get('.eckniwg2').click()
cy.wait(60000)



})
 }

 it("TC02 EPOSTA-PASSWORD",function(){
    cy.visit("https://www.edu.goit.global/account/login")
    
    cy.get('#user_email').type("testowyqa@qa.team")
    cy.get('#user_password').type("QA!automation-1")
    cy.get('.eckniwg2').click()
    cy.wait(60000)
    
