// Write a function that takes two sorted arrays as arguments and returns a new
// array that contains all the elements from both input arrays in sorted order.

// You may not provide any solution that requires you to sort the result array.
// You must build the result array one element at a time in the proper order.

// Your solution should not mutate the input arrays.

// P: given two sorted arrays, merge and sort them and return new array
// RULE: do not mutate original array
// E: given (including empty arrays)
// D: array
// A:
//  declare function merge, 2 parameters - arr1 and arr2
//  declare new array (merged)
//  - do while lengths of both arrays > 0
//    - look at first element of both arrays, unshift and append
//      to merged
//  return merged + arr1 + arr2 (this will take care of remaining elements
//    when one array runs out)

function merge(array1, array2) {
  const arr1 = array1.slice();
  const arr2 = array2.slice();
  const merged = [];

  while (arr1.length > 0 && arr2.length > 0) {
    merged.push(arr1[0] < arr2[0] ? arr1.shift() : arr2.shift());
  }

  return [...merged, ...arr1, ...arr2];
}

console.log(merge([1, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]
console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
console.log(merge([1, 4, 5], []));             // [1, 4, 5]

let myArr1 = [7, 8, 9];
let myArr2 = [1, 10, 25];
console.log(merge(myArr1, myArr2));
console.log(myArr1);
console.log(myArr2);
