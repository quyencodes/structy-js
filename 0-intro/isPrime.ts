function isPrime(n: number): boolean {
  if (n <= 2) {
    return true
  }
  for (let i: number = 2; i < n; i ++) {
    if (n % i == 0) {
      return false
    }
  }
  return true
}

export {
  isPrime
}