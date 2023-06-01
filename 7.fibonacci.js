const fibonacci = (n) => {
    if (n < 2) {
        return `Fib starts at 2`
    }
    let fib = [0, 1]
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2]
    }
    return fib
}

// 3 [0,1,1]
// 4 [0,1,1,2]
// 5 [0,1,1,2,3]
// 6 [0,1,1,2,3,5]

console.log(fibonacci(-1)) // [0,1] = 1
console.log(fibonacci(1)) // [0,1] = 1
console.log(fibonacci(2)) // [0,1] = 1
console.log(fibonacci(3)) // [0,1,1] = 2
console.log(fibonacci(7)) // [0,1,1,2,3,5,8] =

// big - O = O(n)