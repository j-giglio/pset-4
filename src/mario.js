const readlineSync = require("readline-sync");

let input = 0;
let hashString = "#";

console.log("\n");

do {
  input = Number(readlineSync.question("Height: "));
} while (!Number.isInteger(input) || input > 24 || input < 1)

let spaceNumber = input;

console.log();

for (let hashCounter = 1; hashCounter <= input; hashCounter++) {
  let spaceString = "";
  for (let spaceCounter = 1; spaceCounter != spaceNumber; spaceCounter++) {
    spaceString = spaceString + " ";
  }

  hashString = hashString + "#";
  
  console.log(spaceString + hashString);

  spaceNumber--;
}
console.log();
