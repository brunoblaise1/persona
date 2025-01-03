---
title: MatchTheRegex
published: Apr 1, 2023
language: English
---


**100 points**

AUTHOR: SUNDAY JACOB NWANYIM

Description
How about trying to match a regular expression
The website is running here.

_Note:_ This challenge launches an instance on demand.

---

Looking inside the script tag we can see:

```html
<script>
  function send_request() {
    let val = document.getElementById("name").value;
    // ^p.....F!?
    fetch(`/flag?input=${val}`)
      .then((res) => res.text())
      .then((res) => {
        const res_json = JSON.parse(res);
        alert(res_json.flag);
        return false;
      });
    return false;
  }
</script>
```

The regex is supposed to be `^p.....F!?`, literally the first and only guess was `picoCTF`, when I entered it gave the flag:

> picoCTF{your flag}
