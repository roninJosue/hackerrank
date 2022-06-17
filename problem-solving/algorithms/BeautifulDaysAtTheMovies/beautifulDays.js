const beautifulDays = (i, j, k) => {
  return Array.from({length: j - i + 1}, (_, y) => i + y).filter(number => {
    const reversedNumber = Number(number.toString().split('').reverse().join(''))
    return Math.abs(number - reversedNumber) % k === 0
  }).length
}

console.log(beautifulDays(20, 23, 6))