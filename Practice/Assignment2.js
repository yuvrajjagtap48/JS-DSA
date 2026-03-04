// function sumOfELements(arr){
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++){
//         sum = sum + arr[i];
//     }
//     return sum;
// }


// function largerst(arr){
//     let large = 0;
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > large){
//             large = arr[i];
//         }
//     }
//     return large;
// }


// function smallest(arr){
//     let small = Infinity;        //
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] < small){
//             small = arr[i];
//         }
//     }
//     return small;
// }



// function CountEvenOdd(arr){
//     let even = 0, odd = 0;
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] % 2 === 0){ 
//             even++;
//         }
//         else{
//             odd++;
//         }
//     }
//     return {even, odd}; //{} => it returns object with both values    //return even, odd  => it return only last value(comma seprated properties)
// }


// function ReverseArray(arr){
//     for(let i = 0; i < arr.length / 2; i++){
//         let temp = arr[i];
//         arr[i] = arr[arr.length - 1 - i];
//         arr[arr.length - 1 - i] = temp;
//     }
//     return arr;
// }


// function findDuplicates(arr){
//     let duplicates = [];
//     for(let i = 0; i < arr.length; i++){
//         for(let j = i + 1; j < arr.length; j++){
//             if(arr[i]  === arr[j] ){
//                 duplicates.push(arr[i]);
//             }
//         }
//     }
//     return duplicates;
// }
// function findDuplicates(arr){
//     let duplicates = [];
//     let map = {};
//     for(let i = 0; i < arr.length; i++){
//         if(map[arr[i]]){
//             duplicates.push(arr[i]);
//         }
//         else{
//             map[arr[i]] = 1;
//         }
//     }
//     return duplicates;
// }


// function RemoveDuplicates(arr){
//     let unique = [];
//     for(let i = 0; i < arr.length; i++){
//         if(!unique.includes(arr[i])){
//             unique.push(arr[i]);
//         }
//     }
//     return unique;
// }
// function RemoveDuplicates(nums){
//     let x = 0;
//     for(let i = 0; i < nums.length; i++){
//         if(nums[i] > nums[x]){
//             x++;
//             nums[x] = nums[i];
//         }
//     }
//     return x + 1;
// }



// function BubbleSort(arr){
//     let n = arr.length;
//     let isSwapped = false;
//     for(let i = 0; i < n; i++){
//         for(let j = 0; j < n - i - 1; j++){
//             if(arr[j] > arr[j+1]){
//                 let temp = arr[j];
//                 arr[j] = arr[j +1];
//                 arr[j + 1] = temp;
//                 isSwapped = true;
//             }
//         }
//         if(!isSwapped) break;
//     }
//     return arr;
// }



// function MergeArray(arr1, arr2){
//     let merged = [];
//     for(let i = 0; i < arr1.length; i++){
//         merged.push(arr1[i]);
//     }
//     for(let j = 0; j < arr2.length; j++){
//         merged.push(arr2[j]);
//     }
//     return merged;
// }




let result = MergeArray([5, 2, 8, 1, 9]);
console.log(result); 