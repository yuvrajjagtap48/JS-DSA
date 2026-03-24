// function close(arr, k, x) {
//     let l = 0;
//     let r = arr.length - 1;
//     while (r - l >= k) {
//         if (Math.abs(arr[l] - x) > Math.abs(arr[r] - x)) {
//             l++;
//         }
//         else {
//             r--;
//         }
//     }
//     let result = [];
//     for (let i = l; i <= r; i++) {
//         result.push(arr[i]);
//     }
//     return result;
// }

let result = close([1, 1, 2, 2, 3, 3, 4, 5, 5, 8, 8], 4, 5);
console.log(result);

function close(arr, k, x) {
    let l = 0;
    let r = arr.length - 1;
    while (l < r) {
        let mid = Math.floor(l + (r - l) / 2);
        if ((arr[mid + k] - x) < (x - arr[mid])) {
            l = mid + 1;
        }
        else {
            r = mid;
        }
    }
    let result = [];
    for (let i = l; i < l + k; i++) {
        result.push(arr[i]);
    }
    return result;
}