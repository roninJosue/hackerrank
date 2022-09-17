Your local library needs your help! Given the expected and actual return dates for a library book, create a program that
calculates the fine (if any). The fee structure is as follows:
1) if the book is returned on or before the expected return date, no fine will be charged (i.e: **_fine_** **= 0**).
2) If the book is returned after the expected return day but still within the same calendar month and year as the expected
return date, **_fine_** = **15 Hackos x (the number of days late)**.
3) If the book is returned after the expected return month but still within the same calendar year as the expected return date,
the **_fine_ = 500 Hackos x (the number of days late).**
4) If the book is returned after the calendar year in which it was expected, there is a fixed fine of **10000 Hackos**.

Charges are based only on the least precise measure of lateness. For example, whether a book is due january 1, 2017 or
December 31, 2017, if it is returned january 1, 2018, that is a year late and the fine would be **10,000 Hackos**.

**Example**

**_d1, m1, y1_ = 14, 7, 2018**

**_d2, m2, y2_ = 5, 7, 2018**

The first values are the return date and the second are the due date. The years are the same and the months are the same.
The book is **14 - 5 = 9**  days late. Return **9 * 15 = 135**.

**Link to the problem**: https://www.hackerrank.com/challenges/library-fine/problem