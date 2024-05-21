import express from "express";
import morgan from "morgan";
import generalError from "./middlewares/generalError.js";
import notFoundError from "./middlewares/notFoundError.js";
import PingController from "./ping/PingController.js";
import pingRouter from "./ping/router/pingRouter.js";

export const app = express();

app.use(morgan("dev"));

app.get("/", pingRouter);

app.use(notFoundError);
app.use(generalError);
