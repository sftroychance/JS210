// Write a function indexOf that accepts two arguments: an array and a
// value. The function returns the first index at which the value can be
// found, or -1 if the value is not present.

function indexOf(arr, searchValue) {
  for (let idx = 0; idx < arr.length; idx += 1) {
    if (arr[idx] === searchValue) {
      return idx;
    }
  }

  return -1;
}

const myArray = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
console.log(indexOf(myArray, 3));
console.log(indexOf(myArray, 0));
