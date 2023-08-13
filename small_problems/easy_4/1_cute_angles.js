// Write a function that takes a floating point number representing an angle
// between 0 and 360 degrees and returns a string representing that angle in
// degrees, minutes, and seconds. You should use a degree symbol (˚) to
// represent degrees, a single quote (') to represent minutes, and a double
// quote (") to represent seconds. There are 60 minutes in a degree, and 60
// seconds in a minute.

const SECS_PER_MIN = 60;
const MINS_PER_DEG = 60;
const DEGS_PER_CIRCLE = 360;
const DEGREE_SYMBOL = '\u00B0';

function dms(angle) {
  while (angle < 0) {
    angle += DEGS_PER_CIRCLE;
  }

  let degrees = Math.floor(angle);
  let remainderSeconds = (angle - degrees) * MINS_PER_DEG * SECS_PER_MIN;

  let minutes = Math.floor(remainderSeconds / SECS_PER_MIN);
  let seconds = Math.floor(remainderSeconds % SECS_PER_MIN);

  const padString = (number) => String(number).padStart(2, '0');

  degrees %= DEGS_PER_CIRCLE;
  minutes = padString(minutes);
  seconds = padString(seconds);

  return `${degrees}${DEGREE_SYMBOL}${minutes}'${seconds}"`;
}

console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"
console.log(dms(-1));   // 359°00'00"
console.log(dms(400));  // 40°00'00"
console.log(dms(-40));  // 320°00'00"
console.log(dms(-420)); // 300°00'00"

// The current solution implementation only works with positive numbers in the
// range of 0 to 360 (inclusive). Can you refactor it so that it works with any
// positive or negative number?

// refactored above to add 360 until angle is positive value