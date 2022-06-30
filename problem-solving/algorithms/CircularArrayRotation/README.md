John Watson knows of an operation called a right rotation on an array of integers. One rotation operation moves the last
array element to the first position and shifts all remaining elements right one. To test Sherlock's abilities, Watson provides
Sherlock with an array of integers. Sherlock is to perform the rotation operation a number of times then determine the value
of the element at a given position.

For each array, perform a number of right circular rotations and return the values of the elements at the given indices.

**Example**
```
a = [3, 4, 5]
k = 2
queries = [1,2]
```

Here k is the number of rotations on a, and queries holds the list of indices to report. First we perform the two rotations:

```
[5, 3, 4]
[4, 5, 3]
```

Then we report the values of the elements at the given indices:

```
[5, 3]
```

**Link to the problem**: https://www.hackerrank.com/challenges/circular-array-rotation/problem