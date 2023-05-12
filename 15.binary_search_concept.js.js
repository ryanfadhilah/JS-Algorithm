// find number in an array
// arr = [-5, 2, 10, 4, 6] T = 10 | Return  2
// arr = [-5, 2, 10, 4, 6] T = 6  | Return  4


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