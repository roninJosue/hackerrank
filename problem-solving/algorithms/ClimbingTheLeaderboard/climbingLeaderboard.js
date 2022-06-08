const binarySearch = (s, a, i, j, r) => {
  if ((j - i) <= 1) {
    if (a > s[i]) {
      return (r[s[i]] - 1) > 0 ? r[s[i]] - 1 : 1;
    } else if (a === s[i]) {
      return r[s[i]];
    } else if (a > s[j]) {
      return r[s[i]] + 1;
    } else if (a === s[j]) {
      return r[s[j]] === undefined ? r[s[j - 1]] : r[s[j]];
    } else {
      return r[s[j]] === undefined ? r[s[j - 1]] + 1 : r[s[j]] + 1;
    }
  }
  let mid = Math.floor(i + (j - i) / 2);
  if (s[mid] < a) {
    return binarySearch(s, a, i, mid, r);
  } else {
    return binarySearch(s, a, mid, j, r);
  }
}

const climbingLeaderboard = (ranked, player) => {

  let rank = 1;
  let ranks = []
  let arr = []
  ranks[ranked[0]] = 1

  for (let index = 1; index < ranked.length; index++) {
    if (ranked[index] !== ranked[index - 1]) {
      rank++
      ranks[ranked[index]] = rank
    }
  }

  for (const element of player) {
    arr.push(binarySearch(ranked, element, 0, ranked.length, ranks))
  }

  return arr
}

climbingLeaderboard([100, 100, 50, 40, 40, 20, 10], [5, 25, 50, 120])