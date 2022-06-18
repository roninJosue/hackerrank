const viralAdvertising = (n) => {
  let people = 5
  let cumulativeLikes = 0

  for (let index = 1; index <= n; index++) {
    const currentLikes = Math.floor(people / 2)
    cumulativeLikes += currentLikes
    people = currentLikes * 3
  }

  return cumulativeLikes
}

viralAdvertising(3)