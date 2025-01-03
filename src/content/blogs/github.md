---
title: How to hack GitHub contribution graph
published: Jan 1, 2024
language: English
---

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/o1qut1m9n2f2ht22bifm.jpeg)

Happy new year everyone 🎉✨, this will be my first article in this year so recently I was playing with [gitfiti](https://github.com/gelstudios/gitfiti) people who aren't familiar with it let us just say it is a cool tool used to draw a shape on your GitHub contribution graph but There is something wrong with it. Take this with a grainy of salt this is not absolute and I haven't tested it deeply the authors know better.

Basically the tool has a scale of 0-4 and as the value increase so as the color becomes more darker. They have different functions that work together to generate fake commit messages simply an image is converted into ASCII characters and put into array of other seven arrays [Jack Herrington, has a great a video how those arrays are arranged in that way](https://www.youtube.com/watch?v=_ZQSPYDlk3U) and are used to create fake commit message with different dates according to the ASCII characters to create that shape; here is an example: 👇

# The problem part

```
GIT_AUTHOR_DATE=2023-04-14T12:00:00 GIT_COMMITTER_DATE=2023-04-14T12:00:00 git commit --allow-empty -m "gitfiti"

```

Can you see the problem if not here is the problem

> GIT_AUTHOR_DATE

and

> GIT_COMMITTER_DATE

are given previous year and month this introduces a bug in the program because one has to wait for day or two to see changes if any 🤔

# The solution part

The solution is simple than you think they only thing to do is to target future year especially at the start of the year and this is how I have done it, let me show you my screenshots I just made like right now to prove this.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/64vprdzco3pxwftsqrvk.jpeg)

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/hbrbhp6ixkggesoa91v5.jpeg)

so what I did was just change the year and boom that was it

```
GIT_AUTHOR_DATE=2024-04-14T12:00:00 GIT_COMMITTER_DATE=2024-04-14T12:00:00 git commit --allow-empty -m "gitfiti"

```

I am making a PR like right now to fix this bug but wait now there is a new issue, does it mean that we have to wait at the end of the year to see these results. Honestly I don't know may be; some of you guys can figure it out.

Thanks 😎 for reading if you find this interesting leave a follow and make sure to follow me on [GitHub](https://github.com/brunoblaise), Take this as my personal view and my experience using the program this may vary.
