// function twoSum(arr, target){
//     let map = {};
//     for(let i = 0; i < arr.length; i++){
//         let diff = target - arr[i];
//         if(map[diff] !== undefined){
//             return [map[diff], i];
//         }
//     }
//     map[arr[i]] = i;
// }


function ReverseArray(arr){
    let l = 0;
    let r = arr.length - 1;
    let half = Math.floor(l + (r - l) / 2);
    while( l <= half){
        let temp = arr[l];
        arr[l] = arr[r];
        arr[r] = temp;
        ++l;
        --r;
    }
    return arr;
}
let arr = [2, 7, 11, 15];
console.log(ReverseArray(arr));