There is a new mobile game that starts with consecutively numbered clouds. Some clouds are thunderheads and others
are cumulus. The player can jump on any cumulus cloud having a number that is equal to the number of the current cloud
plus **1** or **2**. The player must avoid the thunderheads. Determine the minimum of jumps it will take to jump from
the starting position to the last cloud. It is always possible to win the game.

For each game, you will get an array of clouds numbered **0** if they are safe or **1** if they must be avoided.

**Example**:
```
c = [0, 1, 0, 0, 0, 1, 0]
```

Index the array from **0 ... 6**. The number on each cloud is its index in the list so the player must avoid the clouds
at indices **1** and **5**. They could follow these two paths: **0 &rarr; 2 &rarr; 4 &rarr; 6** or 
**0 &rarr; 2 &rarr; 3 &rarr; 4 &rarr; 6**. The first path take **3** jumps while the second takes **4**. Return **3**

**Link to the problem**:https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem