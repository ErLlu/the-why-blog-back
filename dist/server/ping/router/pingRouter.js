import express from "express";
import PingController from "../PingController.js";
const pingRouter = express.Router();
const pingController = new PingController();
pingRouter.get("/", pingController.getPong);
export default pingRouter;
//# sourceMappingURL=pingRouter.js.map
