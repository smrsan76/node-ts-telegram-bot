import { MongoClient } from "mongodb";
import chalk from "chalk";

import {
  // Database
  DB_URL,
} from "./consts";

export const dbClient = new MongoClient(DB_URL);

dbClient
  .connect()
  .then(() => console.log(chalk.greenBright("DB Connected Successfully")))
  .catch(console.error);
