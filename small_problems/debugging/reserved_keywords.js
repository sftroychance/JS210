// We have been asked to implement a function that determines whether or not a
// given word is a reserved keyword. We wrote the isReserved function below
// along with some test cases, but we aren't seeing the expected result. Why
// not? Fix the code so that it behaves as intended.

// The issue with this code is that `forEach` does not allow an early return--it
// must iterate through every item of the object it is called on, so the return
// statement within is ignored and the function returns false.

// To fix this, we can iterate using `for..of` or simply call `includes()`

// updated code
const RESERVED_KEYWORDS = ['break', 'case', 'catch', 'class', 'const', 'continue',
  'debugger', 'default', 'delete', 'do', 'else', 'enum', 'export', 'extends', 'finally',
  'for', 'function', 'if', 'implements', 'import', 'in', 'instanceof', 'interface',
  'let', 'new', 'package', 'private', 'protected', 'public', 'return', 'static',
  'super', 'switch', 'this', 'throw', 'try', 'typeof', 'var', 'void', 'while',
  'with', 'yield'];

function isReserved(name) {
  // RESERVED_KEYWORDS.forEach(reserved => {
  //   if (name === reserved) {
  //     return true;
  //   }
  // });

  // for(let reserved of RESERVED_KEYWORDS) {
  //   if (name === reserved) return true;
  // }

  // return false;

  return RESERVED_KEYWORDS.includes(name);
}

console.log(isReserved('monkey')); // false
console.log(isReserved('patch'));  // false
console.log(isReserved('switch')); // should be: true
