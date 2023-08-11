// The getSelectedColumns function selects and extracts specific columns to a
// new array. Currently, the function is not producing the expected result. Go
// over the function and the sample runs shown below. What do you think the
// problem is?

function getSelectedColumns(numbers, cols) {
  let result = [];

  for (let i = 0, length = numbers.length; i < length; i += 1) {
    for (let j = 0, length = cols.length; j < length; j += 1) {
      if (!result[j]) {
        result[j] = [];
      }

      result[j][i] = numbers[i][cols[j]];
    }
  }

  return result;
}

// given the following arrays of number arrays
const array1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const array2 = [[1, 2, 3], [1, 2, 3], [1, 2, 3]];

// `array1` in row/column format
// [[1, 2, 3],
//  [4, 5, 6],
//  [7, 8, 9]]

console.log(getSelectedColumns(array1, [0]));
// [[1]];            expected:  [[1, 4, 7]]
console.log(getSelectedColumns(array1, [0, 2]));
// [[1, 4], [3, 6]]; expected:  [[1, 4, 7], [3, 6, 9]]
console.log(getSelectedColumns(array2, [1, 2]));
// [[2, 2], [3, 3]]; expected: [[2, 2, 2], [3, 3, 3]]

// The problem is that both for loops are using variable `length`. `var
// length` is hoisted to the top of the function (and repeated--the second
// one is ignored); the first for loop reassigns the value to
// `numbers.length` but then the second loop reassigns it again to
// `cols.length`; with the second 'i' loop, length no longer reflects the
// `numbers.length` value, so the 'i' loop will iterate only `cols.length - 1`
// times

// this can be fixed by changing the name of `length` in the 'j' loop, or by
// using let instead of var; with the latter, each 'length' variable will be
// scoped only to that block, so they won't overwrite each other; the
// variable is being shadowed in the 'j' loop, but there is no consequence
// for that in this code.