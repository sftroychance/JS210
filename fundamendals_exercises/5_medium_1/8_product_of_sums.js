// The productOfSums function shown below is expected to return the product of
// the sums of two arrays of numbers. Read through the following code. Will it
// produce the expected result? Why or why not?

function productOfSums(array1, array2) {
  let result = total(array1) * total(array2);
  return result;
}

function total(numbers) {
  let sum;

  for (let i = 0; i < numbers.length; i += 1) {
    sum += numbers[i];
  }

  sum;
}

// two issues in the total() function:
// - in the for loop, sum is incremented though it does not have an initial
// value, and the increment will result in NaN (so all iterations will
// result in NaN
// - if that were fixed, the last line in total() will not return anything;
// returns must be explicit, otherwise it returns 'undefined'
// undefined + undefined = NaN
// undefined += 5 = NaN


// corrected:
function total(numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i += 1) {
    sum += numbers[i];
  }

  return sum;
}