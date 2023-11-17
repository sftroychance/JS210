// Write a function that takes an array argument and returns a new array that
// contains the values from the input array in sorted order. The function should
// sort the array using the merge sort algorithm as described above. You may
// assume that every element of the array will be of the same data type—either
// all numbers or all strings. (recursive)

// Feel free to use the merge function you wrote in the previous exercise.

// P: do recursive merge sort given an array
// assumptions: all elements same date type (numbers or strings)
// E: given
// D: array (slice)
// A:
// declare function mergeSort that takes an array -> arr
// - if arr length is 1, return array
// - if arr length > 1, divide the array into two arrays and
//    call mergeSort on each, call merge with those two arrays
// - return new array
//

function mergeSort(arr) {
  if (arr.length === 1) return arr;

  const halfLength = arr.length / 2;

  const firstHalf = mergeSort(arr.slice(0, halfLength));
  const secondHalf = mergeSort(arr.slice(halfLength));

  return merge(firstHalf, secondHalf);
}

function merge(array1, array2) {
  const arr1 = array1?.slice() ?? [];
  const arr2 = array2?.slice() ?? [];
  const merged = [];

  while (arr1.length > 0 && arr2.length > 0) {
    merged.push(arr1[0] < arr2[0] ? arr1.shift() : arr2.shift());
  }

  return [...merged, ...arr1, ...arr2];
}

console.log(mergeSort([9, 5, 7, 1]));           // [1, 5, 7, 9]
console.log(mergeSort([5, 3]));                 // [3, 5]
console.log(mergeSort([6, 2, 7, 1, 4]));        // [1, 2, 4, 6, 7]

console.log(mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']));
// ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

console.log(mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]));
// [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]
