// what does this code log and why?

console.log(a); // undefined

var a = 1;

// Due to hoisting, the `var a` declaration occurs before the value of a is
// logged. The assignment of value 1 to variable a is not hoisted. When a
// var is hoisted, it is given an initial value of undefined, so that is
// what is logged.