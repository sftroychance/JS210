/* eslint-disable max-lines-per-function */
// A stack is a list of values that grows and shrinks dynamically. A stack may
// be implemented as an Array that uses two Array methods: Array.prototype.push
// and Array.prototype.pop.

// A stack-and-register programming language is a language that uses a stack of
// values. Each operation in the language operates on a register, which can be
// thought of as the current value. The register is not part of the stack. An
// operation that requires two values pops the topmost item from the stack
// (i.e., the operation removes the most recently pushed value from the stack),
// operates on the popped value and the register value, and stores the result
// back in the register.

// P:
// input: a string of tokens
// output: log to console per commands
// Given a string, execute the program in the string in accordance with the
// tokens, as follows:
// n : Place a value, n, in the register. Do not modify the stack.
// PUSH : Push the register value onto the stack. Leave the value in the
// register.
// ADD : Pop a value from the stack and add it to the register value, storing
// the result in the register.
// SUB : Pop a value from the stack and subtract it from the register value,
// storing the result in the register.
// MULT : Pop a value from the stack and multiply it by the register value,
// storing the result in the register.
// DIV : Pop a value from the stack and divide the register value by the popped
// stack value, storing the integer result back in the register.
// REMAINDER : Pop a value from the stack and divide the register value by the
// popped stack value, storing the integer remainder of the division back in the
// register.
// POP : Remove the topmost item from the stack and place it in the register.
// PRINT : Print the register value.
// E: given
// D: array to simulate stack, array to process tokens
// A:
// - declare function minilang with one string parameter -> script
// - declare stack = [], register = 0
// - split script into array of tokens
// - iterate over tokens
//   - if token matches number, place in register
//   - otherwise (switch) process each command

function minilang(script) {
  const stack = [];
  let register = 0;

  const nextInStack = () => {
    if (stack.length === 0) throw new Error("Error: Stack is empty.");

    return stack.pop();
  };

  const tokens = script.split(' ');
  for (let token of tokens) {
    if (token.match(/^-?\d+$/)) {
      register = Number(token);
      continue;
    }

    try {
      switch (token) {
        case 'PUSH':
          stack.push(register);
          break;
        case 'ADD':
          register += nextInStack();
          break;
        case 'SUB':
          register -= nextInStack();
          break;
        case 'MULT':
          register *= nextInStack();
          break;
        case 'DIV':
          register = Math.floor(register / nextInStack());
          break;
        case 'REMAINDER':
          register %= nextInStack();
          break;
        case 'POP':
          register = nextInStack();
          break;
        case 'PRINT':
          console.log(register);
          break;
        default:
          throw new Error("Error: Invalid token.");
      }
    } catch (err) {
      return err.message;
    }
  }

  return undefined;
}

console.log(minilang('MLT'));
console.log(minilang('MULT'));

// minilang('PRINT');

// minilang('5 PUSH 3 MULT PRINT');
// // 15

// minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// // 5
// // 3
// // 8

// minilang('5 PUSH POP PRINT');
// // 5

// minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// // 5
// // 10
// // 4
// // 7

// minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// // 6

// minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// // 12

// minilang('-3 PUSH 5 SUB PRINT');
// // 8

// minilang('6 PUSH');
// // (nothing is printed because the `program` argument has no `PRINT`
// commands)
