const readlineSync = require("readline-sync");

let positiveInteger = 0;
let addend = 0;
let sum = 0;

console.log("\n")

do {
  positiveInteger = Number(readlineSync.question("Positive integer: "));
} while (!Number.isInteger(positiveInteger) || positiveInteger > Number.MAX_SAFE_INTEGER || positiveInteger <= 0)

while (positiveInteger != 0){
  addend = positiveInteger % 10;
  positiveInteger = Math.floor(positiveInteger / 10)
  if (addend % 2 != 0){
    sum = sum + addend
  }
}

sum = sum.toLocaleString("en", { minimumFractionDigits: 0, maximumFractionDigits: 0 });

console.log("\n" + sum + ".");
