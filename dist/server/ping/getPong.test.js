import PingController from "./PingController.js";
describe("Given a ping Controller", () => {
  describe("When it receives a response", () => {
    test("Then it should call the response's status method 200 and json method with 'pong' message", () => {
      const expectedMessage = { message: "🏓pong" };
      const expectedStatusCode = 200;
      const pingController = new PingController();
      const req = {};
      const res = {
        json: jest.fn(),
        status: jest.fn().mockReturnThis(),
      };
      pingController.getPong(req, res);
      expect(res.json).toHaveBeenCalledWith(expectedMessage);
      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });
  });
});
//# sourceMappingURL=getPong.test.js.map
