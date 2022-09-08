const extraLongFactorials = n => {
  let s = BigInt(1)

  for (let i = 2; i <= n; i++) {
    s *= BigInt(i)
  }

  console.log(s.toString())
}

extraLongFactorials(25)