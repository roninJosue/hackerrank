A child is playing a cloud hopping game. In this game, there are sequentially numbered clouds that can be thunderheads or
cumulus clouds. The character must jump from cloud to cloud until it reaches the start again.

There is an array of clouds, **_c_** and an energy level **_e_** = **100**. The character starts from **c[0]** and uses **1** unit
of energy to make a jump of size **k** to cloud **c[(i + k) % n]**. If it lands on a thundercloud, c[i] = 1, its energy (**_e_**)
decreases by **2** additional units.

The game ends when the character lands back on cloud **0**.

Given the values of **_n_**, **_k_**, and the configuration of the clouds as an array **_c_**, 
determine the final value of **_e_** after the game ends.

**Example** c = [0, 0, 1, 0]

**_k_** = 2

The indices of the path are 0 &rarr; 2 &rarr; 0. The energy level reduces by **1** for each jump to **98**. The character
landed on one thunderhead at an additional cost of **2** energy units. The final energy level is **96**.

**Note**: Recall that % refers to the [modulo opretation](https://en.wikipedia.org/wiki/Modulo_operation).In this case,
it serves to make the route circular. If the character is at **c[n - 1]** and jumps **1**, it will arrive at **c[0]**

**Link to the problem**: https://www.hackerrank.com/challenges/jumping-on-the-clouds-revisited/problem