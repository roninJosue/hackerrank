const bonAppetit = (bill, k, b) => {
  const total = bill.reduce((acc, item, index) => index !== k ? acc + item : acc, 0) / 2
  console.log(`${total === b ? 'Bon Appetit' : b - total}`)
}

bonAppetit([3, 10, 2, 9], 1, 12)