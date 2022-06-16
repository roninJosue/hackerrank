const utopianTree = n => {
  if (n === 0) return 1
  if (n === 1) return 2

  let height = 2

  for (let index = 2; index <= n; index++) {
    height = index % 2 === 0 ? height + 1 : height * 2
  }

  return height
}

[0, 1, 2, 3, 4, 5].forEach(n => {
  console.log(utopianTree(n))
})
