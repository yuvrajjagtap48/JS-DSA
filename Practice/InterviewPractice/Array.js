// function findMaxMinArray(arr) {
//     let max = arr[0];
//     let min = arr[0];
//     for(let i = 1; i < arr.length; i++){
//         if(arr[i]> max){
//             max= arr[i];
//         }
//         else if(arr[i] < min){
//             min = arr[i];
//         }
//     }
//     return {max, min};
// }
// let arr = [3, 1, 4, 1, 5, 9];
// let result = findMaxMinArray(arr);
// console.log("Max:", result.max);
// console.log("Min:", result.min);


// function reverse(arr){
//     let res=[];
//     for(let i = arr.length-1; i >= 0; i--){
//         res.push(arr[i]);
//     }
//     return res;
// }
// function reverse(arr){
//     let l = 0;
//     let r = arr.length-1;
//     while(l < r){
//         // [arr[l], arr[r]] = [arr[r], arr[l]];
//         let temp = arr[l];
//         arr[l] = arr[r];
//         arr[r] = temp;
//         ++l;
//         --r;
//     }
//     return arr;
// }
// let arr = [3, 1, 4, 1, 5, 9];
// let result = reverse(arr);
// console.log(result);


// destructuring 
// function swap(a,b){
//     [a,b] = [b,a]
//     return [a,b];
// }
// function swap(a,b){
//     a = a ^ b;
//     b = a ^ b;
//     a = a ^ b;
//     return [a,b];
// }
// console.log(swap(5,10));



// function isSorted(arr){
//     let n = arr.length;
//     for(let i = 0; i < n; i++){
//         for(let j = i + 1; j < n; j++){
//             if(arr[i] > arr[j]){
//                 return false;
//             }
//         }
//     }
//     return true;
// }
// function isSorted(arr){
//     for(let i = 1; i < arr.length; i++){
//         if(arr[i] < arr[i - 1]){
//             return false;
//         }
//     }
//     return true;
// }
// let arr = [1,2,3, 4, 5, 9];
// let result = isSorted(arr);
// console.log(result);



// function MissingNumber(arr){
//     let n = arr.length;
//     let totalsum = (n * (n + 1)/ 2);
//     let actualsum = 0;
//     for(let i = 0; i < n; i++){
//         actualsum = actualsum + arr[i];
//     }
//     return totalsum - actualsum;
// }
// const nums = [0, 3, 1, 2, 5];
// console.log(MissingNumber(nums));


// function LinearSearch(arr, target){
//     for(let i = 0; i < arr.length; i++){
//         if(target === arr[i]){
//             return i;
//         }
//     }
//     return -1;
// }
// const arr = [0, 3, 1, 2, 5];
// const target = 5;
// console.log(LinearSearch(arr, target));

// function secondLargest(arr){
//     let first = -Infinity;
//     let second = -Infinity;
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > first){
//             second = first;
//             first = arr[i];
//         }
//         else if(arr[i] > second){
//             second = arr[i];
//         }
//     }
//     return second;
// }
// const arr = [0, 3, 1, 2, 5];
// console.log(secondLargest(arr));


// function RemoveDuplicates(nums){
//     let x = 0;
//     for(let i = 0; i < nums.length; i++){
//         if(nums[i] > nums[x]){
//             x++;
//             nums[x] = nums[i];   // update the value of x index with the i index value because we want to keep the unique element in the array and x will point to the last unique element in the array
//         }
//     }
//     // return x+1;     // return the last unique element
//     return nums.slice(0, x + 1);  // return the array with unique element slice(0, x + 1) will return the array from index 0 to x
// }
// let nums= [0,0,1,1,1,2,2,3,3,4];
// console.log(RemoveDuplicates(nums));

function moveZero(arr){
    let x = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== 0){
            arr[x] = arr[i];
            x++;
        }
    }
    for(let i = x; i < arr.length; i++){
        arr[i] = 0;
    }
}
const arr = [0,1,0,3,12];
moveZero(arr);
console.log(arr); 



