function stockList(listOfArt, listOfCat) {
  if (listOfArt.length === 0 || listOfCat.length === 0) return '';

  // map book codes to category codes and quantities
  const cleanStocklist = listOfArt.map(bookCode => {
    const [code, qty] = bookCode.split(' ');
    return [code[0], Number(qty)];
  });

  const tally = {};

  // iterate over given categories and get tally from cleanStocklist
  // ensures output is same order as given category list
  for (let category of listOfCat) {
    const count = cleanStocklist
      .filter(([code, _]) => code === category)
      .map(([_, qty]) => qty)
      .reduce((sum, qty) => sum + qty, 0);

    tally[category] = count;
  }

  return Object.entries(tally)
    .map(entry => `(${entry[0]} : ${entry[1]})`)
    .join(' - ');
}

const books = ["ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"];
const categories = ["A", "B", "C", "W"];

console.log(stockList(books, categories));

