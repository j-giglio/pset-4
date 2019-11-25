const readlineSync = require("readline-sync");

let number = 0;
let input = "";
let checksum = 0;
let message = "";
let length;

console.log("\n")

do {
  input = (readlineSync.question("Number: "));
  
  number = Number(input)
  
  length = input.length;
  
} while (!Number.isInteger(number) || number > 9999999999999999 || number < 1)

Math.floor(number *= 10);

while (number > 0) {
    
  let sum = number % 10;
  sum *= 2;
  sum = String(sum)
  sum = Number(sum.charAt(0)) + Number(sum.charAt(1))
  if (number == input * 10) {
    sum = 0
  }
  number = Math.floor(number / 100)
  checksum += sum

}
    
number = Number(input)

while (number > 0) {

  let sum = number % 10;
  number = Math.floor(number / 100);
  checksum += sum
  
}

checksum = String(checksum)

if (checksum.endsWith(0)) {
  if (length == 15 && (input.startsWith("34") || input.startsWith("37"))) {
    
    message = "\nAmex.\n"
  
  } else if (length == 16 && (input.startsWith("51") || input.startsWith("52") || input.startsWith("53") || input.startsWith("54") || input.startsWith("55"))) {
 
    message = "\nMastercard.\n"
             
  } else if ((length == 16 || length == 13) && input.startsWith("4")) {
    
    message = "\nVisa.\n"
  
  } else {
    
    message = "\nInvalid.\n"
    
  }
    
} else {
  
  message = "\nInvalid.\n"
  
}

console.log(message)
