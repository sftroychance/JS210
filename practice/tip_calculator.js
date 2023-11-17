// Create a simple tip calculator. The program should prompt for a bill amount
// and a tip rate. The program must compute the tip, and then log both the tip
// and the total amount of the bill to the console. You can ignore input
// validation and assume that the user will enter numbers.

let rlSync = require('readline-sync');

let message = 'What is the bill amount? ';
let bill = Number(rlSync.question(message));

message = 'What is the tip percentage? ';
let tipPercent = Number(rlSync.question(message));

let tip = tipPercent / 100 * bill;
let total = bill + tip;

console.log(`The tip is $${tip.toFixed(2)}`);
console.log(`The total bill is $${total.toFixed(2)}`);


