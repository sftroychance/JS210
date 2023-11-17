// Write a function that takes an arbitrary MxN matrix, rotates it clockwise by
// 90-degrees as described above, and returns the result as a new matrix. The
// function should not mutate the original matrix.

// P: given a matrix (multidim array) of m x n size, rotate it clockwise 90 deg
//  definition: one 90 degree rotation is made up of (1) transposing the array
//    then (2) reversing each subarray - reusing transpose function from prev
//    assignment
// E: given
// D: array manipulation
// A:
//  declare function rotate90, 1 param -> origArray
//  - transpose the array (function will return a new array)
//  - map new array to reverse each subarray
//  - return new array

function rotate90(origArray) {
  const newArray = transpose(origArray);

  return newArray
    .map(subarr => subarr.reverse());
}


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

const matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

const matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

const newMatrix1 = rotate90(matrix1);
const newMatrix2 = rotate90(matrix2);
const newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]
console.log(matrix1);
console.log(matrix2);
