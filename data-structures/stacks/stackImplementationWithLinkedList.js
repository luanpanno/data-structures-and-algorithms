class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  push(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
      this.length++;

      return this;
    }

    const holdingPointer = this.top;

    this.top = newNode;
    this.top.next = holdingPointer;
    this.length++;

    return this;
  }

  pop() {
    if (!this.top) return null;

    const holdingPointer = this.top.next;

    this.top = holdingPointer;
    this.length--;

    return this;
  }
}

const myStack = new Stack();

myStack.push('Google');
myStack.push('Udemy');
myStack.push('Discord');
// myStack.pop();
console.log('myStack.peek(): ', myStack.peek());

console.log('myStack: ', myStack);
