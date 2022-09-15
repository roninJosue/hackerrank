const appendAndDelete = (s, t, k) => {
  const sSize = s.length
  const tSize = t.length
  let counter = 0

  //if (sSize > k) return 'NO'

  for (let i = 0; i < sSize; i++) {
    if (s[i] !== t[i]){
      counter++
    }
    //console.log(`s[i] = ${s[i]}`)
    //console.log(`t[i] = ${t[i]}`)
  }

  return counter === k ? 'YES' : 'NO'
}

console.log(appendAndDelete('hackerhappy', 'hackerrank', 9))