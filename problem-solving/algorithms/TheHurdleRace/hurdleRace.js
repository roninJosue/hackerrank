const hurdleRace = (k, height) => {
  const max = Math.max(...height)

  return k > max ? 0 : max - k
}

console.log(hurdleRace(7, [2, 5, 4, 5, 2]))
console.log(hurdleRace(4, [1, 6, 3, 5, 2]))