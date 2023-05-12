function rec_fibonacci(n) {
    if (n < 2) {
        return n
    }
    return rec_fibonacci(n - 1) + rec_fibonacci(n - 2)
}

console.log(rec_fibonacci(0)) // 0
console.log(rec_fibonacci(1)) // 0, 1, 1
console.log(rec_fibonacci(6)) // 0, 1, 1, 2, 3, 5, 8

// Best solution is ITERATIVE : O(n)
// Worst solution is Recursion : O(2^n)