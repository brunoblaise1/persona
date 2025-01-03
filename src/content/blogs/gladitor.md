---
title: Ready Gladiator 0
published: Apr 1, 2023
language: English
---

# Ready Gladiator 0

**100 points**

AUTHOR: LT 'SYREAL' JONES

Description
Can you make a CoreWars warrior that always loses, no ties?
Your opponent is the Imp. The source is available [here]. If you wanted to pit the Imp against himself, you could download the Imp and start your own corewars server

_Note:_ This challenge launches an instance on demand.

---

Ok so for this challenge I had to learn what `CoreWars` was, and its apparently its a game between two programs that are written in `RedCode` which is a pseudo-assembly language.

Our mission is to lose to the program provided 100 times.

After trying out what will happen if I provide the same code to the server, we just ended up with 100 ties.

So, I just deleted the only instruction that does operations in the game and the warrior

```c
;redcode
;name Imp Ex
;assert 1
end
```

I lost which gave the flag:

> picoCTF{your flag}
