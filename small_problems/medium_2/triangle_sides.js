// A triangle is classified as follows:

// Equilateral: All three sides are of equal length.
// Isosceles: Two sides are of equal length, while the third is different.
// Scalene: All three sides are of different lengths.
// To be a valid triangle, the sum of the lengths of the two shortest sides must
// be greater than the length of the longest side, and every side must have a
// length greater than 0. If either of these conditions is not satisfied, the
// triangle is invalid.

// Write a function that takes the lengths of the three sides of a triangle as
// arguments and returns one of the following four strings representing the
// triangle's classification: 'equilateral', 'isosceles', 'scalene', or
// 'invalid'.

// P: given three side lengths, return triangle classification
// E: below
// D: arrays/sets (for getting unique count)
// A:
//  - declare function triangle that accepts three arguments -> side1, side2, side3
//  - declare an array containing three sides -> sides
//  - sort array by side value descending
//  - return 'invalid' if any side <= 0
//  - return 'invalid' if largest side <= sum of other two sides
//  - convert array to a set
//  - if set size === 1 return equilateral
//  - if set size === 2 return isosceles
//  - else return scalene

function triangle(side1, side2, side3) {
  const sides = [side1, side2, side3].sort((a, b) => b - a);
  if (sides.some(side => side <= 0)) return 'invalid';
  if (sides[0] >= sides[1] + sides[2]) return 'invalid';

  // const uniqueSides = new Set(sides);
  switch(new Set(sides).size) {
    case 1: return 'equilateral';
    case 2: return 'isosceles';
    case 3: return 'scalene';
  }
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"
