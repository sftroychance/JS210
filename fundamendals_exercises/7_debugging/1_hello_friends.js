// You have written basic functions to display a random greeting to any number of friends upon each invocation of greet. Upon invoking the greet function, however, the output is not as expected. Figure out why not and fix the code.

function randomGreeting() {
  const words = ['Hello', 'Howdy', 'Hi', 'Hey there', 'What\'s up',
               'Greetings', 'Salutations', 'Good to see you'];

  const idx = Math.floor(Math.random() * words.length);
  console.log(idx);

  return words[idx];
}

function greet(...args) {
  const names = Array.prototype.slice.call(args);

  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    const greeting = randomGreeting();

    console.log(`${greeting}, ${name}!`);
  }
}

greet('Hannah', 'Jose', 'Beatrix', 'Julie', 'Ian');

// noticed before running:
// randomGreeting() does not return a value
// when randomGreeting is invoked, it is not as a method (no ())
// maybe not an error, but names can be assigned to [...args]
// eslint error: i is too short for variable name

// on running:
// greeting is assigned the entire function on line 17
// when this is fixed, the function returns undefined, which is logged
// 'undefined, Hannah!' etc
// added return statement to randomGreeting()
// works appropriately (tested several rounds to make sure random is working
// for the expected range 0 to 7
