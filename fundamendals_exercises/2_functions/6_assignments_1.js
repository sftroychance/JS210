// what does this code log and why?
let a = 7;

function myValue(b) {
  b += 10;
}

myValue(a);
console.log(a); // 7

// A is declared at top scope: global visibility. It is sent as argument to
// myValue(), which declares a local variable `b` to have the same value as
// the argument. b is incremented by 10, but this does not affect variable
// `a` in outer scope--it does not mutate (and numbers are not mutable anyway)