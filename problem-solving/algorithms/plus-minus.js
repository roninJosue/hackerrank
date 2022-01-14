function plusMinus(arr) {
  const nElements = arr.length

  let z = {
    z: 0
  }
  let pos = {
    p: 0
  }
  let n = {
    n: 0
  }

  const arrObj = arr.reduce((p, c) => {
    if (c === 0) {
      z.z++
    }

    if (c > 0){
      pos.p++
    }

    if(c <0){
      n.n++
    }
    
    return { ...p, ...pos, ...n, ...z }
  }, { p: 0, n: 0, z: 0 })

  console.log((arrObj.p / nElements).toFixed(6))
  console.log((arrObj.n / nElements).toFixed(6))
  console.log((arrObj.z / nElements).toFixed(6))
}

const test = [1, 2, 3, -1, -2, -3, 0, 0]

plusMinus(test)


