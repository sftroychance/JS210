// What will the following code log to the console and why? Don't run the code
// until after you have tried to answer.

const array1 = ['Moe', 'Larry', 'Curly', 'Shemp', 'Harpo', 'Chico', 'Groucho', 'Zeppo', { name: 'Troy' }];
const array2 = [];

for (let i = 0; i < array1.length; i += 1) {
  array2.push(array1[i]);
}

for (let i = 0; i < array1.length; i += 1) {
  if (array1[i].startsWith('C')) {
    array1[i] = array1[i].toUpperCase();
  }
}

console.log(array2);

// logging array2 would not show the result of the `toUpperCase()` method
// call because the elements are pushed individually to array2 from array1;
// the mutated values of 'CURLY' and 'CHICO' would appear in array1 only.

// Further Exploration
//
// What would happen if an object literal was part of the array1 elements
// pushed to array2? Would changes made to the object literal in array1 be
// reflected in array2? How would you change the code so that any changes made
// to array1 in the second for loop get reflected to array2?

// If an object literal were part of the array1 elements and then pushed to
// array2, both arrays would be sharing the reference to the same object, so
// any mutations that occur to one would affect the object referred to by
// both; in this code in particular, we would then get a TypeError because
// we are trying to invoke `startsWith()` on an object element.

// To ensure any changes made are reflected in array2, in the second for
// loop I would add a line to make the same change to the element in that array:
// array2[i] = array2[i].toUpperCase(); A better way would be assigning
// array1 to the variable array2 rather than do the first for loop (if that
// didn't violate any other requirements).