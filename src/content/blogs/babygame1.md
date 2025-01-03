---
title: BabyGame01 PicoCTF 2023
published: Apr 1, 2023
language: English
---

**100 points**

AUTHOR: PALASH OSWAL

Description
Get the flag and reach the exit.
Welcome to BabyGame! Navigate around the map and see what you can find! The game is available to download [here](https://github.com/LeonGurin/picoCTF-2023/blob/main/Binary%20Exploitation/babygame01/game). There is no source available, so you'll have to figure your way around the map. You can connect with it using the port they give you.

---

This challenge wasn't solved by me, but all the credits go to @laundry.

Bla bla the game is to get to a specific square in the game using `wasd` cool.

Let's look at the code itself using `IDA`.

```c
int __cdecl main(int argc, const char **argv, const char **envp)
{
  char v4; // [esp+1h] [ebp-AA5h]
  int v5[2]; // [esp+2h] [ebp-AA4h] BYREF
  char v6; // [esp+Ah] [ebp-A9Ch]
  char v7[2700]; // [esp+Eh] [ebp-A98h] BYREF
  unsigned int v8; // [esp+A9Ah] [ebp-Ch]
  int *p_argc; // [esp+A9Eh] [ebp-8h]

  p_argc = &argc;
  v8 = __readgsdword(0x14u);
  init_player(v5);
  init_map(v7, v5);
  print_map(v7, v5);
  signal(2, sigint_handler);
  do
  {
    do
    {
      v4 = getchar(p_argc);
      move_player(v5, v4, v7);
      print_map(v7, v5);
    }
    while ( v5[0] != 29 );
  }
  while ( v5[1] != 89 );
  puts("You win!");
  if ( v6 )
  {
    puts("flage");
    win();
    fflush(stdout);
  }
  return 0;
}
```

To #win we need to make `v6` not zero.

Because it was placed super well above the varible `v7` I tried for ages to perfom a buffer overflow using the `getchar()` function itself, dud.

The relevant piece of code to solve this is in the `move_player` function.

```c
_BYTE *__cdecl move_player(_DWORD *a1, char a2, int a3)
{
  _BYTE *result; // eax

  if ( a2 == 108 )
    player_tile = getchar();
  if ( a2 == 112 )
    solve_round(a3, a1);
  *(_BYTE *)(a1[1] + a3 + 90 * *a1) = 46;
  switch ( a2 )
  {
    case 'w':
      --*a1;
      break;
    case 's':
      ++*a1;
      break;
    case 'a':
      --a1[1];
      break;
    case 'd':
      ++a1[1];
      break;
  }
  result = (_BYTE *)(a1[1] + a3 + 90 * *a1);
  *result = player_tile;
  return result;
}
```

2 secret commands are now shown to us:

- `l` -> used to assign `player_tile` a value from `getchar()`

- `p` -> solve the game.

## Now time to solve

## Before we begin remember to first try all move `wasd` so that you don't get existed in the game before finishing it.

- `w` and `a` using those two we can win move the player to `Player position: 0 0` and then using `a` move your player to go off map a till you see that the flag have changed from 0 to 46 or 64

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/bhf37otl3okedhwqhb4b.jpeg)

Now you can move to the final position to win using `l` and then `p` to win and there you go your flag.

> picoCTF{your flag}
