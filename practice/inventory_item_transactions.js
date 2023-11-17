// Write a function that takes two arguments, an inventory item ID and a list of
// transactions, and returns an array containing only the transactions for the
// specified inventory item.

// P: function that takes inventory item ID and transaction list
//    return array containing transactions for that item ID
// question: wrong arity or types? any verification for transaction list?
// E: given
// D: array: filter, use object deconstruction
// A: - define function transactionsFor, two params -> targetID, transactions
//    - filter transactions for id matching targetID
//    - return result

function transactionsFor(targetID, transactions) {
  return transactions
    .filter(({id}) => id === targetID);
}

const transactions = [ { id: 101, movement: 'in',  quantity:  5 },
  { id: 105, movement: 'in',  quantity: 10 },
  { id: 102, movement: 'out', quantity: 17 },
  { id: 101, movement: 'in',  quantity: 12 },
  { id: 103, movement: 'out', quantity: 15 },
  { id: 102, movement: 'out', quantity: 15 },
  { id: 105, movement: 'in',  quantity: 25 },
  { id: 101, movement: 'out', quantity: 18 },
  { id: 102, movement: 'in',  quantity: 22 },
  { id: 103, movement: 'out', quantity: 15 }, ];

console.log(transactionsFor(101, transactions));
// returns
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]
