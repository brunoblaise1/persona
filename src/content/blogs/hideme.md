---
title: Hideme PicoCTF 2023
published: Apr 1, 2023
language: English
---


**100 points**

AUTHOR: GEOFFREY NJOGU

Description
Every file gets a flag.
The SOC analyst saw one image been sent back and forth between two people. They decided to investigate and found out that there was more than what meets the eye [here]

---

The file is a normal `PNG` image with pretty much nothing suspicious other than a hidden file within it accessed by `binwalk -e nameofthefile`.

`cd`-in into the directory named secret generated from the extraction had an image with the flag prompt in it:

> picoCTF{your port}
