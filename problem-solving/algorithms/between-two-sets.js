/**
 * There will be two arrays of integers. Determine all integers that satisfy the following two conditions:
 * The elements of the first array are all factors of the integer being considered
 * The integer being considered is a factor of all elements of the second array
 * These numbers are referred to as being between the two arrays. Determine how many such numbers exist.
 */

const getGCD = (n1, n2) => {
  if (n2 === 0) return n1;
  return getGCD(n2, n1 % n2)
}

const getLCM = (n1, n2) => {
  if (n1 === 0 || n2 === 0) return 0;
  return (n1 * n2) / getGCD(n1, n2);
}

const betweenTwoSets = (arr1, arr2) => {
  let result = 0;

  let lcm = arr1[0];

  arr1.forEach(element => {
    lcm = getLCM(lcm, element);
  });

  let gcd = arr2[0];

  arr2.forEach(element => {
    gcd = getGCD(gcd, element);
  })

  let multiple = 0

  while (multiple <= gcd) {
    multiple += lcm;

    if (gcd % multiple === 0) {
      result++;
    }
  }

  return result

}

console.log(betweenTwoSets([2, 4], [16, 32, 96]))