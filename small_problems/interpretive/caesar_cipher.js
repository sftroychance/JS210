// Write a function that implements the Caesar Cipher. The Caesar Cipher is one
// of the earliest and simplest ways to encrypt plaintext so that a message can
// be transmitted securely. It is a substitution cipher in which each letter in
// a plaintext is substituted by the letter located a given number of positions
// away in the alphabet. For example, if the letter 'A' is right-shifted by 3
// positions, it will be substituted with the letter 'D'. This shift value is
// often referred to as the key. The "encrypted plaintext" (ciphertext) can be
// decoded using this key value.

// The Caesar Cipher only encrypts letters (including both lower and upper
// case). Any other character is left as is. The substituted letters are in the
// same letter case as the original letter. If the key value for shifting
// exceeds the length of the alphabet, it wraps around from the beginning.

// P:
//  input: a string and an integer -> str, shift
//  output: a string
//  replace each character in original string with its shifted value
//  rules: maintain case, don't replace non-alpha chars

// E: below

// D: arrays (transformation)

// A:
//  - declare function caesarEncrypt that takes two parameters (str, shift)
//  - set const values for lowercase and uppercase alphabets
//  - split str into array of characters -> chars
//  - map array of chars -> char
//    - if not alpha, return character
//    - if lowercase, use lowercase alpha, if uppercase, use uppercase alpha
//    - get index of char in appropriate constant string
//    - new index = (index + shift) % constant string length
//    - return char at new index
//  - join char array

function caesarEncrypt(plaintext, key) {
  const UC_ALPHA = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const LC_ALPHA = UC_ALPHA.toLowerCase();

  const encryptChar = char => {
    if (!char.match(/[a-z]/i)) return char;

    const alpha = char === char.toUpperCase() ? UC_ALPHA : LC_ALPHA;

    const currentIndex = alpha.indexOf(char);
    const newIndex = (currentIndex + key) % alpha.length;

    return alpha[newIndex];
  };

  return plaintext
    .split('')
    .map(encryptChar)
    .join('');
}

// simple shift
console.log(caesarEncrypt('A', 0));       // "A"
console.log(caesarEncrypt('A', 3));       // "D"

// wrap around
console.log(caesarEncrypt('y', 5));       // "d"
console.log(caesarEncrypt('a', 47));      // "v"

// all letters
console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25));
// "ZABCDEFGHIJKLMNOPQRSTUVWXY"
console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5));
// "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// many non-letters
console.log(caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2));
// "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"

console.log(caesarEncrypt('', 5)); // ''
console.log(caesarEncrypt('123', 5)); // '123'
