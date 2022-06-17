Lily likes to play games with integers. She has created a new game where she determines the difference between a number and its reverse. 
For instance, given the number **12**, its reverse is **21**. Their difference is **9**. The number **120**
reversed is **21**, and their difference is **99**.

She decides to apply her game to decision making. She will look at a numbered range of days and will only go to a movie on
a beautiful day.

Given a range of numbered days, [_**i**_...**_j_**] and a number **k**, determine the number of days in the range that are beautiful.
Beautiful numbers are defined as numbers where |**_i-reverse(i)_**| is evenly divisible by **k**. If a day's value is a beautiful number, it is a beautiful day.
Return the number of beautiful days in the range.

**Link to the problem**: https://www.hackerrank.com/challenges/beautiful-days-at-the-movies/problem