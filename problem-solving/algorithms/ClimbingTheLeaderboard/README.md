An arcade game player wants to climb to the top of the leaderboard and track their ranking. 
The game uses Dense Ranking, so its leaderboard works like this:
* The player with the highest score is ranked number **1** on the leaderboard.
* Players who have equal scores receive the same ranking number, and the next player(s) receive the immediately following ranking number.

### Example
`ranked = [100,90,90,80]`

`player = [70, 80, 105]`

The ranked players will have ranks **1**, **2**, **2**, and **3**, respectively. If the player's scores are
**70**, **80** and **105**, their rankings after each game are **_4<sup>th</sup>_**, **_3<sup>rd</sup>_** and **_1<sup>st</sup>_**.
Return `[4,3,1]`.

**Link to the problem**: https://leetcode.com/problems/climbing-the-leaderboard/