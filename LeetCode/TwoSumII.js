function twoSum(numbers, target) {
    for(let i = 0; i < numbers.length; i++){
        for(let j = i + 1; j < numbers.length; j++){
            if(numbers[i] + numbers[j] === target){
                return [i, j];
            }
        }
    }
    return "Nothing found";  // If no solution is found, return a message
}

// function twoSum(numbers, target) {
//     let left = 0;
//     let right = numbers.length - 1;
//     while(left < right){
//         const sum = numbers[left] + numbers[right];
//         if(sum === target){
//             return [left, right];
//         } 
//         else if(sum < target) {
//             left++;
//         } 
//         else {
//             right--;
//         }
//     }
//     return [];
// }

const numbers = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(numbers, target));

// function twoSum(numbers, target) {
//     let i = 0;
//     let j = numbers.length - 1;
//     while(i < j) {
//         let sum = numbers[i] + numbers[j];
//         if(sum > target){
//             --j;
//         }
//         else if(sum < target){
//             ++i;
//         }
//         else{
//             return [i + 1, j + 1];
//         }
//     }
//     return [];
// }