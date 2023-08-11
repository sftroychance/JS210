// A user wrote a function that takes an array as an argument and returns its
// average. Given the code below, the user expects the average function to
// return 5. Is the user's expectation correct? Why or why not?

const myArray = [5, 5];
myArray[-1] = 5;
myArray[-2] = 5;

function average(array) {
  let sum = 0;

  for (let i = -2; i < array.length; i += 1) {
    sum += array[i];
  }

  return sum / array.length;
}

console.log(average(myArray)); // 10
// No. The for loop executes ok because the index counter matches the keys
// we have used; however, properties `-1` and `-2` are not included in
// `array.length`, which is 1 higher than the highest index -> 2
// the average would be calculated as 20 / 2 => 10


// Further exploration: Refactor the average function so that it returns the
// result that the user expected, 5.

function revisedAverage(array) {
  let sum = 0;

  for (let i = -2; i < array.length; i += 1) {
    sum += array[i];
  }

  return sum / Object.keys(array).length;
}

console.log(revisedAverage(myArray));