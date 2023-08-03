// Write a function named shift that accepts one argument: an Array. The
// function should remove the first value from the beginning of the Array
// and return it.

function shift(arr) {
  if (arr.length === 0) {
    return undefined;
  }

  const removed = arr[0];

  for (let idx = 1; idx < arr.length; idx += 1) {
    arr[idx - 1] = arr[idx];
  }

  arr.length -= 1;

  return removed;
}

const myArray = [1, 2, 3, 4, 5];
console.log(shift(myArray));
console.log(myArray);
