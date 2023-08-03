// In this exercise, you will implement your own versions of the
// Array.prototype.shift and Array.prototype.unshift methods. These methods
// manipulate the contents of an array starting from the first index.
//
// The shift method removes the first element from an array and returns
// that element; if the array is empty, shift returns undefined. The
// unshift method adds one or more elements to the start of an array and
// returns the new length of the array. Both methods mutate the original array.

function shift(arr) {
  if (arr.length === 0) {
    return undefined;
  }

  const removed = arr[0];

  for (let i = 0; i < arr.length - 1; i += 1) {
    arr[i] = arr[i + 1];
  }

  arr.length -= 1;

  return removed;
}

function unshift(arr, ...elements) {
  const count = elements.length;

  for (let i = arr.length - 1 + count; i > 0; i -= 1) {
    arr[i] = arr[i - count];
  }

  for (let i = 0; i < elements.length; i += 1) {
    arr[i] = elements[i];
  }

  return arr.length;
}

shift([1, 2, 3]);                // 1
shift([]);                       // undefined
shift([[1, 2, 3], 4, 5]);        // [1, 2, 3]

unshift([1, 2, 3], 5, 6);        // 5
unshift([1, 2, 3]);              // 3
unshift([4, 5], [1, 2, 3]);      // 3

const testArray = [1, 2, 3];
shift(testArray);                // 1
testArray;                       // [2, 3]
unshift(testArray, 5);           // 3
testArray;                       // [5, 2, 3]