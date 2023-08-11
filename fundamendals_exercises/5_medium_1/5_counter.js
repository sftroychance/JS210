// What will the following code snippets log?

var counter = 5;
var rate = 3;
console.log('The total value is ' + String(counter * rate));

function counter(count) {
  // ...
}

// The function is hoisted to the top
// then variable declarations; `var counter` is ignored
// then assignments = counter is reassigned from function def to 5
// then logging result: 'The total value is 15'

function counter(count) {
  // ...
}

console.log('The total value is ' + String(counter * rate));

var counter = 5;
var rate = 3;

// function counter already at top
// hoisted var counter is ignored
// in console.log, counter refers to the function; it is not a number, so
// the arith operation * results in NaN
// logged: The total value is NaN

var counter = 5;
var rate = 3;

function counter(count) {
  // ...
}

console.log('The total value is ' + String(counter * rate));

// function is hoisted
// var counter is hoisted
// counter reassigned to 5
// logged: 'The total value is 15

let counter = 5;
let rate = 3;

function counter(count) {
  // ...
}

console.log('The total value is ' + String(counter * rate));

// SyntaxError - hoisting is not an issue here; the Syntax error occurs in
// the creation phase, before the function is hoisted
// 'we can't declare a variable more than once if one or more of those
// declarations use let or const'