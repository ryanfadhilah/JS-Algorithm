function factorial(n) {
    let count = n
    for (let i = 1; i < n; i++) {
        count = count * (n - i)
    }
    return count
}

console.log(factorial(2))
console.log(factorial(3))
console.log(factorial(4))
console.log(factorial(5))
