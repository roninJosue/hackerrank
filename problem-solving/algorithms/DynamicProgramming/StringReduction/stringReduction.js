const table = {
  'ab': 'c',
  'ac': 'b',
  'cb': 'a',
  'ba': 'c',
  'ca': 'b',
  'bc': 'a'
}

const stringReduction = (s, m, n) => {
  if (n >= s.length) return s
  if (s.length === 1) return s
  if (s[m] !== s[n]) {
    const newString = table[`${s[m]}${s[n]}`] + s.slice(2)

    return stringReduction(newString, 0,  1)
  } else {
    return stringReduction(s, m + 1, n + 1)
  }
}

const res = stringReduction('ababbac', 0, 1)
console.log(res)