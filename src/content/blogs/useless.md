---
title: Useless picoCTF 2023
published: Apr 1, 2023
language: English
---

# useless

**100 points**

AUTHOR: LOIC SHEMA

Description
There's an interesting script in the user's home directory
The work computer is running SSH. We've been given a script which performs some basic calculations, explore the script and find a flag.
Hostname: saturn.picoctf.net
Port: //port number given to you
Username: picoplayer
Password: password

_Note:_ This challenge launches an instance on demand.

---

That was a tricky challenge, in the home directory there is a file named `useless` that does command line arithmetic, spoiler, it does nothing.

The interesting thing to notice was the code itself, specifically the line:

```bash
else
    echo "Read the manual"
```

Using `man` on the script we get the flag hidden at the bottom of the page.

> picoCTF{your flag}
