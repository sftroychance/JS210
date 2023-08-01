// Rot13 ("rotate by 13 places") is a letter-substitution cipher that
// translates a String into a new String:
//
// For each character in the original String:
//
// If the character is a letter in the modern English alphabet, change it
// to the character 13 positions later in the alphabet. Thus, a becomes n.
//
// If you reach the end of the alphabet, return to the beginning. Thus, o
// becomes b.
//
// Letter transformations preserve case. A becomes N while a becomes n.
// Don't modify characters that are not letters.
//
//  Write a Function, rot13, that takes a String and returns that String
//  transformed by the rot13 cipher.
//
// P: Function that takes a string and returns the string transformed by rot13
// E: empty string
// D: string iteration
// A: - define function rot13 that takes one parameter, string
//    - declare result string and initialize to ''
//    - iterate over chars in string with index
//      - function to translate
//        - a - z => 97 - 122 / n => 110
//        - A - Z => 65 - 90 / N => 78
//      - append translated value to result
//    - return result

function rotTranslate(char) {
  const ROT_OFFSET = 13;
  const ALPHABET_SIZE = 26;
  const ALPHA = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const alpha = 'abcdefghijklmnopqrstuvwxyz';

  let targetAlpha;
  if (ALPHA.includes(char)) {
    targetAlpha = ALPHA;
  } else if (alpha.includes(char)) {
    targetAlpha = alpha;
  } else {
    return char;
  }

  const index = targetAlpha.indexOf(char);
  const targetIndex = (index + ROT_OFFSET) % ALPHABET_SIZE;

  return targetAlpha[targetIndex];
}

function rot13(string) {
  let result = '';
  for (let index = 0; index < string.length; index += 1) {
    result += rotTranslate(string[index]);
  }

  return result;
}

console.log(rot13('5&_+*#@!Teachers open the door, but you must enter by'
  + ' yourself.'));
// logs: Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.

console.log(rot13(rot13('5&_+*#@!Teachers open the door, but you must enter by yourself.')));

// logs: Teachers open the door, but you must enter by yourself.jk
