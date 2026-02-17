
function secondLargest(arr){
    let largest = -Infinity;
    let secondLargest = -Infinity;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > largest){ 
            secondLargest = largest; //update second largest before update largest
            largest = arr[i]; 
        }
        else if(arr[i] > secondLargest){
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}
let arr = [2,4,5,6,3,5,2,9,8,7];
let result = secondLargest(arr);
console.log(result);



/** corner case 
* - array is empty
* - array has negative numbers
* - array has duplicate element
* - array has less than 2 element 
* 
*/


// if array have less than 2 element then return null
// function secondLargest(arr){
//     if(arr.length < 2){
//         return null;
//     }
//     let largest = -Infinity;
//     let secondLargest = -Infinity;
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > largest){ 
//             secondLargest = largest; 
//             largest = arr[i]; 
//         }
//         else if(arr[i] > secondLargest){
//             secondLargest = arr[i];
//         }
//     }
//     return secondLargest;
// }
// let arr = [2];
// let result = secondLargest(arr);
// console.log(result);


// if array have duplicate element 
// function secondLargest(arr){
//     let largest = -Infinity;
//     let secondLargest = -Infinity;
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > largest){ 
//             secondLargest = largest; 
//             largest = arr[i]; 
//         }
//         else if(arr[i] > secondLargest && arr[i] != largest){
//             secondLargest = arr[i];
//         }
//     }
//     return secondLargest;
// }
// let arr = [2,4,4,4];
// let result = secondLargest(arr);
// console.log(result);


 