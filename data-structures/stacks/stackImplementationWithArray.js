class Stack {
  constructor() {
    this.list = [];
  }

  peek() {
    return this.list[this.list.length - 1];
  }

  push(value) {
    this.list.push(value);

    return this;
  }

  pop() {
    this.list.pop();

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
