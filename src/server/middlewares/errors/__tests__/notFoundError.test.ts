import request from "supertest";
import { app } from "../../../app.js";

describe("Given the notFoundError midleware", () => {
  describe("When it receives a request GET /not-existing-endpoint", () => {
    test("then it should respond with statusCode 404 and the message: 'Endpoint not found'", async () => {
      const response = await request(app)
        .get("/not-existing-endpoint")
        .expect(404);

      const body = response.body as { error: string };

      const expectedeMessage = "Endpoint not found";

      expect(body.error).toBe(expectedeMessage);
    });
  });
});
