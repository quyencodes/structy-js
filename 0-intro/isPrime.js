/*
1. Don't have to check 1 or n itself, only the numbers in between

*/

const isPrime = (n) => {
  if (n == 1) return false;

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
};

module.exports = {
  isPrime,
};
