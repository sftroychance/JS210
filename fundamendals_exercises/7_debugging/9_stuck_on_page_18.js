// The following code is a simplified (and not so serious) model of how we read a software development book. But running this code results in a stack overflow. What is wrong?

const totalPages = 364;
let energy = 100;
let currentPage = 1;

function read() {
  while (energy > 0 && currentPage < totalPages) {
    currentPage += 1;
    energy -= (5 + currentPage * 0.1);
  }

  console.log(`Made it to page ${String(currentPage)}.`);

  // Drink a cup of coffee.
  energy = 100;

  // Continue reading.
  if (currentPage < totalPages) {
    read();
  } else {
    console.log('Done!');
  }
}

read();

// On line `21` there is a recursive call being made to read()
// With every recursion, the value of `currentPage` is being reset to 1

// The fix would be to place that declaration/initialization outside the function (preceding) so its value is retained with each successive recursive call
