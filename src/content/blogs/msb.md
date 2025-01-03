---
title: MSB picoCTF 2023
published: Apr 1, 2023
language: English
---

**200 points**

AUTHOR: LT 'SYREAL' JONES

Description
This image passes LSB statistical analysis, but we can't help but think there must be something to the visual artifacts present in this image...
Download the image [here]

---

This type of challenge can be easily solved with [StegSolve](https://stegonline.georgeom.net/) because this site can extract LSB data with pixel order and RGB values. or by using this [github repo may help you ](https://github.com/Pulho/sigBits)

and using `python sigBits.py -t=msb -o=rgb -e=column file.png`

I tried the first default option -> the first row in this site and got readable words, so I downloaded the whole using `sigbits` go in the extracted file and `CTRL+F` the word `pico` both ways work I found the flag:

> picoCTF{your flag}
