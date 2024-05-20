import { type NextFunction, type Request, type Response } from "express";
import chalk from "chalk";
import type ServerError from "./ServerError/ServerError.js";

const generalError = (
  error: ServerError,
  _req: Request,
  res: Response,
  _next: NextFunction,
): void => {
  const statusCode = error.statusCode ?? 500;
  const errorMessage = error.message ?? "server failed: unknown error";

  console.log(chalk.red(`${error.message}`));

  res.status(statusCode).json({ error: `${errorMessage}` });
};

export default generalError;
