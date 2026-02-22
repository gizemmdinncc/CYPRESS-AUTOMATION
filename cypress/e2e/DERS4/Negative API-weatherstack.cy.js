//NEGATIVE TESTING//


describe("API TESTING WEATHERSTACK", () => {
    it("TC01 Negative API TEST-GET historical", () => {
        cy.request ({ 
        method: "GET",
        url: "https://api.weatherstack.com/historical/get",
        qs: ({ 
            access_key: "d931eee45981a0d191e664d31470137d",
            query: "Amsterdam"
        })

    })

}) 
})

describe( "API TESTING WEATHERSTACK", () => { 
    it("TC02 Negative API TEST- GET marine", () => { 
        cy.request  ({ 
            method: "GET",
            url: "https://api.weatherstack.com/marine/get",
            qs: { 
                access_key: "d931eee45981a0d191e664d31470137d",
                query: "London, United Kingdom"
            }
        })
    })
})

describe( "API TESTING WEATHERSTACK", () => { 
    it("TC03 Negative API TEST- GET past-marine", () => { 
        cy.request  ({ 
            method: "GET",
            url: "https://api.weatherstack.com/marine/get",
            qs: { 
                access_key: "d931eee45981a0d191e664d31470137d",
                query: "London, United Kingdom"
            }

        })
    })
})

describe("API TESTING WEATHERSTACK", () => { 
    it("TC04 Negative API Test- GET autocomplete", () => { 
        cy.request ({ 
            method: "GET",
            url: "https://api.weatherstack.com/autocomplete/get",
            qs: { 
                access_key: "d931eee45981a0d191e664d31470137d",
                query: "London"
            }
        })
    })
})



