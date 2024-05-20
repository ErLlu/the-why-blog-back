import "dotenv/config";
import app from "./app.js";
import chalk from "chalk";

const port = process.env.PORT ?? 4004;

app.listen(port, () => {
  console.log(chalk.green(`http://localhost:${port}`));
});
