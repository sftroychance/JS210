// A triangle is classified as follows:

// Right: One angle is a right angle (exactly 90 degrees).
// Acute: All three angles are less than 90 degrees.
// Obtuse: One angle is greater than 90 degrees.
// To be a valid triangle, the sum of the angles must be exactly 180 degrees,
// and every angle must be greater than 0. If either of these conditions is not
// satisfied, the triangle is invalid.

// Write a function that takes the three angles of a triangle as arguments and
// returns one of the following four strings representing the triangle's
// classification: 'right', 'acute', 'obtuse', or 'invalid'.

// You may assume that all angles have integer values, so you do not have to
// worry about floating point errors. You may also assume that the arguments are
// in degrees.

// P: Given three angle measurements, return triangle type per definitions
//   input: 3 integers
// E: given
// D: array
// A:
//  - declare function triangle with three parameters -> angle1, angle2, angle3
//  - declare array angles to contain three angles given
//  - if sum of array values is not 180, return invalid
//  - if any array value <= 0 return invalid
//  - if array include 90 return right
//  - if any angle > 90 return obtuse
//  - otherwise return acute

function triangle(angle1, angle2, angle3) {
  const angles = [angle1, angle2, angle3];
  if (angles.reduce((sum, angle) => sum + angle, 0) !== 180) return 'invalid';
  if (angles.some(angle => angle <= 0)) return 'invalid';

  if (angles.some(angle => angle === 90)) return 'right';
  if (angles.some(angle => angle > 90)) return 'obtuse';
  return 'acute';
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"
