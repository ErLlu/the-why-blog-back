import "dotenv/config";
import chalk from "chalk";
import { app } from "./app.js";

const port = process.env.PORT ?? 3453;

app.listen(port, () => {
  console.log(`Listening on ${chalk.magenta(`http://localhost:${port}`)}`);
});
