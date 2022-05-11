Two cats and a mouse are at various positions on a line. You will be given their starting positions. 
Your task is to determine which cat will reach the mouse first, assuming the mouse does not move and the cats travel at equal speed. 
If the cats arrive at the same time, the mouse will be allowed to move, and it will scape while they fight.
You are given _**q**_ queries in the form of **_x_**, **_y_**, and _**z**_ representing the respective positions for cats **_A_** and **_B_**, and for mouse **_C_**.
Complete the function catAndMouse to return the appropriate answer to each query, which will be printed on a new line.
* If cat **_A_** catches the mouse first, print **_Cat A_**.
* If cat **_B_** catches the mouse first, print **_Cat B_**.
* If both cats arrive at the same time, print **_Mouse C_** as the two cats fight and mouse escapes.

### Example
`x = 2`

`y = 5`

`z = 4`

The cats are at positions **_2_** (Cat A) and **_5_** (Cat B). The mouse is at position **_4_**. 
Cat B, at position **5** will arrive first, since it is only 1 unit away while the other is 2 units away. Return **_Cat B_**.

**Link to the problem**: [https://www.hackerrank.com/challenges/cats-and-a-mouse](https://www.hackerrank.com/challenges/cats-and-a-mouse)