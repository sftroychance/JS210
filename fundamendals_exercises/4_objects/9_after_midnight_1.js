// We can use the number of minutes before or after midnight to represent the
// time of day. If the number of minutes is positive, the time is after
// midnight. If the number of minutes is negative, the time is before midnight.
//
//  The timeOfDay function shown below takes a time argument using this
// minute-based format, and returns the time of day in 24-hour format
// ("hh:mm"). Reimplement the function using JavaScript's Date object.

function timeOfDay(minOffset) {
  const baseTime = new Date('1/1/2001 00:00');

  // baseTime.setMinutes(baseTime.getMinutes() + minOffset);
  baseTime.setMinutes(minOffset);

  const hours = baseTime.getHours().toString().padStart(2, '0');
  const minutes = baseTime.getMinutes().toString().padStart(2, '0');

  return `${hours}:${minutes}`;
}

console.log(timeOfDay(0));          // "00:00"
console.log(timeOfDay(-3));         // "23:57"
console.log(timeOfDay(35));         // "00:35"
console.log(timeOfDay(-1437));      // "00:03"
console.log(timeOfDay(3000));       // "02:00"
console.log(timeOfDay(800));        // "13:20"
console.log(timeOfDay(-4231));      // "01:29"

// previous version we are given:
// const MINUTES_PER_HOUR = 60;
// const HOURS_PER_DAY = 24;
// const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;
//
// function timeOfDay(deltaMinutes) {
//   deltaMinutes = deltaMinutes % MINUTES_PER_DAY;
//   if (deltaMinutes < 0) {
//     deltaMinutes = MINUTES_PER_DAY + deltaMinutes;
//   }
//
//   let hours = Math.floor(deltaMinutes / MINUTES_PER_HOUR);
//   let minutes = deltaMinutes % MINUTES_PER_HOUR;
//
//   return `${padWithZeroes(hours, 2)}:${padWithZeroes(minutes, 2)}`;
// }
//
// function padWithZeroes(number, length) {
//   let numberString = String(number);
//
//   while (numberString.length < length) {
//     numberString = `0${numberString}`;
//   }
//
//   return numberString;
// }