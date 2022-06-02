const climbingLeaderboard = (ranked, player) => {
  let position = 1;
  let positions = {}
  const res = []

  ranked.forEach(r => {
    //console.log(r)
    if (!positions[r]) {
      positions[r] = position
      position++
    }
  })

  const arr = Object.keys(positions).reverse()

  for (const element of player) {
    let f = ''
    let ind = arr.findIndex(a => element >= a)
    if (ind === -1) f = positions[arr[arr.length - 1]] + 1
    else f = positions[arr[ind]]
    res.push(f)
  }
  return res
}

console.log(climbingLeaderboard([100, 100, 50, 40, 40, 20, 10], [5, 25, 50, 120]))