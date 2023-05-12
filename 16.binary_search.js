function binary_search(arr, target) {
    let left = 0
    let right = arr.length - 1

    while (left <= right) {

        let middle = Math.floor((left + right) / 2)

        if (target === arr[middle]) {
            return `number: ${target} is within index ${middle} of the array`
        }

        if (target < arr[middle]) {
            right = middle - 1
        } else {
            left = middle + 1
        }
    }
    return `${target} it not found within the array`
}


console.log(binary_search([-5, 2, 4, 6, 10], -5))
console.log(binary_search([-5, 2, 4, 6, 10], 2))
console.log(binary_search([-5, 2, 4, 6, 10], 10))
console.log(binary_search([-5, 2, 4, 6, 10], 4))
console.log(binary_search([-5, 2, 4, 6, 10], 6))
console.log(binary_search([-5, 2, 4, 6, 10], 7))