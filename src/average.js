const readlineSync = require("readline-sync");

let input = 0;
let sum = 0;
let divisor = 0;
let doRepeat = 0;

console.log("\n")

do {
  input = (readlineSync.question("Non-negative integer: "));
  if (Number.isNaN(input) && Number.isInteger(input)) {
    if (input >= 0) {
      sum = sum + input;
      ++divisor
    } else if (input < 0) {
      doRepeat = 1;
    }
  }
  console.log(doRepeat)
} while (doRepeat == 0)

let average = sum / divisor;

average = average.toLocaleString("en", { minimumFractionDigits: 3, maximumFractionDigits: 3 });

console.log("\n" + average + ".")
