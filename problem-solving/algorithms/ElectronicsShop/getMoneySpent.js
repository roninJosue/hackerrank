const getMoneySpent = (keyboards, drives, b) => {
  let max = -1

  for (const keyboardPrice of keyboards) {
    if (keyboardPrice >= b) continue;
    for (const usbPrice of drives) {
      const sum = keyboardPrice + usbPrice
      if (sum <= b && sum > max) max = sum
    }
  }
  return  max
}

console.log(getMoneySpent([40, 50, 60], [5, 8, 12], 60))
//console.log(getMoneySpent([4], [5], 5))