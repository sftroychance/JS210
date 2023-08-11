// The invoiceTotal function in the code below computes the total amount for an
// invoice containing four "line items". How can you refactor the function so
// that it will work with invoices containing any number of line items?

// function invoiceTotal(amount1, amount2, amount3, amount4) {
//   return amount1 + amount2 + amount3 + amount4;
// }

function invoiceTotal(...args) {
  return args.reduce((sum, value) => sum + value, 0);
}

console.log(invoiceTotal(20, 30, 40, 50, 40, 40));  // does not work; how can you
// make it work?
console.log(invoiceTotal(20, 30, 40, 50));          // works as expected

// NOTE: including an initial value for reduce() will allow the function to
// return 0 if it is not passed any arguments!