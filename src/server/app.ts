import morgan from "morgan";
import PingController from "./PingController/PingController.js";
import express from "express";

export const app = express();

app.use(morgan("dev"));

const pingController = new PingController();

app.get("/", pingController.getPong);
