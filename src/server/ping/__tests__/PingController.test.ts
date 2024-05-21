import { type Request, type Response } from "express";
import PingController from "../PingController";

describe("Given a ping Controller", () => {
  describe("When it receives a response", () => {
    test("Then it should call the response's status method 200 and json method with 'pong' message", () => {
      const expectedMessage = { message: "🏓pong" };
      const expectedStatusCode = 200;
      const pingController = new PingController();
      const req = {};
      const res: Pick<Response, "status" | "json"> = {
        json: jest.fn(),
        status: jest.fn().mockReturnThis(),
      };

      pingController.getPong(req as Request, res as Response);

      expect(res.json).toHaveBeenCalledWith(expectedMessage);
      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });
  });
});
