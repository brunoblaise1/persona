---
title: 2 neat Postman tricks you should know.
published: Jan 13, 2024
language: English
---

**Introduction**
We use postman every day and if not, you should consider using it, postman is one of the most powerful tools that developers use to test their Apis but most of them don't use its full potential. In this article we are going to go over 2 tricks that could save your time.

**Prerequisites**

This is all beginner friendly.

**Let's get started! 🤞**

We will walk ourselves from easy to hard.

## 1. Generating code

Postman can help you integrate API calls into your applications by [generating code snippets](https://learning.postman.com/docs/sending-requests/generate-code-snippets/) in various coding languages.

### let's see an example

Every request you make in postman, has a generation tab where you can generate code.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/56g15k6dawb25ettqgot.png)

Once you open code generation tab you can choose language of your choice

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/8kbazcs8fqo0013fdv7m.png)

## 2. Introduction to variables and scripting

### Postman allows you to save values as variables so that you can:

Reuse values to keep your work DRY (Don’t Repeat Yourself)
Hide sensitive values like API keys from being shared publicly

![image description](https://assets.postman.com/postman-docs/v10/var-scope-v10.jpg)

The GIF below shows how to create a variable locally in your collection.

![variable creation](https://everpath-course-content.s3-accelerate.amazonaws.com/instructor%2F4qlhnpfiaeqby6zwhuhhmacvx%2Fpublic%2F1694437918%2Fsetting+base+url.1694437917654.gif)

### Now how do we set in programmatically?

Postman allows you to add automation and dynamic behaviors to your collections with [scripting](https://learning.postman.com/docs/writing-scripts/intro-to-scripts/).

Postman will automatically execute any provided scripts during two events in the request flow:

Immediately before a request is sent: [pre-request](https://learning.postman.com/docs/writing-scripts/pre-request-scripts/) script (Pre-request Script tab of request).
Immediately after a response comes back: [test script](https://learning.postman.com/docs/writing-scripts/test-scripts/) (Tests tab of request).

## The `pm` object

Postman has a helper object named pm that gives you access to data about your Postman environment, requests, responses, variables and testing utilities.

### let's see an example

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/j1yqk5k3ogpcjj540fl3.jpeg)

For example, you can access the JSON response body from an API with:

```js
pm.response.json();
```

You can also programmatically get collection variables like the value of baseUrl with:

```js
pm.collectionVariables.get(“baseUrl”)
```

In addition to getting variables, you can also set them with

```js
pm.collectionVariables.set("variableName", "variableValue");
```

like this:

```js
pm.collectionVariables.set(“myVar”, “foo”)
```

![alt text](https://everpath-course-content.s3-accelerate.amazonaws.com/instructor%2F4qlhnpfiaeqby6zwhuhhmacvx%2Fpublic%2F1694637148%2FScreen+Recording+2023-09-14+at+2.00.14+AM.1694637147685.gif)

and that is all I know I should have gone deep but my goal wasn't to go deep, and I have provided links for someone who wants to go advanced in **testing**

# Credits

- Massive credit goes to @postmanacademy for the high-quality images, information and the inspiration to make this article.

Thanks 😎 for reading if you find this interesting leave a follow and make sure to Follow me on GitHub [@brunoblaise](https://github.com/brunoblaise)❤
