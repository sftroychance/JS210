// Write a function named pop that accepts one argument: an Array. The
// function should remove the last element from the array and return it.

function pop(arr) {
  if (arr.length === 0) {
    return undefined;
  }

  const removed = arr[arr.length - 1];

  arr.length -= 1;

  return removed;
}

const myArray = [1, 2, 3];
console.log(pop(myArray));
console.log(myArray);

// Array.prototype.pop() removes last element and returns it
// returns undefined if array is empty
