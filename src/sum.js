const readlineSync = require("readline-sync");

let lowerBound = 0;
let upperBound = 0;

console.log("\n")
do {
  lowerBound = Number(readlineSync.question("Lower bound: "));
  upperBound = Number(readlineSync.question("Upper bound: "));
} while ((lowerBound > upperBound) || !(Number.isInteger(lowerBound)) || !(Number.isInteger(upperBound)) || (lowerBound > Number.MAX_SAFE_INTEGER) || (upperBound > Number.MAX_SAFE_INTEGER) || (lowerBound < Number.MIN_SAFE_INTEGER) || (upperBound < Number.MIN_SAFE_INTEGER))

if (lowerBound % 2 != 0) {
  ++lowerBound
}
let sum = 0
for (let i = sum; lowerBound <= upperBound; lowerBound = lowerBound + 2){
  i = i + lowerBound;
  sum = i
}
sum = sum.toLocaleString("en", { minimumFractionDigits: 0, maximumFractionDigits: 0 });
console.log(("\n" + sum + "."))
