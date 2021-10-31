import randomStr from "./utils/randomStr";

const len = 4;
const str = randomStr(len);

console.log("String:", str);

for (let i = 0; ; i++) {
  if (randomStr(len) === str) {
    console.log("String found after", i, "tries.");
    break;
  }
}
