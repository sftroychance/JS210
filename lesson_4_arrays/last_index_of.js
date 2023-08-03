// Write a function lastIndexOf that accepts two arguments: an array and a
// value. The function returns the last index at which the value can be
// found in the array, or -1 if the value is not present.

function lastIndexOf(arr, searchValue) {
  for (let idx = arr.length - 1; idx >= 0; idx -= 1) {
    if (arr[idx] === searchValue) {
      return idx;
    }
  }

  return -1;
}

const myArray = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
console.log(lastIndexOf(myArray, 3));
console.log(lastIndexOf(myArray, 0));
