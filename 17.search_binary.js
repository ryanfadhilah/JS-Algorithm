// Big O : O(logn) 
function binary_search(arr, target) {
    let start = 0
    let end = arr.length
    for (let i = 0; i < arr.length; i++) {
        let mid = Math.floor((start + end) / 2)
        if (target === arr[mid]) {
            return `${target} : index ${mid}`
        }
        if (target > arr[mid]) {
            start = mid + 1
        }
        else {
            end = mid - 1
        }
    }
    return `${target} NOT FOUND`
}

console.log(binary_search([-5, 2, 4, 6, 10], -5))
console.log(binary_search([-5, 2, 4, 6, 10], 2))
console.log(binary_search([-5, 2, 4, 6, 10], 10))
console.log(binary_search([-5, 2, 4, 6, 10], 4))
console.log(binary_search([-5, 2, 4, 6, 10], 6))
console.log(binary_search([-5, 2, 4, 6, 10], 7))
