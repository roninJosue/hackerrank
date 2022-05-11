const getMoneySpent = (keyboards, drives, b) => {
  const k = keyboards.sort((a, b) => b - a)
  const d = drives.sort((a, b) => b - a)
  let arr = []

  for (const keyboardPrice of keyboards) {
    if (keyboardPrice >= b) continue;
    for (const usbPrice of drives) {
      const kCost = keyboardPrice
      const dCost = usbPrice
      const sum = kCost + dCost
      if (sum <= b) arr.push(sum)
    }
  }
  return  arr.length ? Math.max(...arr)  : -1
}

//console.log(getMoneySpent([40, 50, 60], [5, 8, 12], 60))
console.log(getMoneySpent([4], [5], 5))