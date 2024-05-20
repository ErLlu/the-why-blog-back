import express from "express";
import chalk from "chalk";

const app = express();

const port = process.env.PORT ?? 3453;

app.listen(port, () => {
  console.log(`Listening on ${chalk.magenta(`http://localhost:${port}`)}`);
});
