There will be two arrays of integers. Determinate all integers that satisfy the following two conditions:
1. The elements of the first array are all factors of the integer being considered.
2. The integer being considered is a factor of all elements of the second array.

These numbers are referred to as being the two arrays. Determinate how many such numbers exist.

**Example**:
```
a = [2, 6]
b = [24, 36]
```
There are two numbers between the two arrays: **6** and **12**.

**_6%2_** = 0, 6%6 = 0, 24%6 = 0 and 36%6 = 0 for the first value.

**_12%2_** = 0, 12%6 = 0, 24%12 = 0 and 36%12 = 0 for the second value.

** Link to the problem **: [https://www.hackerrank.com/challenges/between-two-sets/problem](https://www.hackerrank.com/challenges/between-two-sets/problem)