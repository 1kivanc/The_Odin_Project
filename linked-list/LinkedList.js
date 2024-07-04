import Node from "./Node.js";

export default class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  append(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.nextNode) {
        current = current.nextNode;
      }
      current.nextNode = newNode;
    }
    this.length++;
  }

  prepend(value) {
    const newNode = new Node(value, this.head);
    this.head = newNode;
    this.length++;
  }

  size() {
    return this.length;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    let current = this.head;
    while (current && current.nextNode) {
      current = current.nextNode;
    }
    return current;
  }

  at(index) {
    if (index >= this.length || index < 0) {
      return null;
    }
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.nextNode;
    }
    return current;
  }

  pop() {
    if (!this.head) {
      return null;
    }
    if (this.length === 1) {
      const nodeToPop = this.head;
      this.head = null;
      this.length--;
      return nodeToPop;
    }
    let current = this.head;
    let previous = null;
    while (current.nextNode) {
      previous = current;
      current = current.nextNode;
    }
    previous.nextNode = null;
    this.length--;
    return current;
  }

  contains(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.nextNode;
    }
    return false;
  }

  find(value) {
    let current = this.head;
    let index = 0;
    while (current) {
      if (current.value === value) {
        return index;
      }
      current = current.nextNode;
      index++;
    }
    return null;
  }

  toString() {
    let result = "";
    let current = this.head;
    while (current) {
      result += `( ${current.value} ) -> `;
      current = current.nextNode;
    }
    result += "null";
    return result;
  }

  insertAt(value, index) {
    if (index > this.length || index < 0) {
      return;
    }
    if (index === 0) {
      this.prepend(value);
      return;
    }
    if (index === this.length) {
      this.append(value);
      return;
    }
    const newNode = new Node(value);
    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.nextNode;
    }
    newNode.nextNode = current.nextNode;
    current.nextNode = newNode;
    this.length++;
  }

  removeAt(index) {
    if (index >= this.length || index < 0) {
      return;
    }
    if (index === 0) {
      this.head = this.head.nextNode;
      this.length--;
      return;
    }
    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.nextNode;
    }
    current.nextNode = current.nextNode.nextNode;
    this.length--;
  }
}
