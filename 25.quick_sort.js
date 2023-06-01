// worst case O(n^2)
// average case O(nlogn)

function quick_sort(arr) {
    if (arr.length < 2) {
        return arr
    }
    let pivot = arr[arr.length - 1]
    let left = []
    let right = []
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return [...quick_sort(left), pivot, ...quick_sort(right)]
}

const arr = [-6, 7, -8, 2, 4, -5, -1, 9]
console.log(quick_sort(arr))