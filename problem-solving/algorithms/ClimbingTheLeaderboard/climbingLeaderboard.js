const climbingLeaderboard = (ranked, player) => {
  let position = 1;
  let positions = {}
  const res = []

  const binarySearch = (a, target) => {
    let start = 0;
    let end = a.length - 1;
    let mid = Math.floor((start + end) / 2)

    while (start <= end) {
      if (a[mid] === target) {
        return mid
      } else if (a[mid] < target) {
        start = mid + 1
      } else {
        end = mid - 1
      }
      mid = Math.floor((start + end) / 2)
    }
    return mid
  }

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