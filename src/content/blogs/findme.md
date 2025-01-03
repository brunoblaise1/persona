---
title: findme
published: Apr 1, 2023
language: English
---

# findme

**100 points**

Help us test the form by submiting the username as test and password as test!

_Note:_ This challenge launches an instance on demand.

---

Welp I'm not sure what's happening but I did solve this.

I used python script but event burp suite may be used to do this which is easy, but I find this one very easy.

Remember to remove and add the port they gave you.

```python
import requests

headers = {
  'Host': 'saturn.picoctf.net:port',
  # 'Content-Length': '30',
  'Cache-Control': 'max-age=0',
  'Upgrade-Insecure-Requests': '1',
  'Origin': 'http://saturn.picoctf.net:port/',
  'Content-Type': 'application/x-www-form-urlencoded',
  'User-Agent':
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.5414.120 Safari/537.36',
  'Accept':
  'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,/;q=0.8,application/signed-exchange;v=b3;q=0.9',
  'Referer': 'http://saturn.picoctf.net:port/',
  # 'Accept-Encoding': 'gzip, deflate',
  'Accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
  'Connection': 'close',
}

data = {
  'username': 'test',
  'password': 'test!',
}

response = requests.post('http://saturn.picoctf.net:port/login',
                         headers=headers,
                         data=data,
                         verify=False,
                         allow_redirects=False)
# Base 64 id heaeder
part_1 = response.headers

response = requests.post('http://saturn.picoctf.net:port/login',
                         headers=headers,
                         data=data,
                         verify=False)
# Base 64 id header
part_2 = response.text


print(part_1, part_2)
```

NOw decrypte the `ids` from base64 which gave the two parts of the flag that when combined gave me:

> picoCTF{your flag}
