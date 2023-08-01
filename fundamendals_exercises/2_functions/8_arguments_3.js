// what does this code log and why?

let a = [1, 2, 3];

function myValue(b) {
  b[2] += 7;
}

myValue(a);
console.log(a); // [1, 2, 10]

// variable a is declared at top level and sent as an argument to myValue.
// Because it is an array (an object), local variable b in myValue is
// assigned to a reference to the same array defined in a. This reference is
// not mutable, but the elements of the array are, and the 3rd element of
// the array is reassigned to a value of 10. This is reflected in logging
// the value of a.