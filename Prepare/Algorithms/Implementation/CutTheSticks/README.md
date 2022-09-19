You are given a number of sticks of varying lengths. You will iteratively cut the sticks into smaller sticks, discarding
the shortest pieces until there are none left. At each iteration you will determine the length of the shortest stick remaining,
cut that length from each of the longer sticks and then discard all the pieces of that shortest length. When all the remaining
sticks are the same length, they cannot be shortened so discard them.

Given the lengths of **_n_** sticks, print the number of sticks that are left before each iteration until there are none left.

**Example**

```
arr = [1, 2, 3]
```

The shortest stick length is **1**, so cut that length from the longer two and discard the pieces of length **1**. Now
the lengths are **_arr_ = [1, 2]**. Again, the shortest stick is of length **1**, so cut that amount from the longer stick
and discard those pieces. There is only one stick left, **_arr_ = [1]**, so discard that stick. The number of sticks at each
iteration are **_answer_ = [3, 2, 1]**.

**Link to the problem**: https://www.hackerrank.com/challenges/cut-the-sticks/problem