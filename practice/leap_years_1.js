// In the modern era under the Gregorian Calendar, leap years occur in every
// year that is evenly divisible by 4, unless the year is also divisible by 100.
// If the year is evenly divisible by 100, then it is not a leap year, unless
// the year is also evenly divisible by 400.

// Assume this rule is valid for any year greater than year 0. Write a function
// that takes any year greater than 0 as input and returns true if the year is a
// leap year, or false if it is not a leap year.

// P: given a year, return boolean indicating if it is a leap year
//  - input - a year
//  - output - boolean
//  - rules: leap year per formula: leap year if divis by 4, not leap year if
//    divis by 100, leap year if divis by 400

//  questions: wrong data type or arity? less than 0?

// A:
//  - write function isLeapYear that takes one param - year
//  - return false if year divis by 100 and not divis by 400
//  - return true if year divis by 4
//  - return false

function isLeapYear(year) {
  // for julian calendar before 1752
  if (year % 100 === 0 && year % 400 !== 0 && year >= 1752) return false;

  // for gregorian calendar
  // if (year % 100 === 0 && year % 400 !== 0) return false;

  if (year % 4 === 0) return true;

  return false;
}

console.log(isLeapYear(2016));      // true
console.log(isLeapYear(2015));      // false
console.log(isLeapYear(2100));      // false
console.log(isLeapYear(2400));      // true
console.log(isLeapYear(240000));    // true
console.log(isLeapYear(240001));    // false
console.log(isLeapYear(2000));      // true
console.log(isLeapYear(1900));      // false
console.log(isLeapYear(1752));      // true
console.log(isLeapYear(1700));      // false
console.log(isLeapYear(1));         // false
console.log(isLeapYear(100));       // false
console.log(isLeapYear(400));       // true
