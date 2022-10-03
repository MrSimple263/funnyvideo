const supertest = require("supertest");
const mongoose = require('mongoose').default;
const app = require("../testServer");
const request = supertest(app);

describe("Test example", () => {
    // More things come here
    it("GET /abc", async (done) => {
        const response = await request.get('/test')

        expect(response.status).toBe(200)
        expect(response.body.message).toBe('pass!')
        done()
    });
    // More things come here
});
