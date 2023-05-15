// Bit O = O(n)

const arr = [-5, 2, 10, 4, 6]

function find(n) {

    for (let i = 0; i < arr.length; i++) {
        if (n === arr[i]) {
            return `${n} is at ${i} index`
        }
    }
    return `the number ${n} doesnt exist within array`
}

console.log(find(10))
console.log(find(6))
console.log(find(20))