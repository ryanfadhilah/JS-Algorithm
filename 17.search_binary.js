// Big O : O(logn) 
function binary_search(arr, target) {
    let left = 0
    let right = arr.length - 1
    for (let i = 0; i <= arr.length - 1; i++) {
        let mid = Math.floor((left + right) / 2)
        if (target === arr[mid]) {
            return `Number ${target} is at index ${mid}`
        }
        if (target <= arr[mid]) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    return `num ${target} doesnt exist`
}

console.log(binary_search([-5, 2, 4, 6, 10], -5))
console.log(binary_search([-5, 2, 4, 6, 10], 2))
console.log(binary_search([-5, 2, 4, 6, 10], 10))
console.log(binary_search([-5, 2, 4, 6, 10], 4))
console.log(binary_search([-5, 2, 4, 6, 10], 6))
console.log(binary_search([-5, 2, 4, 6, 10], 7))
