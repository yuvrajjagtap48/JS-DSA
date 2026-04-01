// function frequencyCounter(arr) {
//     let map = {};
//     for(let i = 0; i < arr.length; i++){
//         // map[arr[i]] = map[arr[i]] || 0;
//         if(!map[arr[i]]){
//             map[arr[i]] = 1;
//         }
//         else{
//             map[arr[i]]++;
//         }
//     }
//     return map;
// }

// function duplicate(arr) {
//     let duplicates = [];
//     let map = {};
//     for(let i = 0; i < arr.length; i++){
//         if(!map[arr[i]]){
//             map[arr[i]] = 1;
//         }
//         else{
//             duplicates.push(arr[i]);
//         }
//     }
//     return duplicates;
// }

// function RemoveDuplicates(arr){
//     let map = {};
//     let res = [];
//     for(let i = 0; i < arr.length; i++){
//         if(!map[arr[i]]){
//             map[arr[i]] = 1;
//             res.push(arr[i]);
//         }
//     }
//     return res; 
// }

function firstUnique(arr){
    let map = {};
    for(let i = 0; i < arr.length; i++){
        if(!map[arr[i]]){
            map[arr[i]] = 1;
        }
        else{
            map[arr[i]]++;
        }
    }
    for(let i = 0; i < arr.length; i++){
        if(map[arr[i]] === 1){
            return arr[i];
        }
    }
    return -1;
}
let arr = [1, 2, 3, 3, 3, 1, 4];
console.log(firstUnique(arr));
