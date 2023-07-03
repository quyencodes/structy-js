"use strict";
exports.__esModule = true;
exports.isPrime = void 0;
function isPrime(n) {
    if (n <= 2) {
        return true;
    }
    for (var i = 2; i < n; i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}
exports.isPrime = isPrime;
