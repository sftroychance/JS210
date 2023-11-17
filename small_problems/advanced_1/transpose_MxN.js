// Write a function that takes an array of arrays that represents a 3x3 matrix
// and returns the transpose of the matrix. You should implement the function on
// your own, without using any external libraries.

// Take care not to modify the original matrix — your function must produce a
// new matrix and leave the input matrix array unchanged.

// P: given a multidim array 3x3, return the matrix transposed
// questions: will it be perfect 3x3? if not, what to replace values with?
// definition: transposition is reversing the x and y coordinates for
//  when adding each element to a new array
// RULES: don't mutate original array
// E: given
// D: arrays (nested loop iteration)
// A:
//  - declare function transpose, 1 param: origArray
//  - get dimensions of array: array.length and array[0].length
//  - declare new array with reversed dimensions
//  - loop 0 to new array length - 1 with idx1
//    - loop 0 to new array[0] length - 1 with idx2
//       newArray[idx2][idx1] = origArray[idx1][idx2]
//  - return new array

function transpose(origArray) {
  const length = origArray.length;
  const width = origArray[0].length;

  const newArray = Array.from({length: width}, () => new Array(length));

  for (let idx1 = 0; idx1 < length; idx1 += 1) {
    for (let idx2 = 0; idx2 < width; idx2 += 1) {
      newArray[idx2][idx1] = origArray[idx1][idx2];
    }
  }

  return newArray;
}

const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

const newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]

console.log(transpose([[1, 2, 3, 4]]));            // [[1], [2], [3], [4]]
console.log(transpose([[1], [2], [3], [4]]));      // [[1, 2, 3, 4]]
console.log(transpose([[1]]));                     // [[1]]

console.log(transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]));
// [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]
