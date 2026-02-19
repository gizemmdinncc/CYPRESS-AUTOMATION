describe("httpbin tests",() => {
it('TC01 response code should be 200',() => {
cy.request("https://httpbin.org").then((response)=> {
const status = response.status
assert.equal(200, status)

})

})

})


describe("httpbin tests", () => {
const request = {
    method: "POST",
    url: "https://httpbin.org/post",
    failOnStatusCode: false 
}
it("TC02 response code should be 200", () => {
cy.request(request).then((response) => {
    assert.equal(200, response.status)
})

})

})

//negative test scenario//

describe("httpbin tests", () => { 
const request = { 
    method: "GET",
    url: "https://httpbin.org/post",
    failOnStatusCode: false
}
it("TC03-Negative response code should be 405",() => {
    cy.request(request).then((response) => { 
        assert.equal(405, response.status);
    
    })
})
})

//  query parameters//

describe("httpbin tests", () => {
    const request = {
        url: "https://httpbin.org/get",
        qs: {
            "key": "value"
        },
        failOnStatusCode: false
    }
it("TC04 QueryParams response value should be value", () => {
    cy.request(request).then((response) => { 
        assert.equal("value",response.body.args.key)
})
})
})

//HTTPS request response body with JSON//

describe("httpbin tests",() => {
    const bodyData = {
        bodyKey: "bodyValue"
    };
        const request = {
        method: "POST",
        url: "https://httpbin.org/post",
        body: bodyData,
        failOnStatusCode: false
    };
    it("TC05 complex post test", () => {
        cy.request(request).then((response) => {
            assert.equal(200, response.status);
            assert.notStrictEqual(bodyData, response.body.data)

        })
    })
})

// adding headers//

describe("httpbin tests",() => {
    const request = {
        method: "GET",
        url: "https://httpbin.org/get",
        headers: {
            "customHeader": "customValue"
        },
        failOnStatusCode: false
    };
    it("TC06 test that header set correctly", () => {
        cy.request(request).then((response) => {
            assert.equal(200, response.status);
            assert.equal("customValue", response.requestHeaders.customHeader);

        })
    })
})


//User-agent//

describe("httpbin tests", () => {
    const request = {
        method:"GET",
        url: "https://httpbin.org/headers",
        headers: {
                    "user-agent": 'My test user-agent'
        },

    failOnStatusCode: false
};

it("TC07 test that user-agent set correctly", () => { 
    cy.request(request).then((response) => { 
        assert.equal(200, response.status);
        assert.equal("My test user-agent", response.requestHeaders["user-agent"]);
    })
})
})

//Cookies//

describe("httpbin tests", () => {
    const request = {
        method:"GET",
        url: "https://httpbin.org/headers",
        headers: {
                    "Cookie": 'cookieName=cookieValue'
        },
        
    failOnStatusCode: false
};

it("TC08 test send cookie", () => { 
    cy.request(request).then((response) => { 
        assert.equal(200, response.status);
        assert.equal("cookieName=cookieValue", response.requestHeaders["Cookie"]);
    })
})
})

//HTTP request check//

it('TC09 test check response status', () => {
    cy.request(request).then(response => {
      assert.equal(200, response.status);
    })
  })


  //Debugging//

  it('response code should be 200', () => {
    const request = {
      method: 'GET',
      url: '<https://reqres.in/api/users/2>',
    };

    cy.request(request).then(resp => {
      console.log(resp);
      assert.equal("janet.weaver@reqres.in", resp.body.data.email);
    })
  })
