function isPrime(n: number): boolean {
  if (n < 2) return false

  for (let i: number = 2; i < n; i += 1) {
    if (n % i == 0) return false
  }

  return true
}

export {
  isPrime
}