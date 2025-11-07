const originalNumbers = [2, 5, 8, 10, 3];

const evens = [];
originalNumbers.forEach((n) => {
  if (n % 2 === 0) evens.push(n);
});

console.log(evens);
