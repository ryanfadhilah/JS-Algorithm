// Big O(n*n) NOT OPTIMAL
function bubble_sort(arr) {
    let repeat
    do {
        repeat = false
        for (let i = 0; i < arr.length; i++) {
            let temp
            if (arr[i] > arr[i + 1]) {
                temp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = temp
                repeat = true
            }
        }
    } while (repeat);
}

const arr = [8, 20, -2, 4, 6]
bubble_sort(arr)
console.log(arr)




