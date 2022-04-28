function findFactorialRecursive(number) {
  if (number <= 2) return number;

  return number * findFactorialRecursive(number - 1);
}

function findFactorialIterative(number) {
  if (number <= 2) return number;

  let answer = 1;

  for (let i = 2; i <= number; i++) {
    answer *= i;
  }

  return answer;
}

// console.log(findFactorialIterative(5));
console.log(findFactorialRecursive(5));
