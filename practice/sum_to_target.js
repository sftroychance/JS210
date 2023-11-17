// Create a function that returns all pairs of numbers in an array that sum to a
// target. Sort the pairs in ascending order with respect to the smaller number,
// then order each pair in this order: [smaller, larger].

// If no pairs are found, return an empty array [].
// You are only allowed to use each number once in a pair.

// P: return pairs of numbers in array that sum to a given target
//    - each number can be used only once in a pair
//    - return [] if no pairs found
// E: given
// D: array
// A:
//  - declare function allPairs that takes 2 params -> numbers, target
//  - initialize array pairs = []
//  - copy numbers into new array (to prevent mutation) -> nums
//  - iterate over nums (with index) - current, idx
//    - next if current === null
//    - get index of value target - current => diff
//    - if index is not -1 and not === idx, append [current, diff] to pairs
//    - set nums[idx] and nums[index] to null (to keep from repeating)
//  - sort pairs subarrays
//  - sort pairs
//  - return pairs

function allPairs(numbers, target) {
  const nums = numbers
    .slice()
    .sort((a, b) => a - b); // sorting here will handle all sorting of output

  const pairs = [];

  for (let idx = 0; idx < nums.length; idx += 1) {
    const current = nums[idx];
    if (current === null) continue;

    const diff = target - current;
    const idxDiff = nums.indexOf(diff, idx + 1);
    if (idxDiff !== -1) {
      pairs.push([current, diff]);
      nums[idxDiff] = null;
    }
  }

  return pairs
    // .map(subarr => subarr.sort((a, b) => a - b))
    // .sort((a, b) => a[0] - b[0]);
}

console.log(allPairs([2, 4, 5, 3], 7)); // ➞ [[2, 5], [3, 4]] // 2 + 5 = 7, 3 + 4 = 7
console.log(allPairs([5, 3, 9, 2, 1], 3)); //  ➞ [[1, 2]]
console.log(allPairs([4, 5, 1, 3, 6, 8], 9)); // ➞ [[1, 8], [3, 6], [4, 5]] // Sorted: 1 < 3 < 4; each pair is ordered [smaller, larger]

console.log(allPairs([5, 3, 9, 2, 1], 0)); //  ➞ []
console.log(allPairs([], 3)); //  ➞ []
