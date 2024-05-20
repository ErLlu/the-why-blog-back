import express from "express";
import morgan from "morgan";
import generalError from "./middlewares/generalError.js";
import notFoundError from "./middlewares/notFoundError.js";
import PingController from "./PingController/PingController.js";

export const app = express();

app.use(morgan("dev"));

const pingController = new PingController();

app.get("/", pingController.getPong);

app.use(notFoundError);
app.use(generalError);
