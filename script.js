import { prompt } from "./helper.js";

const NUMBER_LIMIT = 100000000000000;

// 🦁 Créer une function `validateNumber`
// 🦁 Elle prendra en paramètre `number`
// 🦁 Si `number` n'est pas un nombre ou est trop grand / trop petit (max: 100000000000000)
// 🦁 Alors afficher "Error : number is not a number or is too big / too small (max: 100000000000000)" et quitter le programme

function validateNumberOrExit(number) {
  if (Number.isNaN(number) || Math.abs(number) > NUMBER_LIMIT) {
    console.log(
      "Error : Your number is not a number or is too big / too small (max: NUMBER_LIMIT)"
    );
    process.exit(1);
  }
}

console.log("ADDITION-MASTER ™️");

console.log(`Choose an operator :
1. Addition
2. Soustraction
3. Multiplication
4. Division`);

let operator = 0;

while (operator === 0) {
  const tempOperator = Number(prompt("Enter the operator : "));

  if (
    tempOperator !== 1 &&
    tempOperator !== 2 &&
    tempOperator !== 3 &&
    tempOperator !== 4
  ) {
    console.log("\nError : operator is not 1, 2, 3 or 4 ! Retry.");
  } else {
    operator = tempOperator;
  }
}

const firstNumber = Number(prompt("Enter the first number : "));

// 🦁 Déplacer la validation du nombre dans la function `validateNumber`
// 🦁 Utiliser la function `validateNumber` pour valider `firstNumber`
validateNumberOrExit(firstNumber);

const secondNumber = Number(prompt("Enter the second number : "));

// 🦁 Déplacer la validation du nombre dans la function `validateNumber`
// 🦁 Utiliser la function `validateNumber` pour valider `secondNumber`
validateNumberOrExit(secondNumber);

if (operator === 4 && secondNumber === 0) {
  console.log("Error : division by 0");
  process.exit(1);
}

switch (operator) {
  case 1:
    console.log("The result of addition is : ", firstNumber + secondNumber);
    break;
  case 2:
    console.log("The result of soustraction is : ", firstNumber - secondNumber);
    break;
  case 3:
    console.log(
      "The result of multiplication is : ",
      firstNumber * secondNumber
    );
    break;
  case 4:
    console.log("The result of division is : ", firstNumber / secondNumber);
    break;
}
