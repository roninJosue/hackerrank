const beautifulDays = (i, j, k) => {
  return Array.from({length: j - i + 1}, (_, y) => i + y).filter(n=>{
    const reverse = Number(n.toString().split('').reverse().join(''))
    return Math.abs(n - reverse) % k === 0
  }).length
}

console.log(beautifulDays(20, 23, 6))