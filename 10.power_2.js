function power(n) {

    if (n < 2 || n % 2 != 0) {
        return `${n} is not a power of 2`
    }
    let count = n
    for (let i = 1; i < n; i++) {
        count = count / 2
        if (count === 1) {
            return `${n} is 2 power ${i}`
        }
        if (count < 1) {
            return `${n} is not a power of 2`
        }
    }
}
// Big O : O(square(n))

console.log(power(1))
console.log(power(2))
console.log(power(3))
console.log(power(4))
console.log(power(128))
console.log(power(129))
