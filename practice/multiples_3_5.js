// Write a function that computes the sum of all numbers between 1 and some
// other number, inclusive, that are multiples of 3 or 5. For instance, if the
// supplied number is 20, the result should be 98 (3 + 5 + 6 + 9 + 10 + 12 + 15
// + 18 + 20).

// You may assume that the number passed in is an integer greater than 1.

// P: given a number, calculate sum of all numbers from 1 to that number
//    that are multiples of 3 or 5

//  E: below, assume valid argument

//  D: array to filter and reduce

//  A:
//  - write function multisum that takes one param - endValue
//  - create array going from 1 to endValue inclusive - arr
//  - filter array for values that are multiples of 3 or 5
//  - reduce to sum and return value

function multisum(endValue) {
  let arr = Array.from({length: endValue}, (_, idx) => idx + 1);

  return arr
    .filter((val) => val % 3 === 0 || val % 5 === 0)
    .reduce((sum, val) => sum + val, 0);
}

console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168
