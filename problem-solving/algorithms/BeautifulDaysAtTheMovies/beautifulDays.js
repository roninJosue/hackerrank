const beautifulDays = (i, j, k) => {
  let count = 0

  for (let number = i; number <= j; number++) {
    const reverseNumber = Number(number.toString().split('').reverse().join(''))

    if (Number.isInteger(Math.abs(number - reverseNumber) / k)) count++
  }

  return count
}

console.log(beautifulDays(20, 23, 6))