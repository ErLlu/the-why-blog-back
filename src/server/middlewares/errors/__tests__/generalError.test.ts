import { type Request, type Response } from "express";
import generalError from "../generalError";
import type ServerError from "../ServerError/ServerError";

describe("Given the generalError midleware", () => {
  describe("When it receives an error without a message and without statusCode", () => {
    test("Then it should call the Response status method with 500 and its json method with error:'server failed: unknown error'", () => {
      const req = {};
      const res: Pick<Response, "status" | "json"> = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const next = jest.fn();

      const error = new Error();
      const expectedStatusCode = 500;
      const expectedErrorMesssage = "Server failed: Unknown error";

      generalError(error as ServerError, req as Request, res as Response, next);

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
      expect(res.json).toHaveBeenCalledWith({
        error: expectedErrorMesssage,
      });
    });
  });
});
