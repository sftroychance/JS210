// let add = (a, b) => a + b;
// let getNumber = (text) => {
//   let input = prompt(text);
//   return input;
// };
// 
// let number1 = getNumber("Enter a number: ");
// let number2 = getNumber("Enter another number: ");
// console.log(add(number1, number2));

// function getName(prompt) {
//   let readlineSync = require('readline-sync');
//   let name = readlineSync.question(prompt);
//   return name;
// }
// 
// let firstName = getName('What is your first name? ');
// let lastName = getName('What is your last name? ');
// console.log(`Hello, ${firstName} ${lastName}!`);

let multiply = (firstNumber, secondNumber) => firstNumber * secondNumber;

function getNumber(prompt) {
  let rlSync = require('readline-sync');
  return parseFloat(rlSync.question(prompt));
}
  
let firstNumber = getNumber('Enter the first number: ');
let secondNumber = getNumber('Enter the second number: ');
console.log(`${firstNumber} * ${secondNumber} = ${multiply(firstNumber, secondNumber)}`);

