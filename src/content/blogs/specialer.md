---
title: Specialer picoCTF 2023
published: Apr 1, 2023
language: English
---

# Specialer

**300 points**

Description
Reception of Special has been cool to say the least. That's why we made an exclusive version of Special, called Secure Comprehensive Interface for Affecting Linux Empirically Rad, or just 'Specialer'. With Specialer, we really tried to remove the distractions from using a shell. Yes, we took out spell checker because of everybody's complaining. But we think you will be excited about our new, reduced feature set for keeping you focused on what needs it the most. Please start an instance to test your very own copy of Specialer.

_Note:_ This challenge launches an instance on demand.

---

Seeing as though I have not solved (maybe yet?) `Special` this challenge was way easier (and thus the point difference bothers me).

Connecting into the shell we're not allowed a lot of things like `cat, ls...`.

My solution was as follows:

```bash
echo "$( < /home/ctf-player/ala/kazam.txt)"
```

> picoCTF{your flag}
