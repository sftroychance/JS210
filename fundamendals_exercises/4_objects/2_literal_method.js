// In the following code, a user creates a person object literal and defines
// two methods for returning the person's first and last names. What is the
// result when the user tries out the code on the last line?

const person = {
  firstName() {
    return 'Victor';
  },
  lastName() {
    return 'Reyes';
  },
};

console.log(`${person.firstName} ${person.lastName}`);
console.log(`${person.firstName()} ${person.lastName()}`);

// my expectation is that there will be an error because lastName and
// firstName are defined as methods and need to be called as functions,
// with `()`

// Actually, there is not an error! Using just `firstName` or `lastName`
// without calling the method with `()` returns the function itself (not its
// string representation). This is because functions are first-class objects.