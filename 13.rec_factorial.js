// big O : O(n)
// 5 = 5 * 4 * 3 * 2 * 1
// 4 = 4 * 3 * 2 * 1
// 3 = 3 * 2 * 1
// 2 = 2 * 1
// 1 = 1

function rec_factorial(n) {
    if (n === 0) {
        return 1
    }
    return n * rec_factorial(n - 1)
}

console.log(rec_factorial(5))
console.log(rec_factorial(4))
console.log(rec_factorial(3))
console.log(rec_factorial(2))
console.log(rec_factorial(1))
