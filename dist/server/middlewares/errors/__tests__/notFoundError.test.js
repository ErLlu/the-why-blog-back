import request from "supertest";
import { app } from "../../../app.js";
describe("Given a not existing endpoint", () => {
  describe("When it receives a request", () => {
    test("Then it should respond with statusCode 404 and the message: 'Endpoint not found'", async () => {
      const response = await request(app)
        .get("/not-existing-endpoint")
        .expect(404);
      const body = response.body;
      const expectedeMessage = "Endpoint not found";
      expect(body.error).toBe(expectedeMessage);
    });
  });
});
//# sourceMappingURL=notFoundError.test.js.map
