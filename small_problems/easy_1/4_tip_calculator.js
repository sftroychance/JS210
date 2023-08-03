// Create a simple tip calculator. The program should prompt for a bill
// amount and a tip rate. The program must compute the tip, and then log
// both the tip and the total amount of the bill to the console. You can
// ignore input validation and assume that the user will put in numbers.

const input = require('readline-sync');

const billAmount = Number(input.question('What is the bill? '));
const tipPercent = Number(input.question('What is the tip percentage? '));

const tipAmount = billAmount * (tipPercent / 100);
const total = billAmount + tipAmount;

console.log(`\nThe tip is $${tipAmount.toFixed(2)}`);
console.log(`The total is $${total.toFixed(2)}`);

// on review: consider `parseFloat` rather than `Number`
