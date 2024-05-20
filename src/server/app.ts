import express from "express";
import morgan from "morgan";

import PingController from "./PingController/PingController.js";
import notFoundError from "./middlewares/errors/notFoundError.js";
import generalError from "./middlewares/errors/generalError.js";

export const app = express();

app.use(morgan("dev"));
app.use(express.json());

const pingController = new PingController();

app.get("/", pingController.getPong);

app.use(notFoundError);
app.use(generalError);
