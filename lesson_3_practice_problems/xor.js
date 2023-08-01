// Write a function named isXor that takes two arguments, and returns true
//  if exactly one argument is truthy, false otherwise. Your function
//  should work with the boolean values of true and false, but also any
//  JavaScript values based on their "truthiness".

// P: XOR function takes two arguments, returns true if exactly one value is
// truthy, false otherwise
// E:
// D:
// A: - write function that takes two parameters
//    - cast both values to boolean
//    - return a && !b || b && !a

function isXor(val1, val2) {
  // val1 = !!val1;
  // val2 = !!val2;
  //
  // return (val1 && !val2) || (!val1 && val2);

  // more concise
  return !!val1 !== !!val2;
}

console.log(isXor(false, true));     // true
console.log(isXor(true, false));     // true
console.log(isXor(false, false));    // false
console.log(isXor(true, true));      // false

console.log(isXor(false, 3));        // true
console.log(isXor('a', undefined));  // true
console.log(isXor(null, ''));        // false
console.log(isXor('2', 23));         // false

// other examples:
// batteries in series
// `- ok to connect + to - and - to + but not + to + or - to -
// pipes - can connect outlet of one pipe to inlet of another
//       - can connect inlet of one pipe to outlet of another
//       - can't connect outlet to outlet
//       - can't connect inlet to inlet
// dance partners: lead with follow or follow with lead, not lead/lead or
// follow/follow

