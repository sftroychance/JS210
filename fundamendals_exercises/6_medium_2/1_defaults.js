// The processOrder function shown below accepts the following arguments:
// price, quantity, discount, serviceCharge and tax. Any arguments other than
// price may be omitted when calling the function, in which case, default
// values will be assigned.

// function processOrder(price, quantity, discount, serviceCharge, tax) {
//   quantity = quantity || 1;
//   discount = discount || 0;
//   serviceCharge = serviceCharge || 0.1;
//   tax = tax || 0.15;
//
//   return (price * quantity) * (1 - discount) * (1 + serviceCharge) * (1 + tax);
// }

// This function uses conditional statements to test whether arguments have
// been omitted. When an argument is omitted, JavaScript automatically
// initializes it to a value of undefined. The function takes advantage of this
// behavior by setting undefined arguments to a default value.
//
//   The following variation of the processOrder function has the same behavior as the first:

// function processOrder(price, quantity, discount, serviceCharge, tax) {
//   quantity = quantity || 1;
//   discount = discount || 0;
//   serviceCharge = serviceCharge || 0.1;
//   tax = tax || 0.15;
//
//   return (price * quantity) * (1 - discount) * (1 + serviceCharge) * (1 + tax);
// }

// The issue here is that if an argument with a value of 0 is passed, that
// is a falsy value, so 0 will always be reset to a different value (except
// for discount, which has a default of 0); a solution is to test each
// argument for whether it === undefined; or the nullish coalescing operator:

function processOrder(price, quantity, discount, serviceCharge, tax) {
  quantity = quantity ?? 1;
  discount = discount ?? 0;
  serviceCharge = serviceCharge ?? 0.1;
  tax = tax ?? 0.15;

  return (price * quantity) * (1 - discount) * (1 + serviceCharge) * (1 + tax);
}

console.log(processOrder(100));
console.log(processOrder(100, 2, 0.1, 0, 0));      // 227.7 -- incorrect result!