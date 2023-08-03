// Revision of 'leap_years_1'
// The British Empire adopted the Gregorian Calendar in 1752, which was a
// leap year. Prior to 1752, they used the Julian Calendar. Under the
// Julian Calendar, leap years occur in any year that is evenly divisible by 4.
//
// Using this information, update the function from the previous exercise
// to determine leap years both before and after 1752.
//
// A: - declare function that takes one integer parameter - year
//    - year < 1752 && year % 4 === 0 -> leap
//    - year % 400 === 0 -> leap
//    - year % 100 === 0 -> not leap
//    - year % 4 === 0 -> leap
//    - else -> not leap

function isLeapYear(year) {
  if (year < 1752 && year % 4 === 0) {
    return true;
  }

  if (year % 400 === 0) {
    return true;
  }

  if (year % 100 === 0) {
    return false;
  }

  return year % 4 === 0;
}

console.log(isLeapYear(2016)); // true
console.log(isLeapYear(2015)); // false
console.log(isLeapYear(2100)); // false
console.log(isLeapYear(2400)); // true
console.log(isLeapYear(240000)); // true
console.log(isLeapYear(240001)); // false
console.log(isLeapYear(2000)); // true
console.log(isLeapYear(1900)); // false
console.log(isLeapYear(1752)); // true
console.log(isLeapYear(1700)); // true
console.log(isLeapYear(1)); // false
console.log(isLeapYear(100)); // true
console.log(isLeapYear(400)); // true
