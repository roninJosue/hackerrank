const catAndMouse = (x, y, z) => {
  const distA = Math.abs(x - z)
  const distB = Math.abs(y - z)

  if (distA === distB) return 'Mouse C'

  return distA > distB ? "Cat B" : "Cat A"
}

console.log(catAndMouse(1,2,3))
console.log(catAndMouse(1,3,2))