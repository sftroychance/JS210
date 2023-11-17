// Write a function that takes in an array of integers and returns the integers
// that are either palindromes or almost-palindromes. An almost-palindrome is
// any integer that can be rearranged to form a palindrome.

// For example, the numbers 677 and 338 are both almost-palindromes, since they
// can be rearranged to form 767 and 383, respectively.

// P: input: array of integers
//    output: array of integers that are or could be palindromes
//    rule: in a palindrome, the count of each char is an even number; one count
//        can be an odd number
//    clarifying questions:
//    - what if arity doesn't match?
//    - what if non-integers?
//    - what if arg is not an array?
//    - what if element is not a number? is null? is undefined?
// E: Given
// D: array
// A:
//  - declare function palindromeSieve that takes 1 param -> numbers
//  - helper function to check if a number is palindromic or near-palindromic
//    - declare 10-element array of all 0 values -> count
//    - convert to string
//    - iterate over string -> count[digit] += 1
//    - filter to those with odd count
//    - if length of result array === 1 => palindromic
//  - filter to palindromic/near
//  - return array

function isAlmostPalindrome(number) {
  const counts = Array.from({ length: 10 }, () => 0);
  const str = String(number);

  for (const letter of str) {
    counts[letter] += 1;
  }

  const oddCounts = counts.filter(num => num % 2 === 1);

  return oddCounts.length <= 1;
}

function palindromeSieve(numbers) {
  return numbers.filter(isAlmostPalindrome);
}

console.log(palindromeSieve([443, 12, 639, 121, 3232])); // ➞ [443, 121, 3232]
// Since 443 => 434; 121 is a palindrome; 3232 => 2332 or 3223

console.log(palindromeSieve([5, 55, 6655, 8787])); // ➞ [5, 55, 6655, 8787]
// Single-digit numbers are automatically palindromes.

console.log(palindromeSieve([897, 89, 23, 54, 6197, 53342])); // ➞ []

console.log(palindromeSieve([])); // []
