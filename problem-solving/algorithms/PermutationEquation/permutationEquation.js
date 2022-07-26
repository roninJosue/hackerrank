const permutationEquation = p => {
  const n = p.length
  const permutationArray = []

  for (let index = 1; index <= n; index++) {
    let i = p.indexOf(index)
    let y = p.indexOf(i + 1)

    permutationArray.push(y + 1)
  }

  return permutationArray
}

console.log(permutationEquation([5, 2, 1, 3, 4]))
console.log(permutationEquation([2, 3, 1]))
