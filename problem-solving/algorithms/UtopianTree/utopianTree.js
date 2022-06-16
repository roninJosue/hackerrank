const utopianTree = n => {
  return Math.pow(2, Math.ceil(n / 2) + 1) - 1 + ((n % 2 === 0) ? 0 : -1)
}

[0, 1, 2, 3, 4, 5].forEach(n => {
  console.log(utopianTree(n))
})
