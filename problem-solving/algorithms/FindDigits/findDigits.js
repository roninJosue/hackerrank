const findDigits = n => {
  const nString = n.toString()
  const divideNumber = nString.split('')
  let count = 0

  for (let i = 0; i < divideNumber.length; i++) {
    count = n % parseInt(divideNumber[i]) === 0 ? count + 1 : count
  }

  return count
}

console.log(findDigits(101))