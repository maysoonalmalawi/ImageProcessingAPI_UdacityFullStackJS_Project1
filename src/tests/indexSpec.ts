import supertest from "supertest";
import app from "../index";

const request = supertest(app);

describe("Test for endpoint", (): void => {
  it("gets the api endpoint", async () => {
    const response = await request.get("/");
    expect(response.status).toBe(200);
  });
});
