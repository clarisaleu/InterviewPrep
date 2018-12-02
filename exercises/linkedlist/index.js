// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
  //my sol
  insertFirst1(data) {
    const newNode = new Node(data);
    const oldNode = this.head;
    this.head = newNode;
    this.head.next = oldNode;
  }

  //other sol
  insertFirst2(data) {
    this.head = new Node(data, this.head);
  }

  //other sol
  insertFirst(data) {
    this.insertAt(data, 0);
  }

  // sol 1
  size() {
    let count = 0;
    let node = this.head;

    while (node) {
      node = node.next;
      count++;
    }
    return count;
  }

  getFirst() {
    return this.head;
    // return this.getAt(0);
  }

  // my sol
  getLast1() {
    let node = this.head;
    while (node.next) {
      node = node.next;
    }
    return node;
  }

  // 2nd sol
  getLast() {
    if (!this.head) {
      return null;
    }
    let node = this.head;
    while (node) {
      if (!node.next) {
        return node;
      }
      node = node.next;
    }

    //return this.getAt(this.size()-1);
  }

  //linked list only knows about the head
  clear() {
    this.head = null;
  }

  removeFirst() {
    this.head = this.head.next;
  }

  // my sol
  removeLast1() {
    if (!this.head) {
      return;
    } else if (!this.head.next) {
      this.head = null;
      return;
    }

    let node = this.head;
    while (node.next) {
      if (!node.next.next) {
        node.next = null;
        return;
      }
      node = node.next;
    }
  }

  // other sol 2
  removeLast2() {
    if (!this.head) {
      return;
    } else if (!this.head.next) {
      this.head = null;
      return;
    }

    let node = this.head.next;
    let prev = this.head;

    while (node) {
      if (!node.next) {
        prev.next = null;
        return;
      }
      node = node.next;
      prev = prev.next;
    }
  }
  // other sol 3
  removeLast() {
    if (!this.head) {
      return;
    }
    if (!this.head.next) {
      this.head = null;
      return;
    }

    let node = this.head.next;
    let prev = this.head;

    while (node.next) {
      prev = node;
      node = node.next;
    }
    prev.next = null;
  }

  // my sol
  insertLast1(data) {
    let n = this.head;
    const newNode = new Node(data);
    while (n.next) {
      n = n.next;
    }
    n.next = newNode;
  }
  // other sol using prev methods.
  insertLast2(data) {
    this.getLast().next = new Node(data);
  }

  // other sol 2 using prev methods.
  insertLast(data) {
    const last = this.getLast();
    if (last) {
      // there are existing nodes
      last.next = new Node(data);
    } else {
      // chain is empty
      this.head = new Node(data);
    }
  }

  // my sol
  getAt1(int) {
    let n = this.head;
    let count = 0;

    if (!n) {
      return null;
    }

    while (n) {
      if (count == int) {
        return n;
      }
      count++;
      n = n.next;
    }
    return null;
  }

  // 2nd sol
  getAt(int) {
    let count = 0;
    let node = this.head;
    while (node) {
      if (count == int) {
        return node;
      }
      count++;
      node = node.next;
    }
    return null;
  }

  // reuse method
  removeAt(int) {
    if (!this.head) {
      return;
    }

    if (int == 0) {
      this.head = this.head.next;
      return;
    }
    const prev = this.getAt(int - 1);
    if (!prev || !prev.next) {
      return;
    }

    prev.next = prev.next.next;

    return;
  }

  // my sol
  insertAt(data, int) {
    if (!this.head && int == 0) {
      this.head = new Node(data);
      this.head.next = null;
      return;
    }

    if (int == 0 && this.head) {
      const oldHead = this.head;
      this.head = new Node(data);
      this.head.next = oldHead;
      return;
    }

    const prev = this.getAt(int - 1) || this.getLast();
    const nextNode = prev.next;
    const node = new Node(data);

    prev.next = node;
    node.next = nextNode;
  }

  //2nd sol
  insertAt1(data, int) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }
    if (int === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    const prev = this.getAt(int - 1) || this.getLast();
    const newNode = new Node(data, prev.next);
    prev.next = newNode;
  }

  forEach(fn) {
    let node = this.head;
    let count = 0;
    while (node) {
      fn(node,count);
      node = node.next;
      count++;
    }
  }

  *[Symbol.iterator](){
    let node = this.head;
    while(node){
      yield node;
      node = node.next;
    }
  }

  
}

module.exports = { Node, LinkedList };
