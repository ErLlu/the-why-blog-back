import express from "express";
import morgan from "morgan";
import generalError from "./middlewares/generalError.js";
import notFoundError from "./middlewares/notFoundError.js";

export const app = express();

app.use(morgan("dev"));

app.use(notFoundError);
app.use(generalError);
