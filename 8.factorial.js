const factorial = (n) => {
    let count = n
    for (let i = 1; i < n; i++) {
        count = count * (n - i)
    }
    return count
}

console.log(factorial(2)) // 2
console.log(factorial(3)) // 6
console.log(factorial(4)) // 24
console.log(factorial(5)) // 120


// LECTURER SOLUTION


function lecture(n) {
    let count = 1
    for (let i = 2; i <= n; i++) {
        count = count * i
    }
    return count
}

console.log("Lecturer: " + lecture(2))
console.log("Lecturer: " + lecture(3))
console.log("Lecturer: " + lecture(4))
console.log("Lecturer: " + lecture(5))
