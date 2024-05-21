import request from "supertest";
import { app } from "../app";

describe("Given a GET / endpoint", () => {
  describe("When it receives a request", () => {
    test("Then it should respond with status 200 and a message '🏓pong'", async () => {
      const response = await request(app).get("/").expect(200);

      const body = response.body as { message: string };

      expect(body.message).toBe("🏓pong");
    });
  });
});
