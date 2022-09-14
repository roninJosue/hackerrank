You have two strings of lowercase English letters. You can perform two types of operations on the first string:
1) Append a lowercase English letter to the end of the string.
2) Delete the last character of the string. Performing this operation on an empty string results in an empty string.

Given an integer, **_k_**, and two strings, **_s_** and **_t_**, determinate whether or not you can convert **_s_** to **_t_** 
by performing exactly **_k_** of the above operations on **_s_**. I f it's possible, print `Yes`. Otherwise, print `No`

**Example** **_s_** = [a, b, c]

t = [d, e, f]

k = 6

To convert s to t, we first delete all of the characters in **3** moves. Next we add each of the characters of **_t_** in order. On the
**6<sup>th</sup>** move, you will have the matching string. Return `yes`.

If there were more moves available, they could have been eliminated by performing multiple deletions on an empty string. If
there were fewer than **6** moves, we could not have succeeded in creating the new string.