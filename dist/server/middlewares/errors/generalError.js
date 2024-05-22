import chalk from "chalk";
const generalError = (error, _req, res, _next) => {
  const statusCode = error.statusCode ?? 500;
  const errorMessage = error.message || "Server failed: Unknown error";
  console.log(chalk.red(`${error.message}`));
  res.status(statusCode).json({ error: `${errorMessage}` });
};
export default generalError;
//# sourceMappingURL=generalError.js.map
