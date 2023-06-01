// Descending 
const factorial = (n) => {
    let count = n
    for (let i = 1; i < n; i++) {
        count = count * (n - i)
    }
    return count
}

console.log("Descending: " + factorial(2)) // 2
console.log("Descending: " + factorial(3)) // 6
console.log("Descending: " + factorial(4)) // 24
console.log("Descending: " + factorial(5)) // 120


// LECTURER SOLUTION
// Ascending

function lecture(n) {
    let count = 1
    for (let i = 1; i <= n; i++) {
        count = count * i
    }
    return count
}

console.log("Lecturer: " + lecture(2))
console.log("Lecturer: " + lecture(3))
console.log("Lecturer: " + lecture(4))
console.log("Lecturer: " + lecture(5))
