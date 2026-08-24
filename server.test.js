const request = require("supertest");
const app = require("./server");

describe("Pharmacy Management API", () => {

  test("GET /api/dashboard should return application details", async () => {

    const response = await request(app)
      .get("/api/dashboard");

    expect(response.statusCode).toBe(200);

    expect(response.body.application)
      .toBe("Pharmacy Management");

    expect(response.body.services).toEqual([
      "Analytics",
      "Government Pricing",
      "Master Data Manager",
      "Revenue Manager"
    ]);

  });

});
