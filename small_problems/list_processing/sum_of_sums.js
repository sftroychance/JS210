// Write a function that takes an array of numbers and returns the sum of the
// sums of each leading subsequence in that array. Examine the examples to see
// what we mean. You may assume that the array always contains at least one
// number.

// a:
// - map to replace each value with the sum to that point
//    - only need to access current element and previous element
// - reduce to sum the array
// - one student solution: all within a single reduce invocation

function sumOfSums(arr) {
  return arr
    .reduce((sum, _, idx) => {
      return sum + arr.slice(0, idx + 1).reduce((total, val) => total + val, 0);
    });
  // return arr
  //   .map((_, index) => {
  //     return arr.slice(0, index + 1).reduce((sum, val) => sum + val, 0);
  //   })
  //   .reduce((sum, value) => sum + value, 0);
}

console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35
