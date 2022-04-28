function addTo80(n) {
  console.log('long time');

  return n + 80;
}

function memoizedAddTo80() {
  let cache = {};

  return (n) => {
    if (n in cache) {
      return cache[n];
    }

    const result = addTo80(n);
    cache[n] = result;

    return cache[n];
  };
}

const memoized = memoizedAddTo80();

console.log('first call: ', memoized(5));
console.log('\n');
console.log('second call: ', memoized(5));
console.log('\n');
console.log('third call: ', memoized(6));
