//POSITIVE TESTING//

describe("API TESTING WEATHERSTACK", () => {
    it("TC01 waterstack open", () => { 
        cy.request("https://api.weatherstack.com").then((response) => { 
        })
    })
})


describe("API TESTING WEATHERSTACK", () => {
    it("TC02 Positive API Test-current", () => { 
        cy.request  ({
            method: "GET",
            url: "https://api.weatherstack.com/current/get",
            
            qs: {
                access_key: "d931eee45981a0d191e664d31470137d",
                query: 'London, United Kingdom'
            },
            headers: { 
                host: "calculated when request is sent",
                connection: "keep-alive",
                accept: "*/*",
                "User-Agent": "PostmanRuntime/7.51.1"
            },
            failOnStatusCode: "false"

        })
            
        })
    })


    describe("API TESTING WEATHERSTACK", () => {
    it("TC03 Positive API Test-forecast", () => { 
        cy.request  ({
            method: "GET",
            url: "https://api.weatherstack.com/forecast/get",
            qs: {
                access_key: "d931eee45981a0d191e664d31470137d",
                query: 'London, United Kingdom'
            }
        })
            
        })
    })


    // USING ANOTHER REQUEST THAN GET AND THE RESPONSE CODE IS STILL 200 //

describe("API TESTING WEATHERSTACK", () => {
    it("TC04 API accepts unsupported HTTP methods (Potential Validation Issue)-POST current", () => { 
        cy.request ({
            method: "POST",
            url: "https://api.weatherstack.com/current/POST",
            qs: {
                access_key: "d931eee45981a0d191e664d31470137d",
                query: 'London, United Kingdom'
            }
        })
            
        })
    })


    describe("API TESTING WEATHERSTACK", () => {
    it("TC05 API accepts unsupported HTTP methods (Potential Validation Issue)-POST forecast", () => { 
        cy.request  ({
            method: "POST",
            url: "https://api.weatherstack.com/current/POST",
            qs: {
                access_key: "d931eee45981a0d191e664d31470137d",
                query: 'London, United Kingdom'
            }
        })
            
        })
    })


describe("API TESTING WEATHERSTACK", () => {
    it("TC06 API accepts unsupported HTTP methods (Potential Validation Issue)-Patch forecast", () => { 
        cy.request  ({
            method: "Patch",
            url: "https://api.weatherstack.com/current/patch",
            qs: {
                access_key: "d931eee45981a0d191e664d31470137d",
                query: 'London, United Kingdom'
            }
        })
            
        })
    })