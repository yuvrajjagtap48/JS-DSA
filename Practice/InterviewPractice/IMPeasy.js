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


// function ReverseArray(arr){
//     let l = 0;
//     let r = arr.length - 1;
//     let half = Math.floor(l + (r - l) / 2);
//     while( l <= half){
//         let temp = arr[l];
//         arr[l] = arr[r];
//         arr[r] = temp;
//         ++l;
//         --r;
//     }
//     return arr;
// }
// function ReverseArray(arr){
//     let l = 0;
//     let r = arr.length - 1;
//     let half = Math.floor(l + (r - l) / 2);
//     while(l <= half){
//         arr[l] = arr[l] + arr[r];
//         arr[r] = arr[l] - arr[r];
//         arr[l] = arr[l] - arr[r];
//         ++l;
//         --r;
//     }
//     return arr;
// }


// function Palindrome(str){    
//     let l = 0;
//     let r = str.length - 1;
//     let half = Math.floor(l + (r - l) / 2);
//     while(l <= half){
//         if(str[l] !== str[r]){
//             return false;
//         }
//         ++l;
//         --r;
//     }
//     return true;
// }

// function moveZeros(arr){
//     let x = 0;
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] !== 0){
//             arr[x] = arr[i];
//             x++;
//         }
//     }
//     for(let i = x; i < arr.length; i++){
//         arr[i] = 0;
//     }
//     return arr;
// }

// function MissingNumber(arr){
//     let n = arr.length; 
//     let totalSum = (n * (n +1) / 2);
//     let actualSum = 0;
//     for(let i = 0; i < n; i++){
//         actualSum = actualSum + arr[i];
//     }
//     return totalSum - actualSum;
// }

// function linear(arr, target){
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] === target){
//             return i;
//         }
//     }
//     return -1;
// }

// function Duplicates(arr){
//     let map = {};
//     let res = [];
//     for(let i = 0; i < arr.length; i++){
//         if(!map[arr[i]]){
//             map[arr[i]] = 1;
//         }
//         else{
//             res.push(arr[i]);
//         }
//     }
//     return res;
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
// function frequencyCounter(arr) {
//     let map = {};
//     for(let i = 0; i < arr.length; i++){
//         if(!map[arr[i]]){
//             map[arr[i]] = 1;
//         }
//         else{
//             map[arr[i]]++;
//         }
//     }
//     return map;
// }


function maxSubArray(arr){
    let maxSum = -Infinity;
    for(let i = 0; i < arr.length; i++){
        let sum = 0;
        for(let j = i; j < arr.length; j++){
            sum = sum + arr[j];
            maxSum = Math.max(maxSum, sum);
        }
    }
    return maxSum;
}
// kadane's algorithm
// function maxSubArray(arr){
//     let maxSum = arr[0];
//     let curr = arr[0];
//     for(let i = 0; i < arr.length; i++){
//         curr = Math.max(arr[i], curr + arr[i]);
//         maxSum = Math.max(maxSum, curr);
//     }
//     return maxSum;
// }
const arr = [ -2, 1, -3, 4, -1, 2, 1, -5, 4 ];
console.log(maxSubArray(arr));
