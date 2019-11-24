const readlineSync = require("readline-sync");

let input = 0;
let sum = 0;
let divisor = 2;
let doRepeat = 0;
let message = "\nPrime."

console.log("\n")

do {
  input = Number(readlineSync.question("Non-negative integer: "));
} while (!Number.isInteger(input) || input > Number.MAX_SAFE_INTEGER || input < 0)

while (divisor != input && doRepeat == 0) {
  if (input % divisor == 0 || input == 1) {
    doRepeat = 1
    message = "\nNot prime."
  } else {
    ++divisor
  }
}

console.log(message+ "\n")
