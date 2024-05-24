import "dotenv/config";
import chalk from "chalk";
import { app } from "./app.js";
import connectToDataBase from "../database/index.js";

const dataBaseUrl = process.env.MONGODB_URL!;
await connectToDataBase(dataBaseUrl);

const port = process.env.PORT ?? 3453;

app.listen(port, () => {
  console.log(`Listening on ${chalk.magenta(`http://localhost:${port}`)}`);
});
