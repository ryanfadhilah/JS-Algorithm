// Big O : O(square(n))
function power(n) {
    if (n < 2 || n % 2 === 1) {
        return `${n} NOT SQUARE ROOT`
    }
    let temp = n
    for (let i = 1; i < n; i++) {
        temp = temp / 2
        if (temp === 1) {
            return `${n} is square root of ${i}`
        }
    }
    return `${n} NOT SQUARE ROOT`
}


console.log(power(1))
console.log(power(2))
console.log(power(3))
console.log(power(4))
console.log(power(128))
console.log(power(129))
