const saveThePrisoner = (n, m, s) => {
  let chair = s

  while (m > 0) {
    if (chair === n) {
      chair = 1
    } else {
      chair++
    }
    m--
  }

  return chair - 1
}

console.log(saveThePrisoner(5, 2, 1))
console.log(saveThePrisoner(5, 2, 2))
console.log(saveThePrisoner(7, 19, 2))
console.log(saveThePrisoner(3, 7, 3))
