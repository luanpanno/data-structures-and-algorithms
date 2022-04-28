let calculations = 0;

function fibonacci(n) {
  if (n < 2) return n;

  return fibonacci(n - 1) + fibonacci(n - 2);
}

function mainFibonacci() {
  let cache = {};

  return (n) => {
    calculations++;

    if (n in cache) {
      return cache[n];
    }

    cache[n] = fibonacci(n);

    return cache[n];
  };
}

const memoizedFib = mainFibonacci();

console.log(memoizedFib(10));
console.log(memoizedFib(10));
