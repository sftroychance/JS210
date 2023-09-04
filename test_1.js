let arr = ["a", "b", "c", , "d"];

console.log(arr.length); // 5

"abcd".split("").forEach((letter) => (arr[letter] = letter.toUpperCase()));

console.log(arr);

for (let prop in arr) {
  console.log(arr[prop]);
}

console.log(Object.keys(arr));
