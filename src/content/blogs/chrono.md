---
title: Chrono picoCTf 2023
published: Apr 1, 2023
language: English
---

# chrono

**100 points**

AUTHOR: MUBARAK MIKAIL

Description
How to automate tasks to run at intervals on linux servers?
Additional details will be available after launching your challenge instance.

_Note:_ This challenge launches an instance on demand.

---

When we launch the instance and `ssh` to the relevant credentials given to us we are presented with a shell.

Based on the question prompt it had to be `cron` jobs.

After various attempts to access `crontab` itself, I tried looking inside `/etc/crontab` with the `cat` command and it had the flag prompt for my session:

> picoCTF{your flag}
