const readlineSync = require("readline-sync");

let positiveInteger = 0;
let stringSegment = "";
let stringFinal = "";

console.log("\n")

do {
  positiveInteger = Number(readlineSync.question("Positive integer: "));
} while (!Number.isInteger(positiveInteger) || positiveInteger > Number.MAX_SAFE_INTEGER || positiveInteger <= 0)

while (positiveInteger != 0){
  stringSegment = positiveInteger % 10;
  positiveInteger = Math.floor(positiveInteger / 10)
  if (positiveInteger != 0){
    stringSegment = stringSegment + ", "
  } else {
    stringSegment = stringSegment + "."
  }
  stringFinal = stringFinal + stringSegment;
}

console.log("\n" + stringFinal + "\n");
