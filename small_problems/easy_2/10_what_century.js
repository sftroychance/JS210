// Write a function that takes a year as input and returns the century. The
// return value should be a string that begins with the century number, and
// ends with 'st', 'nd', 'rd', or 'th' as appropriate for that number.
//
// New centuries begin in years that end with 01. So, the years 1901 - 2000
// comprise the 20th century.

// A: - declare function that takes an integer parameter - year
//    - get ceiling of year / 100 -> centuryNumber
//    - calculate ordinal
//    - return century with ordinal as string

function ordinalize(number) {
  if (number % 100 >= 10 && number % 100 < 20) {
    return `${number}th`;
  }

  switch (number % 10) {
    case 1: return `${number}st`;
    case 2: return `${number}nd`;
    case 3: return `${number}rd`;
    default: return `${number}th`;
  }
}

function century(year) {
  return ordinalize(Math.ceil(year / 100));
}

console.log(century(2000)); // "20th"
console.log(century(2001)); // "21st"
console.log(century(1965)); // "20th"
console.log(century(256)); // "3rd"
console.log(century(5)); // "1st"
console.log(century(10103)); // "102nd"
console.log(century(1052)); // "11th"
console.log(century(1127)); // "12th"
console.log(century(11201)); // "113th"
