When a contiguous block of text is selected in a PDF viewer, the selection is highlighted with a blue rectangle.
In this PDF viewer, each word is highlighted independently.

There is a list of **26** characters heights aligned by index to theirs letters. For example, 'a' is at index **0** and 'z'
is at index **25**. There will also be a string. Using the letter heights given, determine the area of the rectangle
highlight in **mm<sup>2</sup>** assuming all letters are **1mm** wide.

**Example:**
```
h = [1 ,3, 1, 3,1,4,1,3,2,5,5,5,5,1,1,5,5,1,5,2,5,5,5,5,5,5,5] word = 'torn'
```
The heights are **_t = 2_**, **_o = 1_**, **_r = 1_** and **_n = 1_**. The tallest letter is **2** high and there are **4** letters.
The highlighted area is **_2 * 4 = 8_ mm<sup>2</sup>** so the answer is **8**.

**Link to problem**: [Designer PDF Viewer](https://www.hackerrank.com/challenges/designer-pdf-viewer/problem)