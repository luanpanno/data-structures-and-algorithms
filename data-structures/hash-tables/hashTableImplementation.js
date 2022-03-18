class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  get(key) {
    const address = this._hash(key);
    const currentBucket = this.data[address];

    for (let i = 0; i < currentBucket?.length; i++) {
      if (currentBucket[i][0] === key) {
        return currentBucket[i][1];
      }
    }
  }

  set(key, value) {
    const address = this._hash(key);
    const bucket = this.data[address];

    if (!bucket) {
      this.data[address] = [];
    }

    for (let i = 0; i < bucket?.length; i++) {
      if (bucket[i][0] === key) {
        this.data[address][i][1] = value;

        return;
      }
    }

    this.data[address].push([key, value]);
  }

  keys() {
    const keysArray = [];

    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        keysArray.push(this.data[i][0][0]);
      }
    }

    return keysArray;
  }

  _hash(key) {
    let hash = 0;

    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }

    return hash;
  }
}

const myHash = new HashTable(3);

myHash.set('grapes', 10000);
myHash.set('apples', 2000);
myHash.set('oranges', 1000);

console.log('myHash: ', myHash.data);
