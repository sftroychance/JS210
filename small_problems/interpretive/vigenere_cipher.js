// The Vigenere Cipher encrypts alphabetic text using polyalphabetic
// substitution. It uses a series of Caesar Ciphers based on the letters of a
// keyword. Each letter of the keyword is treated as a shift value. For
// instance, the letter 'B' corresponds to a shift value of 1, and the letter
// 'd' corresponds to a shift value of 3. In other words, the shift value used
// for a letter is equal to its index value in the alphabet. This means that the
// letters 'a'-'z' are equivalent to the numbers 0-25. The uppercase letters
// 'A'-'Z' are also equivalent to 0-25.

// Applying the Vigenere Cipher is done sequentially for each character by
// applying the current shift value to a Caesar Cipher for that particular
// character.

// P: input: two strings -> plaintext, keyword
//    shift characters as with caesar cipher
//    keyword creates a cycle of shift keys; each char in keyword corresponds
//     to alpha index of that character

// E: below

// D: arrays for transformation, keys

// A:
//  - declare function vigenere that takes two string arguments
//    -> plaintext, keyword
//  - declare constants for UC and LC alphabet
//  - create a generator using the keyword
//    - declare generator function createKeyGenerator that takes one string
//      parameter -> keyword
//    - split keyword into char array
//    - map char array to index of char in the alphabet -> keys
//    - set currentIndex = 0;
//    - loop
//      - yield keys[currentIndex % keys.length]
//      - currentIndex += 1
//  - split plaintext into char array -> chars
//  - map char array
//    - if not alpha char, return char
//    - get target alphabet
//    - get index of current char in target alphabet
//    - return char at index in target alpha:
//      currentIndex + generator.next().value % alpha.length
//  - join char array
//  - return

const UC_ALPHA = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const LC_ALPHA = UC_ALPHA.toLowerCase();

function *keyGenerator(keyword) {
  const keys = keyword
    .toUpperCase()
    .split('')
    .map(char => UC_ALPHA.indexOf(char));

  let currentIndex = 0;

  while (true) {
    yield keys[currentIndex % keys.length];
    currentIndex += 1;
  }
}

function vigenere(plaintext, keyword) {
  const keys = keyGenerator(keyword);

  const encryptChar = char => {
    if (!char.match(/[a-z]/i)) return char;

    const alpha = char === char.toUpperCase() ? UC_ALPHA : LC_ALPHA;

    const currentIndex = alpha.indexOf(char);
    const newIndex = (currentIndex + keys.next().value) % alpha.length;

    return alpha[newIndex];
  };

  return plaintext
    .split('')
    .map(encryptChar)
    .join('');
}

console.log(vigenere('Pineapples don\'t go on pizzas!', 'meat'));
console.log(vigenere('Pineapples don\'t go on pizzas!', 'aaaa'));
console.log(vigenere('apple?*#!', 'aaaa'));
console.log(vigenere('sample text', ''));
console.log(vigenere('', 'meat'));
