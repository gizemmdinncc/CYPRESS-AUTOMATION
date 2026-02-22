//POSITIVE TESTING//

describe("API TESTING WEATHERSTACK", () => {
    it("TC01 waterstack open", () => { 
        cy.request("https://api.weatherstack.com").then((response) => { 
        })
    })
})



describe("API TESTING WEATHERSTACK", () => {
    it("TC02 Positive API Test-current", () => { 
        cy.request ({
            method: "GET",
            url: "https://api.weatherstack.com/current",
            
            qs: {
                access_key: "d931eee45981a0d191e664d31470137d",
                query: 'London, United Kingdom'
            },
            headers: { 
                connection: "keep-alive",
                accept: "*/*",
                "User-Agent": "PostmanRuntime/7.51.1"
            },

        }) .then((response) => {

            expect(response.status).to.eq(200);
            expect(response.headers["content-type"]).to.include("application/json");
            expect(response.duration).to.be.lessThan(1000);
            expect(response.body.location.name).to.eq("London");
            expect(response.body).to.have.property("current");
            expect(response.body.current.temperature).to.be.a("number");
            expect(response.body.current.humidity).to.be.within(0,100);
        })
        })
            
        })



        describe("API TESTING WEATHERSTACK", () => {
    it("TC03 Positive API Test-forecast", () => { 
        cy.request ({
            method: "GET",
            url: "https://api.weatherstack.com/forecast",
            
            qs: {
                access_key: "d931eee45981a0d191e664d31470137d",
                query: 'İstanbul',
                forecast_days: 3
            },

            headers: { 
                "user-agent": "PostmanRuntime/7.51.1"
            },

           failOnStatusCode: false

        }) .then((response) => {

            expect(response.status).to.eq(429);
            expect(response.headers["content-type"]).to.include("application/json");
            expect(response.duration).to.be.lessThan(429);
            expect(response.body.error.type).to.eq("rate_limit_reached")

        })
        })
            
        })


        /// USING ANOTHER REQUEST RATHER THAN GET AND THE RESPONSE CODE IS STILL 200 //


        describe("API TESTING WEATHERSTACK", () => {
            it("TC04 API accepts unsupported HTTP methods (Potential Validation Issue)-POST current", () => { 
                cy.request({
                    method: "POST",
                    url: ("https://api.weatherstack.com/current"),
                    qs: {
                        access_key: "d931eee45981a0d191e664d31470137d",
                        query: "London"
                        },
                              failOnStatusCode: false


             }).then((response) => {
                 if (response.status === 200) {

        expect(response.body).to.have.property("location")
        expect(response.body).to.have.property("current")
        expect(response.body.location.name).to.eq("London")

      } 
      
      else {

        expect(response.status).to.eq(429)
        expect(response.body.success).to.eq(false)
        expect(response.body.error.type).to.eq("rate_limit_reached")

      }

    })

  })

})







        // NEGATIVE TESTING//

describe("API TESTING WEATHERSTACK", () => {
    it("TC05 Negative API TEST-GET historical", () => {
        cy.request ({ 
        method: "GET",
        url: "https://api.weatherstack.com/historical",
        qs: { 
            access_key: "d931eee45981a0d191e664d31470137d",
            query: "Amsterdam",
            historical_date: "2023-01-01"
        },
        failOnStatusCode: false
    
        }).then((response) => {

      expect(response.status).to.be.oneOf([200,400,429])

      expect(response.body.success).to.eq(false)
      expect(response.body).to.have.property("error")
    })
}) 
})


describe("API TESTING WEATHERSTACK", () => {
    it("TC06 Negative API TEST-GET marine", () => {
        cy.request ({ 
        method: "GET",
        url: "https://api.weatherstack.com/marine",
        qs: { 
            access_key: "d931eee45981a0d191e664d31470137d",
            query: "Amsterdam",
        },
        failOnStatusCode: false
    
        }).then((response) => {

      expect(response.status).to.be.oneOf([400,401,403,429])

      expect(response.body.success).to.eq(false)
      expect(response.body).to.have.property("error")

      if (response.body.error?.type) {expect(response.body.error.type).to.be.oneOf(["function_access_restricted", "rate_limit_reached"])
      }
    })
}) 
})


describe("API TESTING WEATHERSTACK", () => {
    it("TC07 Negative API TEST-GET pastmarine", () => {
        cy.request ({ 
        method: "GET",
        url: "https://api.weatherstack.com/past-marine",
        qs: { 
            access_key: "d931eee45981a0d191e664d31470137d",
            query: "Amsterdam",
            historical_date: "2023-01-01"
        },
        failOnStatusCode: false
    
        }).then((response) => {

      expect(response.status).to.be.oneOf([400,401,403,429])

      expect(response.body.success).to.eq(false)
      expect(response.body).to.have.property("error")

      if (response.body.error?.type) {expect(response.body.error.type).to.be.oneOf(["function_access_restricted", "rate_limit_reached"])
      }
    })
}) 
})


describe("API TESTING WEATHERSTACK", () => {
    it("TC08 Negative API TEST-GET autocomplete", () => {
        cy.request ({ 
        method: "GET",
        url: "https://api.weatherstack.com/autocomplete",
        qs: { 
            access_key: "d931eee45981a0d191e664d31470137d",
            query: "name",
        },
        failOnStatusCode: false
    
        }).then((response) => {

      expect(response.status).to.be.oneOf([400,401,403,429])

      expect(response.body.success).to.eq(false)
      expect(response.body).to.have.property("error")

      if (response.body.error?.type) {expect(response.body.error.type).to.be.oneOf(["function_access_restricted", "rate_limit_reached"])
      }
    })
}) 
})



describe("API TESTING WEATHERSTACK", () => {
  it("TC09 Negative - PATCH forecast not supported on plan", () => {
    cy.request({
      method: "PATCH",
      url: "https://api.weatherstack.com/forecast",
      qs: {
        access_key: "d931eee45981a0d191e664d31470137d",
        query: "London",
        forecast_days: 3
      },
      failOnStatusCode: false
    }).then((response) => {

      expect(response.status).to.be.oneOf([400, 429])
      expect(response.body.success).to.eq(false)

      // Status durumuna göre hata tipini kontrol et
      if(response.status === 400){
        expect(response.body.error.type).to.eq("forecast_days_not_supported_on_plan")
      }

      if(response.status === 429){
        expect(response.body.error.type).to.eq("rate_limit_reached")
      }

      cy.log("Response Body:", JSON.stringify(response.body))

    })

  })
})



describe("API TESTING WEATHERSTACK", () => {
  it("TC10 Negative - POST forecast not supported or rate limit", () => {

    cy.request({
      method: "POST",
      url: "https://api.weatherstack.com/forecast",
      qs: {
        access_key: "d931eee45981a0d191e664d31470137d",
        query: "London",
        forecast_days: 3
      },
      failOnStatusCode: false
    }).then((response) => {

      expect(response.status).to.be.oneOf([400, 429])
      expect(response.body.success).to.eq(false)

      if(response.status === 400){
        expect(response.body.error.type).to.eq("forecast_days_not_supported_on_plan")
      }

      if(response.status === 429){
        expect(response.body.error.type).to.eq("rate_limit_reached")
      }

      cy.log("Response Body:", JSON.stringify(response.body))

    })

  })
})