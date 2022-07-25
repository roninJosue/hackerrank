Given a sequence of **_n_** integers, **_p(1)_**, **_p(2)_**,..., **_p(n)_** where each element is distinct and satisfies
1 ≤ **_p(x)_** ≤ **_n_**. For each x where 1 ≤ **_x_** ≤ **_n_**, that is **_x_** increments from 1 to **_n_**, 
find any integer **_y_** such that p(p(y)) = x and keep a history of the values of **_y_** in a return array.

### Example
```
p = [5, 2, 1, 3, 4]
```

Each value of **_x_** between _1_ and _5_, the length of the sequence, is analyzed as follows:
1. `x = 1 = p[3], p[4] = 3, so p[p[4]] = 1`
2. `x = 2 = p[2], p[2] = 2, so p[p[2]] = 2`
3. `x = 3 = p[4], p[5] = 4, so p[p[5]] = 3`
4. `x = 4 = p[5], p[1] = 5, so p[p[1]] = 4`
5. `x = 5 = p[1], p[3] = 1, so p[p[3]] = 5`

The values for y are [4, 2, 5, 1, 3]

**Link to the problem**: https://www.hackerrank.com/challenges/permutation-equation/problem