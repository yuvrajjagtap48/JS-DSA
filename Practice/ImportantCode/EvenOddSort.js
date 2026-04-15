// function evenOddSort(arr) {
//     let left = 0;
//     let right = arr.length - 1;
//     while(left < right){
//         if(arr[left] % 2 === 0){
//             ++left;
//         }
//         else if(arr[right] % 2 === 1){
//             --right;
//         }
//         else{
//             let temp = arr[left];
//             arr[left] = arr[right];
//             arr[right] = temp;
//             ++left;
//             --right;
//         }
    
//     }
//     return arr;
// }

let arr = [5, 2, 11, 4, 1, 6];
console.log(evenOddSort(arr));

// function evenOddSort(arr) {
//     let even = [];
//     let odd = [];
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] % 2 === 0){
//             even.push(arr[i]);
//         }
//         else{
//             odd.push(arr[i]);
//         }
//     }
//     return even.concat(odd);
// }

function evenOddSort(arr) {
    let left = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            let temp = arr[left];
            arr[left] = arr[i];
            arr[i] = temp;
            ++left;
        }
    }
    return arr;
}
