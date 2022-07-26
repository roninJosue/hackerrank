const permutationEquation = p => {
  const n = p.length
  const permutationArray = []

  for (let index = 1; index <= n; index++) {
    let i = p.findIndex(x => index === x)
    let y = p.findIndex(z => (i + 1) === z)
    permutationArray.push(y + 1)
  }

  return permutationArray
}

console.log(permutationEquation([5, 2, 1, 3, 4]))
console.log(permutationEquation([2, 3, 1]))
