// Write a function that takes a year as an argument and returns the number of
// 'Friday the 13ths' in that year. You may assume that the year is greater than
// 1752 (when the modern Gregorian Calendar was adopted by the United Kingdom).
// You may also assume that the same calendar will remain in use for the
// foreseeable future.

// P: given a year, return the number of Friday the 13ths there are in that year
//    - year given > 1752
// E: given
// D: array to filter dates
// A:
//  - declare function that takes one integer parameter -> year
//  - declare dates array and populate
//    - loop 1-12, add date to array for each x-13-year
//  - map array to boolean date.getDay() === 5
//  - filter on boolean
//  - return length of array
// REVISED: created a function expression to apply the filter,
//          used Array.from for building date array

function fridayThe13ths(year) {
  const dates = Array.from({length: 12}, (_, idx) => {
    // return new Date(`${idx + 1}-13-${year}`);
    return new Date(year, idx, 13);
  });

  const isFriday = date => date.getDay() === 5;

  return dates
    .filter(isFriday)
    .length;
}

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2
