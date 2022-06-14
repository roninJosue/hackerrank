const hurdleRace = (k, height) => Math.max(0, Math.max(...height) - k)

console.log(hurdleRace(7, [2, 5, 4, 5, 2]))
console.log(hurdleRace(4, [1, 6, 3, 5, 2]))