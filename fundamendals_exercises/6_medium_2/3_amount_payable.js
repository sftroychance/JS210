// What does the following code log? Why is this so?

// let startingBalance = 1;
const chicken = 5;
const chickenQuantity = 7;

function totalPayable(item, quantity) {
  return startingBalance + (item * quantity);
}

// let startingBalance;
// console.log(startingBalance);
let startingBalance = 1; // note it still works even if the variable is
// declared after the function definition.
// as long as the variable is declared before the function call!

// startingBalance = 5;
console.log(totalPayable(chicken, chickenQuantity)); // 40

startingBalance = 10;
console.log(totalPayable(chicken, chickenQuantity)); // 45

// startingBalance is declared in top scope, so it is accessible within
// totalPayable(). It is part of the closure for totalPayable(), so when its
// value is updated before each function call, the variable within the
// function reflects the new value (because the closure points to the
// variable--contains a reference to the variable).