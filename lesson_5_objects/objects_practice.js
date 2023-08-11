// Write a function that takes two arguments, an array and an object. The array
// will contain two or more elements that, when combined with spaces, produce a
// person's full name. The object will contain two keys, title and occupation,
// and suitable values for both items. Your function should log a greeting to
// the console that uses the person's full name, and mentions the person's
// title and occupation.

function greetings(name, credentials) {
  const fullName = name.join(' ');
  const occupation = `${credentials.title} ${credentials.occupation}`;

  const message = `Hello ${fullName}! You are my favorite ${occupation}.`;
  console.log(message);
}

greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' });

// Hello, John Q Doe! Nice to have a Master Plumber around.

// Implement a function that takes a String as an argument and returns an
// object that contains a count of the repeated characters.

function repeatedCharacters(str) {
  const chars = str.toLowerCase().split('');
  const tally = {};

  chars.forEach((char) => {
    tally[char] = tally[char] ? tally[char] + 1 : 1;
  });

  const multTally = {};

  // for (const key in tally) {
  //   if (tally[key] > 1) {
  //     multTally[key] = tally[key];
  //   }
  // }

  Object.keys(tally).forEach((key) => {
    if (tally[key] === 1) {
      delete tally[key];
    }
  })

  return tally;
}

console.log(repeatedCharacters('Programming'));    // { r: 2, g: 2, m: 2 }
console.log(repeatedCharacters('Combination'));    // { o: 2, i: 2, n: 2 }
console.log(repeatedCharacters('Pet'));            // {}
console.log(repeatedCharacters('Paper'));          // { p: 2 }
console.log(repeatedCharacters('Baseless'));       // { s: 3, e: 2 }