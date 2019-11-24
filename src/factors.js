const readlineSync = require("readline-sync");

let input = 0;
let divisor = 1;
let stringFinal = "";
let firstStringSegment = "";
let secondStringSegment = ""

console.log("\n")

do {
  input = Number(readlineSync.question("Positive integer: "));
} while (!Number.isInteger(input) || input > Number.MAX_SAFE_INTEGER || input <= 0)

while (divisor <= Math.sqrt(input)) {
  if (input % divisor === 0) {
    firstStringSegment = divisor;
    secondStringSegment = input / divisor;
    
    ++divisor;

    if (firstStringSegment === secondStringSegment) {
      firstStringSegment = "";
    } else {
      firstStringSegment = firstStringSegment + ", ";
    }

    if (stringFinal != ""){
      stringFinal = stringFinal + ", "
    }
    
    stringFinal = stringFinal + firstStringSegment + secondStringSegment;
  } else {
    ++divisor;
  }
}

console.log("\n" + stringFinal + ".\n")
