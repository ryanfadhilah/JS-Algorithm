// Bit O = O(n)

const arr = [-5, 2, 10, 4, 6]

function find(target, arr) {
    for (let i = 0; i <= arr.length - 1; i++) {
        if (target === arr[i]) {
            return `number ${target} is at index ${i}`
        }
    }
    return `${target} not found`
}

console.log(find(10, [-5, 2, 10, 4, 6]))
console.log(find(6, [-5, 2, 10, 4, 6]))
console.log(find(20, [-5, 2, 10, 4, 6]))