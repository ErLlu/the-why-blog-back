import express from "express";
import morgan from "morgan";
import notFoundError from "./middlewares/errors/notFoundError.js";
import generalError from "./middlewares/errors/generalError.js";
import pingRouter from "./ping/router/pingRouter.js";

export const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.get("/", pingRouter);

app.use(notFoundError);
app.use(generalError);
