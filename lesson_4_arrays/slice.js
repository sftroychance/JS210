// Write a function named slice that accepts three arguments: an Array, a
// start index, and an end index. The function should return a new Array
// that contains values from the original Array starting with the value
// at the starting index, and including all values up to but not
// including the end index. Do not modify the original Array.

function push(array, ...newElements) {
  const elements = [...newElements];

  for (let idx = 0; idx < elements.length; idx += 1) {
    array[array.length] = elements[idx];
  }

  return array.length;
}

function slice(arr, startIndex = null, stopIndex = null) {
  const result = [];
  const start = startIndex ?? 0;
  const end = stopIndex ?? arr.length;

  for (let idx = start; idx < end; idx += 1) {
    push(result, arr[idx]);
  }

  return result;
}

const myArray = [1, 2, 3, 4, 5];
console.log(slice(myArray, 1, 4));
console.log(slice(myArray));
console.log(slice(myArray, 1));
console.log(slice(myArray, -1));