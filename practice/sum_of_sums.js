// Write a function that takes an array of numbers and returns the sum of the
// sums of each leading subsequence in that array. Examine the examples to see
// what we mean. You may assume that the array always contains at least one
// number.

// P: given array of numbers, return sum of each leading subsequence
// questions: wrong arity or type? wrong type within array?
// E: given, always will contain at least one number
// D: array: map or reduce
// A:
//  - define function sumOfSums that takes one array param - arr
//  - map with index
//    - array of all values up to and including that index (slice(0, 1 + idx))
//  - map to reduce each subarray
//  - reduce array to get sum
//  - return sum

function sumOfSums(arr) {
  return arr
    .map((_, idx) => arr.slice(0, idx + 1))
    .map(arr => arr.reduce((sum, val) => sum + val, 0))
    .reduce((sum, val) => sum + val, 0);
}

console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35
