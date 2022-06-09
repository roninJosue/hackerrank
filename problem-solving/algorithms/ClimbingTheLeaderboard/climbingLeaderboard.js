const binarySearch = (array, key) => {
  let low = 0;
  let high = array.length - 1;

  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);
    if (key === array[mid]) {
      return mid;
    } else if (array[mid] < key && key < array[mid - 1]) {
      return mid;
    } else if (array[mid] > key && key >= array[mid + 1]) {
      return mid + 1;
    } else if (array[mid] < key) {
      high = mid - 1;
    } else if(array[mid] > key) {
      low = mid + 1;
    }
  }

  return -1;
}

const climbingLeaderboard = (ranked, player) => {
  const m = player.length;
  const n = ranked.length;
  let res = []
  let rank = []

  rank[0] = 1;

  for (let i = 1; i < n; i++) {
    if (ranked[i] === ranked[i - 1]) {
      rank[i] = rank[i - 1];
    } else {
      rank[i] = rank[i - 1] + 1;
    }
  }

  for (let i = 0; i < m; i++) {
    const aliceScore = player[i];
    if (aliceScore > ranked[0]) {
      res[i] = 1;
    } else if (aliceScore < ranked[n - 1]) {
      res[i] = rank[n - 1] + 1;
    } else {
      const index = binarySearch(ranked, aliceScore);
      res[i] = rank[index];
    }
  }

  return res;
}

const result = climbingLeaderboard([100, 100, 50, 40, 40, 20, 10], [5, 25, 50, 120])
console.log(result)