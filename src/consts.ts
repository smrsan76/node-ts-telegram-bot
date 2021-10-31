// import shell from "shelljs";
import Telegram from "node-telegram-bot-api";

// Database
export const DB_HOST = "127.0.0.1";
/*
shell.exec("tail -1 /etc/resolv.conf | cut -d' ' -f2", {
  silent: true,
}); // WSL Host IP
*/
export const DB_PORT = "27017";
export const DB_URL = `mongodb://${DB_HOST}:${DB_PORT}`;
export const DB_NAME = "botName";
export const DB_USERS_COL = "users";

// Telegram
export const BOT_TOKEN = "BOT_TOKEN";
export const BOT_USERNAME = "usernamebot";
export const ADMIN_CHAT_ID = "123456789";
export const bot = new Telegram(BOT_TOKEN, {
  polling: true,
  // webHook: true
});
