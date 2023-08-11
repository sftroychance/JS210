// As seen in the previous exercise, the time of day can be represented as the
// number of minutes before or after midnight. If the number of minutes is
// positive, the time is after midnight. If the number of minutes is negative,
// the time is before midnight.
//
// The two functions below do the reverse of the
// previous exercise. They take a 24-hour time argument and return the number
// of minutes before or after midnight, respectively. Both functions should
// return a value between 0 and 1439 (inclusive). Refactor the functions using
// the Date object.

const MSEC_PER_SEC = 1000;
const SEC_PER_MIN = 60;
const MIN_PER_HOUR = 60;
const HOUR_PER_DAY = 24;
const MIN_PER_DAY = MIN_PER_HOUR * HOUR_PER_DAY;

function parseTimeString(str) {
  return str.split(':').map((num) => parseInt(num));
}

function afterMidnight(timeStr) {
  const [hours, minutes] = parseTimeString(timeStr);
  const baselineDate = new Date('1/1/2001');
  const compDate = new Date('1/1/2001');
  compDate.setHours(hours);
  compDate.setMinutes(minutes);

  return (compDate - baselineDate) / MSEC_PER_SEC / SEC_PER_MIN;
}

function beforeMidnight(timeStr) {
  return (MIN_PER_DAY - afterMidnight(timeStr)) % MIN_PER_DAY;
}

console.log(afterMidnight('00:00'));       // 0
console.log(beforeMidnight('00:00'));      // 0
console.log(afterMidnight('12:34'));       // 754
console.log(beforeMidnight('12:34'));      // 686