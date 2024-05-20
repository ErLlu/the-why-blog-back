import "dotenv/config";
import chalk from "chalk";
import { app } from "./app.js";

const port = process.env.PORT ?? 8000;

app.listen(8000, () => {
  console.log(chalk.blue(`Listening on ${"http://localhost:" + port}`));
});
