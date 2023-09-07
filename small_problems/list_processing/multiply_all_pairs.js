// Write a function that takes two array arguments, each containing a list of
// numbers, and returns a new array containing the products of all combinations
// of number pairs that exist between the two arrays. The returned array should
// be sorted in ascending numerical order.

// You may assume that neither argument will be an empty array.

// a:
// - reduce to create an array of all combinations
// - map to multiply all combinations

function multiplyAllPairs(arr1, arr2) {
  return getCombinations(arr1, arr2)
    .map(([num1, num2]) => num1 * num2)
    .sort((a, b) => a - b);
}

function getCombinations(arr1, arr2) {
  let result = [];
  for (let val1 of arr1) {
    for (let val2 of arr2) {
      result.push([val1, val2]);
    }
  }

  return result;
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]
