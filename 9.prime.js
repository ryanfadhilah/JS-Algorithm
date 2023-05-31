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
    if (n < 1) {
        return `everything below 2 is a prime number`
    }
    for (let i = 2; i < n / 2; i++) {
        if (n % i === 0) {
            return `${n} Is not a prime Number`
        }
    }
    return `${n} is a prime number`
}
console.log("Lecturer: " + lecturer(2))
console.log("Lecturer: " + lecturer(3))
console.log("Lecturer: " + lecturer(5))
console.log("Lecturer: " + lecturer(7))
console.log("Lecturer: " + lecturer(8))
console.log("Lecturer: " + lecturer(9))
console.log("Lecturer: " + lecturer(11))
console.log("Lecturer: " + lecturer(13))
console.log("Lecturer: " + lecturer(15))
console.log("Lecturer: " + lecturer(51))
console.log("Lecturer: " + lecturer(83))
console.log("Lecturer: " + lecturer(89))
console.log("Lecturer: " + lecturer(97))

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