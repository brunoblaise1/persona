---
title: Best way to implement linkedList in javascript
published: Aug 26, 2021
language: English
---

**Summary**: It is important to understand how LinkedList works because they are useful example it is used on the Previous and next page in a web browser

> Introduction

> Prerequisites

> Implementation

> Use cases

**Introduction**

What is a linked list anyway from what Wikipedia says "**A linked list is a sequence of nodes that contain two fields: an integer value and a link to the next node. The last node is linked to a terminator used to signify the end of the list.**"

well Wikipedia gives a good explanation of LinkedList but what does it look like

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/5zipksv10icojyil9s36.jpg)

The image has given a sense of what LinkedList visually

**Prerequisites**

- [x] Know javascript basics
  - [!important] classes
- [x] Useful links
  - [queue](https://dev.to/brunoblaise/best-way-to-implement-a-queue-in-javascript-28o2)
  - [stack](https://dev.to/brunoblaise/complete-guide-in-implementation-of-stack-in-javascript-2m4)
  - [priority queue](https://dev.to/brunoblaise/improved-way-of-implementing-of-priority-queue-in-javascript-11pk)

**Implementation**
Wait...

![Image description](https://media1.giphy.com/media/sTczweWUTxLqg/giphy.gif?cid=ecf05e4707c095ed1aa8a76fc59b904051f23aeed7f9b212&rid=giphy.gif&ct=g)

Hey before we start I want to wish everyone a nice Friday and weekend

Now it's

![Image description](https://media4.giphy.com/media/f6z5TkrTIBZILYOd1t/giphy.gif?cid=ecf05e47ypnpd5yab50az3uf96ldtpt0t28utuhegmboyani&rid=giphy.gif&ct=g)

![Image description](https://cdn.hashnode.com/res/hashnode/image/upload/v1661510918950/QeqejwBNs.png)

Let's break it down

```
class Node {
  constructor(elements, next = null) {
    this.elements = elements;
    this.next = next;
  }
}
```

we are creating a store where we are going to store our nodes it is doing pretty basic things we are creating a constructor after that it has some parameters we will see their use.

```
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

}
```

We are initializing any other class but now we have a null head and size for keeping the length of the linked list now it's time to look at the methods the class uses.

**Methods**

- InsertH: inserting the element at the head of the list.

- add: adding the element at the end of the list.

- insert: adding any element at the index.

- deleteL: deleting element at the end.

- removeFrom: remove any element from the index.

- indexOf: getting the index of any element.

- print: we are printing the LinkedList.

```
insertH(elements) {
    const node = new Node(elements, this.head);

    this.head = node;

    this.size++;
    return node;
  }
```

This function does basic things first it has a parameter and then in the function we initialize the Node class. Remember the store and now we are changing `this.head` to the Node of the head stores the node and the left are primary.

```
add(elements) {
    let node = new Node(elements);

    let current;
    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }
    this.size++;
  }
```

Now we are adding at the last of the list, we are checking if `this.head` is null if so `this.head` is set to the node.
if it is not we go and create `current= this.head to access the properties of the node` after we are looping through the list at the end if we reach there now `current.next = node;` others are basic.

Allow me to jump and first see the easy to hard.

```
   indexOf(elements) {
    let current = this.head;
    let it = 0;
    while (current != null) {
      if (current.elements === elements) {
        console.log('elements', current.elements);
        return it;
      }

      it++;
      current = current.next;
    }
    return null;
  }
  print() {
    let current = this.head;

    let str = '';
    while (current) {
      str += current.elements + '-->';

      current = current.next;
    }

    return console.log(str);
  }

  get length() {
    return console.log(this.size);
  }
```

We are looking that so many methods but they are simply what looks hard is the `indexOf` which I am going to explain

```
 indexOf(elements) {
    let current = this.head;
    let it = 0;
    while (current != null) {
      if (current.elements === elements) {
        console.log('elements', current.elements);
        return it;
      }

      it++;
      current = current.next;
    }
    return null;
  }
```

Here we are treating to get the indexOf any element, now first the current is set to `this.head` then we create a while loop which first we are checking if the current is not equal to null then outside of the loop we are increasing the `it` and then set current to `current.next` then if not the element is not found we `return null`.

```
  insert(elements, index) {
    if (index < 0 || index > this.size) return -1;
    else {
      let node = new Node(elements);

      let current, prev, it;

      current = this.head;
      it = 0;
      if (index === 0) {
        this.insertH(elements);
      } else {
        while (it < index) {
          it++;
          prev = current;
          current = current.next;
        }
        node.next = current;
        prev.next = node;
      }
      this.size++;
    }
  }
```

So the first thing to see is that we create two paraments, the first parameter is getting data and then the second is checking if the index is available then in the function `if (index < 0 || index > this.size) return -1;` is checking if the index is less than 0 or index is greater than size then we return -1 meaning it is null. In the else statement we initialize the `class Node` created three variables then set current to `this.head`, after that we set `it` because we are going to be using it to insert elements, now we see if the index is zero if so we insert it at the head. if not we loop in the list as long as `it ` is less than `index` then we set `prev` to `current` and then `current` to `current.next` then outside the loop

```
// remove the element
 node.next = current;
 prev.next = node;
```

```
removeFrom(index) {
    if (index < 0 || index >= this.size) return -1;
    else {
      let current, prev, it;
      it = 0;
      current = this.head;
      prev = current;
      if (index === 0) {
        this.head = current.next;
      } else {
        while (it < 0) {
          it++;
          prev = current;
          current = current.next;
        }
        prev.next = current.next;
      }
      this.size--;

      return current.elements;
    }
  }
```

Removing an element in the list at the index is simple as the code above illustrates. First, we are checking if the index is less than zero or index is greater than zero if yes then we `return -1` meaning it is `null` the code following is simple but after w check, if the index is equal to zero then we remove the head in else statement we loop over as long as `it`, is less than zero then we increment it after as the below code we set `prev` to `current` and then `current` to `current.next` after that is pretty the basic self-explanatory

```
 prev = current;
 current = current.next;
```

```
  deleteL(elements) {
    let current = this.head;

    let prev = null;
    while (current != null) {
      if (current.elements === elements) {
        if (prev === null) {
          this.head = current.next;
        } else {
          prev.next = current.next;
        }
        this.size--;
        return current.elements;
      }
      prev = current;
      current = current.next;
    }

    return -1;
  }
```

Well, Well deleting is pretty easy to do as we are going to see, first, we create a variable called current as we have done in many of our codes. I suppose you have become familiar with it notice that prev is set to null now we loop over the list as long as the is not null then we check if `current.next` is equal to the `elements` data we inserted in. Then inside the if statement we have another statement that checks if the `prev` is equal to `null ` we remove the element and in the else statement is the same we decrement the `size` and the left is basic.

```
let node = new LinkedList();

node.insertH(1);
node.add(2);

node.add(4);

node.add(5);
node.insert(47, 0);

node.deleteL(1);
console.log(node.indexOf(47));
node.removeFrom(0);

node.length

node.print();
```

**The terminal output**

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/8m8qfeeqqqyp38ttmq2m.png)

The full code.

```
class Node {
  constructor(elements, next = null) {
    this.elements = elements;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insertH(elements) {
    const node = new Node(elements, this.head);

    this.head = node;

    this.size++;
    return node;
  }

  add(elements) {
    let node = new Node(elements);

    let current;
    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }
    this.size++;
  }
  insert(elements, index) {
    if (index < 0 || index > this.size) return -1;
    else {
      let node = new Node(elements);

      let current, prev, it;

      current = this.head;
      it = 0;
      if (index === 0) {
        this.insertH(elements);
      } else {
        while (it < index) {
          it++;
          prev = current;
          current = current.next;
        }
        node.next = current;
        prev.next = node;
      }
      this.size++;
    }
  }

  removeFrom(index) {
    if (index < 0 || index >= this.size) return -1;
    else {
      let current, prev, it;
      it = 0;
      current = this.head;
      prev = current;
      if (index === 0) {
        this.head = current.next;
      } else {
        while (it < 0) {
          it++;
          prev = current;
          current = current.next;
        }
        prev.next = current.next;
      }
      this.size--;

      return current.elements;
    }
  }

  deleteL(elements) {
    let current = this.head;

    let prev = null;
    while (current != null) {
      if (current.elements === elements) {
        if (prev === null) {
          this.head = current.next;
        } else {
          prev.next = current.next;
        }
        this.size--;
        return current.elements;
      }
      prev = current;
      current = current.next;
    }

    return -1;
  }

  indexOf(elements) {
    let current = this.head;
    let it = 0;
    while (current != null) {
      if (current.elements === elements) {
        console.log('elements', current.elements);
        return it;
      }

      it++;
      current = current.next;
    }
    return null;
  }
  print() {
    let current = this.head;

    let str = '';
    while (current) {
      str += current.elements + '-->';

      current = current.next;
    }

    return console.log(str);
  }

  get length() {
    return console.log(this.size);
  }
}

let node = new LinkedList();

node.insertH(1);
node.add(2);

node.add(4);

node.add(5);
node.insert(47, 0);

node.deleteL(1);
console.log(node.indexOf(47));
node.removeFrom(0);

node.length

node.print();

```
