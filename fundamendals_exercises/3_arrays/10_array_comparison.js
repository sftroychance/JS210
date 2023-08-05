// The array comparison function that we implemented in the Arrays lesson
// implicitly assumed that when comparing two arrays, any matching values must
// also have matching index positions. The objective of this exercise is to
// reimplement the function so that two arrays containing the same values—but
// in a different order—are considered equal.
// For example, [1, 2, 3] === [3, 2, 1] should return true.

function areArraysEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  const customSort = ((array) => {
    return array.slice()
      .sort((a, b) => (typeof a).localeCompare(typeof b))
      .sort();
  });

  const firstArray = customSort(array1);
  const secondArray = customSort(array2);

  for (let idx = 0; idx < firstArray.length; idx += 1) {
    if (firstArray[idx] !== secondArray[idx]) {
      return false;
    }
  }

  return true;
}

console.log(areArraysEqual([1, 2, 3], [1, 2, 3]));                  // true
console.log(areArraysEqual([1, 2, 3], [3, 2, 1]));                  // true
console.log(areArraysEqual(['a', 'b', 'c'], ['b', 'c', 'a']));      // true
console.log(areArraysEqual(['1', 2, 3], [1, 2, 3]));                // false
console.log(areArraysEqual([1, 1, 2, 3], [3, 1, 2, 1]));            // true
console.log(areArraysEqual([1, 2, 3, 4], [1, 1, 2, 3]));            // false
console.log(areArraysEqual([1, 1, 2, 2], [4, 2, 3, 1]));            // false
console.log(areArraysEqual([1, 1, 2], [1, 2, 2]));                  // false
console.log(areArraysEqual([1, 1, 1], [1, 1]));                     // false
console.log(areArraysEqual([1, 1], [1, 1]));                        // true
console.log(areArraysEqual([1, '1'], ['1', 1]));                    // true