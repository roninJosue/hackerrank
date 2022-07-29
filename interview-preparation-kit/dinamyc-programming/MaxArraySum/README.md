Given an array of integers, find the subset of non-adjacent elements with the maximum sum. Calculate the sum of that subset.
It is possible that the maximum sum is **_0_**, the case when all elements are negative.

**Example**:
```
arr = [-2, 1, 3, -4, 5]
```

The following subsets with more than **_1_** element exist. These exclude the empty subset and single element subsets which
are also valid.

| Subset       | Sum  |
|--------------|------|
| `[-2, 3, 5]` | `6`  |
| `[-2, 3]`    | `1`  |
| `[-2, 3]`    | `1`  |
| `[-2, -4]`   | `-6` |
| `[-2, 5]`    | `3`  |
| `[1, -4]`    | `-3` |
| `[1, 5]`     | `6`  |
| `[3, 5]`     | `8`  |

The maximum subset sum is 8. Note that any individual element is a subset as well.

**Link to the problem**: https://www.hackerrank.com/challenges/max-array-sum/problem
