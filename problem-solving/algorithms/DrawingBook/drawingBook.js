const pageCount = (n, p) => {
  let count = 0;
  let count2 = 0;
  let page = 1;

  while (page < p) {
    page += 2;
    count++;
  }

  if (n % 2 !== 0) {
    page = n - 1
  } else {
    page = n
  }

  while (page > p) {
    count2++;
    page -= 2;
  }

  return Math.min(count, count2);
}

//console.log(pageCount(6, 2))
console.log(pageCount(6, 2))
