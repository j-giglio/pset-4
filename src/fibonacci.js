const readlineSync = require("readline-sync");

let input = 0;

let firstNumber = 0

let secondNumber = 1

let sum = 0

console.log("\n");

do {

  input = Number(readlineSync.question("Positive Integer: "));
  
} while (!Number.isInteger(input) || input > 78 || input < 1)

for (let counter = 2; counter <= input; counter++) {
  
  sum = firstNumber + secondNumber;
  
  if (firstNumber > secondNumber) {
    
    secondNumber = sum;
  
  } else {
  
    firstNumber = sum;
  
  }

}

sum = sum.toLocaleString("en");

console.log("\n" + sum + ".\n")
