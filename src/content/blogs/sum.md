---
title: Two sum PicoCTF 2023
published: Apr 1, 2023
language: English
---

**100 points**

Description
Can you solve this?
What two positive numbers can make this possible: n1 > n1 + n2 OR n2 > n1+ n2

_Note:_ This challenge launches an instance on demand.

---

The program asks us to provide 2 integers that would satisfy the equation:

`n1 > n1 + n2 OR n2 > n1 + n2 `

we will not exit the program (unlike the first one) and in order to finally get the flag we need to ensure that `num1 > 0 || num2 > 0`.

We can overflow the sum with 2 positive integers to satisfy all the conditions, so entering: `1073741824, 1073741824` we can get the flag:

> picoCTF{your flag}
