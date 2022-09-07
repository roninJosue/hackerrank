const findDigits = n => {
  const splitNumber = n.toString()
    .split('')
  let count = 0

  for (const digit of splitNumber) {
    count = n % parseInt(digit) === 0 ? count + 1 : count
  }

  return count
}

console.log(findDigits(101))