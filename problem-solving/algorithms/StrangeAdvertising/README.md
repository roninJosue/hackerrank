HackerLand Enterprise is adopting a new viral advertising strategy. When they launch a new product, 
they advertise it to exactly **5** people on social media.

On the first day, half of those 5 people (i.e. **_floor_(5/2) = 2**) like the advertisement and each shares it with **3** of their friends.
At the beginning of the second day, **_floor_(5/2) x 3  = 2 x 3 = 6** people receive the advertisement.
Each day, **_floor_(recipients/2)** of the recipients like the advertisement and will share it with **3** friends on the following day.
Assuming that no one receives the advertisement twice, determine how many people have liked the advertisement at the end of a given day,
beginning with launch day as day **1**.

**Example:**

**_n_ = 5**

| Day | Shared | Liked | Cumulative |
|-----|:------:|------:|-----------:|
| 1   |   5    |     2 |2           |
| 2   |   6    |     3 |5           |
| 3   |   9    |     4 |9           |
| 4   |   12   |     6 |15          |
| 5   |   18   |     9 |24          |

The progression is shown above. The cumulative number of likes on **5**<sup>_th_</sup> day is **24**.

**Link to the problem**: [https://www.hackerrank.com/challenges/strange-advertising/problem](https://www.hackerrank.com/challenges/strange-advertising/problem)