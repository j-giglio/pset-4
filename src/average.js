const readlineSync = require("readline-sync");

let input = 0;
let sum = 0;
let divisor = 0;
let doRepeat = 0;

console.log("\n")

do {
  input = Number(readlineSync.question("Non-negative integer: "));
  if (Number.isInteger(input)) {
    if (input < 0 && sum > 0) {
      doRepeat = 1;
    } else if (input >= 0) {
      sum = sum + input;
      ++divisor;
    }
  }
} while (doRepeat == 0)

let average = sum / divisor;

average = average.toLocaleString("en", { minimumFractionDigits: 3, maximumFractionDigits: 3 });

console.log("\n" + average + ".")
