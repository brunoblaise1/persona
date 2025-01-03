---
title: Who is it PicoCTF 2023
published: Apr 1, 2023
language: English
---

**100 points**

AUTHOR: JUNIAS BONOU

Description
Someone just sent you an email claiming to be Google's co-founder Larry Page but you suspect a scam.
Can you help us identify whose mail server the email actually originated from?
Download the email file [here]. Flag: picoCTF{FirstnameLastname}

---

Looking into the `.eml` file its not very hard to see that the only IP address there is the attackers IP.

I tried for so long with many different websites to lookup either the mail or the IP and only [https://www.whatismyip.com/ip-whois-lookup/](https://www.whatismyip.com/ip-whois-lookup/) had the name of the person with the relevant IP: 173.249.33.206 and it's

```
Wilhelm Zwalina
```

So the answer is:

> picoCTF{WilhelmZwalina}
