const findDigits = n => {
  const nString = n.toString()
  const divideNumber = nString.split('')
  let count = 0

  for (const digit of divideNumber) {
    count = n % parseInt(digit) === 0 ? count + 1 : count
  }

  return count
}

console.log(findDigits(101))