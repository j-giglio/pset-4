const readlineSync = require("readline-sync");

let input = 0;
let sum = 0;
let divisor = 0;
let doRepeat = 0;

console.log("\n")

do {
  input = Number(readlineSync.question("Non-negative integer: "));
  if (input >= 0) {
    sum = sum + input;
    ++divisor
  } else {
    doRepeat = 1;
  }
} while (!Number.isInteger(input) || input > Number.MAX_SAFE_INTEGER || doRepeat = 0)

let average = sum / divisor;

average = average.toLocaleString("en", { minimumFractionDigits: 3, maximumFractionDigits: 3 });

console.log("\n" + average + ".")
