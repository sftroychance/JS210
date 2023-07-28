// One of the ways to manage the flow of a program is through the use of
// conditionals. Go over the code below and specify how many unique execution paths are possible

if (condition1) {
  // ...
  if (condition2) {
    // ...
  } else {
    // ...
  }
} else {
  // ...
  if (condition4) {
    // ...
    if (condition5) {
      // ...
    }
  }
}

// 5 paths
// condition1 -> condition2
// condition1 -> not condition2 (else)
// not condition1
// not condition1 -> condition4
// not condition1 -> condition4 -> condition5

