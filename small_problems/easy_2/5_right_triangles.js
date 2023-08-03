// Write a function that takes a positive integer, n, as an argument and
// logs a right triangle whose sides each have n stars. The hypotenuse of
// the triangle (the diagonal side in the images below) should have one end
// at the lower-left of the triangle, and the other end at the upper-right.

// A: - declare function that takes a parameter - lines
//    - loop 1 to lines - counter
//      - output = '*'.repeat(counter).padStart(lines)

function triangle(lines) {
  for (let line = 1; line <= lines; line += 1) {
    console.log('*'.repeat(line).padStart(lines));
  }
}

triangle(5);
triangle(9);
