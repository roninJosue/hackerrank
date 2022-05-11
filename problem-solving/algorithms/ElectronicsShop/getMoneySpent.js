const getMoneySpent = (keyboards, drives, b) => {
  let arr = []

  for (const keyboardPrice of keyboards) {
    if (keyboardPrice >= b) continue;
    for (const usbPrice of drives) {
      const sum = keyboardPrice + usbPrice
      if (sum <= b) arr.push(sum)
    }
  }
  return  arr.length ? Math.max(...arr)  : -1
}

//console.log(getMoneySpent([40, 50, 60], [5, 8, 12], 60))
console.log(getMoneySpent([4], [5], 5))