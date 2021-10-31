import { bot } from "./consts";

// Commands
import "./cmd/start";

bot.setMyCommands([
  {
    command: "start",
    description: "Start; If you didn't start yet.",
  },
]);
