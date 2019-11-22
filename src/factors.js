const readlineSync = require("readline-sync");

let input = 0;
let sum = 0;
let divisor = 2;
let doRepeat = 0;
let stringFinal = "."
let stringSegment = ""

console.log("\n")

do {
  input = Number(readlineSync.question("Positive integer: "));
} while (!Number.isInteger(input) || input > Number.MAX_SAFE_INTEGER || input >= 0)

while (divisor != input) {
  if (input % divisor == 0 || input == 1) {
    stringSegment = divisor
      if (stringFinal != "."){
      stringSegment = stringSegment + ", "
      }
   }
    ++divisor
}

console.log(message)
