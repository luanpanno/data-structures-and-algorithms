class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  list(index) {
    return Object.values(this.data);
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;

    this.increaseLength();
  }

  pop() {
    const lastIndex = this.length - 1;
    const item = this.data[lastIndex];

    delete this.data[lastIndex];

    this.decreaseLength();

    return item;
  }

  delete(index) {
    const item = this.data[index];

    this.shiftItems(index);

    return item;
  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }

    delete this.data[this.length - 1];

    this.decreaseLength();
  }

  increaseLength() {
    this.length += 1;
  }

  decreaseLength() {
    this.length -= 1;
  }
}

const newArray = new MyArray();

console.log('newArray: ', newArray);

newArray.push('hi');
newArray.push('you');
newArray.push('!');

newArray.delete(0);
console.log('newArray.list(): ', newArray.list());

console.log('newArray: ', newArray);
