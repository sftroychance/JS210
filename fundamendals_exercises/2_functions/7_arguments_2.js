// what does code log and why?

let a = 7;

function myValue(a) {
  a += 10;
}

myValue(a);
console.log(a); // 7

// `a` is declared at global level and sent as an argument to myValue();
// myValue declares a local variable `a` and assigns it the value of the
// argument. local variable `a` is incremented, but this does not affect
// global variable `a`. Local variable `a` is shadowing global variable `a`.