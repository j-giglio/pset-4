const readlineSync = require("readline-sync");

let number = 0;
let input = "";
let doRepeat = 0;

console.log("\n")

do {
  input = (readlineSync.question("Number: "));
  number = Number(input)
  let length = input.length;
  if (length == 15 && (input.startsWith("34") || input.startsWith("37")){  //this is for amex
    
  }
  else if (length == 16 && (input.startsWith("51") || input.startsWith("52") || input.startsWith("53") || input.startsWith("54") || input.startsWith("55")){  //this is for mastercard

  }
  else if ((length == 16 || length == 13) && input.startsWith("4"){  //this is for visa

  } else {
    doRepeat = 1
  }
} while (doRepeat = 1 ||
