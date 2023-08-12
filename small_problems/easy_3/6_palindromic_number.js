// Write a function that returns true if its integer argument is palindromic,
// or false otherwise. A palindromic number reads the same forwards and
// backwards.

function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}

function isPalindromicNumber(number) {
  return isPalindrome(String(number));
}


console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true
console.log(isPalindromicNumber(00100));

// You could not write the function to check values that have leading
// zeroes; the interpretation of the value of the number happens before it
// reaches the function (where the parameter is initialized), and a leading
// 0 indicates an octal value