import request from "supertest";
import { app } from "../../app";
describe("Given a GET/ endpoint", () => {
  describe("When it receives a request", () => {
    test("Then it should respond status 200 and a message '🏓pong'", async () => {
      const expectedStatusCode = 200;
      const expectedMessage = "🏓pong";
      const response = await request(app).get("/").expect(expectedStatusCode);
      const body = response.body;
      expect(body.message).toBe(expectedMessage);
    });
  });
});
//# sourceMappingURL=healthCheck.test.js.map
