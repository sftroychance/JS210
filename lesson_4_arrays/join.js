// Write a function named join that accepts two arguments: an Array and a
// String. The function should coerce each value in the Array to a String,
// and then join those values together using the second argument as a
// separator. You may assume that a separator will always be passed.

function join(arr, separator) {
  let result = arr[0];

  for (let idx = 1; idx < arr.length; idx += 1) {
    result += separator;
    result += arr[idx];
  }

  return result;
}

console.log(join(['bri', 'tru', 'wha'], 'ck '));       // 'brick truck wha'
console.log(join([1, 2, 3], ' and '));                 // '1 and 2 and 3'