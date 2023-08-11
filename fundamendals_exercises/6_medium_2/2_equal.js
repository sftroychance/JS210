// Read through the following code. Currently, it does not log the expected
// result. Explain why this happens, then refactor the code so that it works as
// expected.

const person = { name: 'Victor' };
const otherPerson = { name: 'Victor' };

console.log(person === otherPerson);    // false -- expected: true

// With objects, `===` returns true only if they are the same object
// a fix would be to use JSON.stringify and compare the return values:
console.log(JSON.stringify(person) === JSON.stringify(otherPerson));

// or you could initialize otherPerson to point to the same value as person:
// `const otherPerson = person;`