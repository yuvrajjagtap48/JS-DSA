// function peak(arr) {
//     let maxIndex = 0;
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > arr[maxIndex]) {
//             maxIndex = i;
//         }
//     }
//     return maxIndex;
// }

let result = peak([1, 2, 5, 9, 11, 15, 14, 13, 10, 8, 6, 4]);
console.log(result);

function peak(arr) {
    let l = 0;
    let r = arr.length - 1;
    while (l < r) {
        let mid = Math.floor(l + (r - l) / 2);
        if (arr[mid + 1] > arr[mid]) {
            l = mid + 1;
        }
        else{
            r = mid;
        }
    }
    return l;
}