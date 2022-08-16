const stringReduction = (s) => {
  let letters = {a: 0, b: 0, c: 0}

  for (const element of s) {
    letters[element]++
  }

  if (letters.a === s.length || letters.b === s.length || letters.c === s.length) return s.length

  if ((letters.a % 2 !== 0 && letters.b % 2 !== 0 && letters.c % 2 !== 0) ||
    (letters.a % 2 === 0 && letters.b % 2 === 0 && letters.c % 2 === 0)) return 2

  else return 1
}

console.log(stringReduction('ccc'))
