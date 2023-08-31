import { prompt } from "./helper.js";

const NUMBER_LIMIT = 100000000000000;

function validateNumberOrExit(number) {
  if (Number.isNaN(number) || Math.abs(number) > NUMBER_LIMIT) {
    console.log(
      "Error : Your number is not a number or is too big / too small (max: NUMBER_LIMIT)"
    );
    process.exit(1);
  }
}
// validateNumberOrExit sera appelée dans promptNumber

function promptNumber(message) {
  const number = Number(prompt(message));
  validateNumberOrExit(number);
  return number;
}
// promptNumber sera appelée pour l'opérator, le firstNumber, le secondNumber

function calculateResult(operator, firstNumber, secondNumber) {
  if (operator === 1) {
    console.log("Addition");
    return firstNumber + secondNumber;
  }
  if (operator === 2) {
    console.log("Soustraction");
    return firstNumber - secondNumber;
  }
  if (operator === 3) {
    console.log("Multiplication");
    return firstNumber * secondNumber;
  }
  if (operator === 4) {
    if (secondNumber === 0) {
      console.log("Error : division by 0");
      process.exit(1);
    }
    console.log("Division");
    return firstNumber / secondNumber;
  }
}

function promptOperator() {
  const operator = promptNumber("Enter the operator : ");

  if (operator !== 1 && operator !== 2 && operator !== 3 && operator !== 4) {
    console.log("\nError : operator is not 1, 2, 3 or 4 ! Retry.");
    return promptOperator();
  }
  return operator;
}

console.log("ADDITION-MASTER ™️");
console.log(`Choose an operator :
1. Addition
2. Soustraction
3. Multiplication
4. Division`);

const operator = promptOperator();
const firstNumber = promptNumber("Enter the first number : ");
const secondNumber = promptNumber("Enter the second number : ");
const result = calculateResult(operator, firstNumber, secondNumber);
console.log("The result : ", result);
