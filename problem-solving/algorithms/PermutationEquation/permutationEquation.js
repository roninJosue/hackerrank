const permutationEquation = p => {
  const n = p.length
  const permutationArray = []

  for (let index = 1; index <= n; index++) {
    permutationArray.push(p.indexOf(p.indexOf(index) + 1) + 1)
  }

  return permutationArray
}

console.log(permutationEquation([5, 2, 1, 3, 4]))
console.log(permutationEquation([2, 3, 1]))
