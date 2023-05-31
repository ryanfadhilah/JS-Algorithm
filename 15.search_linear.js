// Bit O = O(n)

const arr = [-5, 2, 10, 4, 6]

function find(target, arr) {
    for (let i = 0; i < arr.length; i++) {
        if (target === arr[i]) {
            return `${target} is at index ${i}`
        }
    }
    return `${target} NOT FOUND`
}

console.log(find(-5, [-5, 2, 10, 4, 6]))
console.log(find(10, [-5, 2, 10, 4, 6]))
console.log(find(6, [-5, 2, 10, 4, 6]))
console.log(find(20, [-5, 2, 10, 4, 6]))