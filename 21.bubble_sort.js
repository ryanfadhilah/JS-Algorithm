// Big O(n*n) NOT OPTIMAL
function bubble_sort(arr) {
    let temp
    // ini dilakuakan sebanyak array
    for (let i = 0; i < arr.length - 1; i++) {
        // 
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] < arr[j + 1]) {
                temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
}

const arr = [8, 20, -2, 4, 6]
bubble_sort(arr)
console.log(arr)



// lakukan sebanyak 5 x
// kalo angka depan lebih rendah dari angka belakang, maka tuker

// const arr2 = [8, 20, -2, 4, 6]
const arr2 = [8, 20, -2, 4, 6]
function bubble_sort2(arr2) {
    let memory
    let repeat = false
    // ngelakuin sebanyak panjang array / kebetulan 5
    do {
        for (let i = 0; i < arr2.length; i++) {
            // 20 > 8
            if (arr2[i] > arr2[i + 1]) {
                memory = arr2[i]
                arr2[i] = arr2[i + 1]
                arr2[i + 1] = arr2[i]
                repeat = true
            }
        }
        // while repeat nya false, BERHENTI
    } while (repeat);

}



bubble_sort(arr2)
console.log(arr2)

