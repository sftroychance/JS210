// Build a program that randomly generates Teddy's age, and logs it to the
// console. Have the age be a random number between 20 and 200 (inclusive).

const MAX_AGE = 200;
const MIN_AGE = 20;

function getAge() {
  return Math.floor((Math.random() * (MAX_AGE - MIN_AGE + 1) + MIN_AGE));
}

console.log(`Teddy is ${getAge()} years old.`);
console.log(`Teddy is ${getAge()} years old.`);

const ageResults = [];

for (let i = 0; i <= 400; i += 1) {
  ageResults.push(getAge());
}

ageResults.sort((a, b) => a - b);
console.log(ageResults[0]);
console.log(ageResults[ageResults.length - 1]);

// Further exploration:
// The randomBetween function used the Math.floor() method. Would it make a
// difference if the Math.round() method was used instead?
//
// Round would throw off the randomization - the minimum and maximum numbers
// would have less chance of occurring in the result set
// if the minimum is 20, that number could only be achieved if the pre-round
// number is 20 to < 20.5; but 21 would result if the pre-round number is
// 20.5 to < 21.5

//   Also, how can we make the function more robust? What if the user
// inadvertently gave the inputs in reverse order (i.e., the value passed to
// min was greater than max)?

// My solution included constants to represent the range; the book solution
// has a function with parameters to set the range. We can swap the values
// if min is larger than max, or return the value if they are equal, before
// calling the random function

function getAgeInRange(min, max) {
  if (min === max) {
    return min;
  }

  if (min > max) {
    [min, max] = [max, min];
  }

  return Math.floor((Math.random() * (max - min + 1) + min));
}

console.log(getAgeInRange(10, 20));
console.log(getAgeInRange(20, 10));
console.log(getAgeInRange(20, 20));

