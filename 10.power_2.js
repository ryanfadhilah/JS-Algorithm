// Big O : O(square(n))
function power(n) {
    let count = n
    if (n % 2 !== 0 || n < 1) {
        return `${n} is not a square root of 2`
    }
    for (let i = 1; i < n; i++) {
        count = count / 2
        if (count == 1) {
            return `${n} : square root of ${i} `
        }
    }
}


console.log(power(1))
console.log(power(2))
console.log(power(3))
console.log(power(4))
console.log(power(128))
console.log(power(129))
