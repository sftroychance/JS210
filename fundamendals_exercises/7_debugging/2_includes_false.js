// Caroline has written a very simple function, includesFalse, that searches a list of primitives for the boolean false. If false is found, the function immediately returns true. If no occurrence of false has been found after iterating through the entire array, the function returns false.

// Caroline's last method invocation of includesFalse (line 15) doesn't return what she expects. Why is that? Fix the code so that it behaves as intended.

function includesFalse(list) {
  for (let i = 0; i < list.length; i++) {
    let element = list[i];

    if (element === false) {
      return true;
    }
  }

  return false;
}
                                                                  // returns:
includesFalse([8, null, 'abc', true, 'launch', 11, false]);       // true
includesFalse(['programming', undefined, 37, 64, true, 'false']); // false
includesFalse([9422, 'lambda', true, 0, '54', null]);             // true

// the last invocation includes 0 in the arguments, but not the boolean value false
// to fix this, on line 9 we must change the equality operator to be strict so it does not view 0 as equivalent to false
