// Todd wrote some simple code in an attempt to log his shop's financial transactions. Each time he makes a sale or spends money on inventory, he logs that deposit or withdrawal via the logTransaction function. His code also intends to ensure that each transaction logged is a valid numerical amount. At the end of each day, he displays his total gain or loss for the day with transactionTotal.

// Test out the code yourself. Can you spot the problem and fix it?

const transactionLog = [];

function processInput(input) {
  const numericalData = parseFloat(input);

  if (Number.isNaN(numericalData)) {
    throw (new Error('Data could not be converted to numerical amount.'));
  }

  return numericalData;
}

function logTransaction() {
  let data = prompt('Please enter the transaction amount: ');

  try {
    data = processInput(data);
    transactionLog.push(data);

    alert('Thank you. Data accepted.');
  } catch(error) {
    alert(error.message);
  }
}

function transactionTotal() {
  let total = 0;

  for (let i = 0; i < transactionLog.length; i++) {
    total += transactionLog[i];
  }

  return total.toFixed(2);
}

logTransaction();
logTransaction();
logTransaction();

console.log(transactionTotal());

// total was not printing a dollar amount (accepts floats but printed integer), returning total.toFixed(2) line 37
// line 25 catch needs to be catch(error)
// further exploration: this error can be caught with a simple guard clause (date NaN); the try/catch block does not meet the requirements for try/catch (JS built-in function, no guard clause possible) - just need the guard clause after invoking processInput()
