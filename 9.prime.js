function primeCheck(n) {
    if (n === 1 || n === 2 || n === 3 || n === 5) {
        return `${n} is a prime number`
    } else if (n % 2 === 0 || n % 3 === 0 || n % 5 === 0) {
        return `${n} is not a prime number`
    } else {
        return `${n} is a prime number`
    }
}
console.log(primeCheck(7))
console.log(primeCheck(8))
console.log(primeCheck(9))
console.log(primeCheck(11))
console.log(primeCheck(13))
console.log(primeCheck(15))

// lecturer Solution
// Big-O = O(n)
function lecturer(n) {
    if (n < 2) {
        return `L: ${n} is a prime number`
    }
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return `L: ${n} is not a prime number`
        }
    }
    return `L: ${n} is a prime number`
}
console.log(lecturer(7))
console.log(lecturer(8))
console.log(lecturer(9))
console.log(lecturer(11))
console.log(lecturer(13))
console.log(lecturer(15))

// More Optimized Solution
// Big-O = O(square(n))
function mathh(n) {
    if (n < 2) {
        return `M: ${n} is a prime number`
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return `M: ${n} is not a prime number`
        }
    }
    return `M: ${n} is a prime number`
}

console.log(mathh(7))
console.log(mathh(8))
console.log(mathh(9))
console.log(mathh(11))
console.log(mathh(13))
console.log(mathh(15))