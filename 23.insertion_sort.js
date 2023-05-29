

function insertion(arr) {
    for (let i = 1; i < arr.length; i++) {
        let sorted = i - 1
        let unsorted = arr[i]
        while (arr[sorted] > unsorted && sorted >= 0) {
            arr[sorted + 1] = arr[sorted]
            sorted = sorted - 1
        }
        arr[sorted + 1] = unsorted
    }
}
const arr = [-6, 7, -8, 2, 4, -5, -1, 9]
insertion(arr)
console.log(arr)
    //     for (let i = 1; i < arr.length; i++) {
    //         let unsorted = arr[i]
    //         let sorted = i - 1
    //         while (sorted >= 0 && arr[sorted] > unsorted) {
    //             arr[sorted + 1] = arr[sorted]
    //             sorted = sorted - 1
    //         }
    //         arr[sorted + 1] = unsorted
    //     }