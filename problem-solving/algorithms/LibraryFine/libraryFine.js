const libraryFine = (d1, m1, y1, d2, m2, y2) => {
  const YEAR_FINE = 10000
  const DAY_FINE = 15
  const MONTH_FINE = 500

  if (y1 > y2) return (y1 - y2) * YEAR_FINE

  if (y2 > y1) return 0

  if (d1 > d2 && m1 === m2) return (d1-d2) * DAY_FINE

  if (m1 > m2) return (m1 - m2) * MONTH_FINE

  return 0
}

console.log(libraryFine(9, 6, 2015, 6, 6, 2015))
console.log(libraryFine(5, 5, 2014, 23, 2, 2014))
console.log(libraryFine(31, 8, 2004, 20, 1, 2004))
console.log(libraryFine(2, 7, 1014, 1, 1, 1014))