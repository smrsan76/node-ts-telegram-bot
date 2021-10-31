import { bot } from "../consts";

bot.onText(/\/start/, async (msg) => {
  bot.sendMessage(msg.chat.id, `👋 Hey\nI'm Started 👍`);
});
