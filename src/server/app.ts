import express from "express";
import morgan from "morgan";
import { notFoundError, generalError } from "./middlewares/errorsMidlewares.js";

const app = express();

app.use(morgan("dev"));

app.use(notFoundError);
app.use(generalError);

export default app;
