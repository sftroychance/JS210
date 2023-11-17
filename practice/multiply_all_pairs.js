// Write a function that takes two array arguments, each containing a list of
// numbers, and returns a new array containing the products of all combinations
// of number pairs that exist between the two arrays. The returned array should
// be sorted in ascending numerical order.

// You may assume that neither argument will be an empty array.

// P: function that takes two array args of numbers, return array of products
//    of all possible pairs between two arrays
//  questions: neither will be empty(given), wrong arity?, non-numeric value
//    in array?
// E: given
// D: arrays
// A: define function multiplyAllPairs that takes two arrays - arr1, arr2
//  - flat map first array to combine with all elements of second array
//    (map within map)
//  - get products of all combinations
//  - sort products
//  - return sorted array

function multiplyAllPairs(arr1, arr2) {
  return arr1
    .flatMap(val => arr2.map(val2 => val * val2))
    .sort((a, b) => a - b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));
// [2, 4, 4, 6, 8, 8, 12, 16])
