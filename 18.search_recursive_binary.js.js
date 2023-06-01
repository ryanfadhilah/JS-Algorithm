function recursive_binary(arr, target) {
    return search(arr, target, 0, arr.length)
}

function search(arr, target, start, end) {
    if (start > end) {
        return `${target} NOT FOUND`
    }
    let mid = Math.floor((start + end) / 2)

    if (target === arr[mid]) {
        return ` ${target}: Index ${mid}`
    }
    if (target < arr[mid]) {
        return search(arr, target, start, mid - 1)
    } else {
        return search(arr, target, mid + 1, end)
    }
}




console.log(recursive_binary([-5, 2, 4, 6, 10], -5))
console.log(recursive_binary([-5, 2, 4, 6, 10], 2))
console.log(recursive_binary([-5, 2, 4, 6, 10], 10))
console.log(recursive_binary([-5, 2, 4, 6, 10], 4))
console.log(recursive_binary([-5, 2, 4, 6, 10], 6))
console.log(recursive_binary([-5, 2, 4, 6, 10], 7))