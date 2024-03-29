/**
 Two children, Lily and Ron, want to share a chocolate bar. Each of the squares has an integer on it.

 Lily decides to share a contiguous segment of the bar selected such that:

 * The length of the segment matches Ron's birth month, and,
 * The sum of the integers on the squares is equal to his birthday.

 Determine how many ways she can divide the chocolate.
 */

const birthday = (s, d, m) => {
  let count = 0;
  for (let index = 0, size = s.length; index < size; index++) {
    let sum = s.slice(index, index + m).reduce((a, b) => a + b)
    if (sum === d) count++;
  }

  return count;
}

birthday([1, 2, 1, 3, 2], 3, 2)