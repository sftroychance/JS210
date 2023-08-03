// Write a function named splice that accepts three arguments: an Array, a
// start index, and the number of values to remove. The function should
// remove values from the original Array, starting with the start index and
// removing the specified number of values. The function should return the
// removed values in a new Array.

function push(array, ...newElements) {
  const elements = [...newElements];

  for (let idx = 0; idx < elements.length; idx += 1) {
    array[array.length] = elements[idx];
  }

  return array.length;
}

function splice(arr, startIndex, removeCount) {
  const removed = []

  for (let i = startIndex; i < startIndex + removeCount; i += 1) {
    push(removed, arr[i]);
  }

  // shift remaining elements
  for (let i = startIndex; i < arr.length - removeCount; i += 1) {
    arr[i] = arr[i + removeCount];
  }

  arr.length -= removeCount;

  return removed;
}
const myArray = [1, 2, 3, 4, 5];
console.log(splice(myArray, 1, 2));
console.log(myArray);
