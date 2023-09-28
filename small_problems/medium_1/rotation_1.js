// Write a function that rotates an array by moving the first element to the end
// of the array. Do not modify the original array.

// If the input is not an array, return undefined.
// If the input is an empty array, return an empty array.

// P:
//  input: an array (validation is required)
//  output: an array with rotated element
//    - or undefined if argument is not an array
//    - or empty array if argument is empty array
//  rules: rotate: move the first element to the end of the array
//      - do not mutate the original array

// E: examples and edge cases below

// D: array (slice, spread)

// A:
// - declare function rotateArray that takes a parameter - inputArray
// - return undefined if inputArray is not an array
// - return empty array if inputArray is empty array
// - return an array that contains:
//   - inputArray.slice(1)
//   - inputArray.slice(0, 1)

function rotateArray(inputArray) {
  if (!Array.isArray(inputArray)) return undefined;
  if (inputArray.length === 0) return [];

  return [...inputArray.slice(1), ...inputArray.slice(0, 1)];
}

console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
console.log(rotateArray(['a']));                    // ["a"]
console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([]));                       // []

// return `undefined` if the argument is not an array
console.log(rotateArray());                         // undefined
console.log(rotateArray(1));                        // undefined


// the input array is not mutated
const array = [1, 2, 3, 4];
console.log(rotateArray(array));                    // [2, 3, 4, 1]
console.log(array);                                 // [1, 2, 3, 4]
