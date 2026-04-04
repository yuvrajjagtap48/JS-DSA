// function TwoSum(nums, target) {
//     for(let i = 0; i < nums.length; i++) { 
//         for(let j = i + 1; j < nums.length; j++) {
//             if(nums[i] + nums[j] === target) {
//                 return [nums[i], nums[j]];
//                 // return [i, j];
//             }
//         }
//     }
// }
//  time complexity: O(n^2)
//  space complexity: O(1)

const nums = [2, 7, 11, 15];
const target = 18;
console.log(TwoSum(nums, target)); 


// function TwoSum(arr, target) {
//     let n = arr.length;
//     let map = {};
//     for (let i = 0; i < n; i++) {
//         map[arr[i]] = i;
//     }
//     for (let i = 0; i < n; i++) {
//         let pairToFind = target - arr[i];
//         if(map[pairToFind] && map[pairToFind] != i) {
//             return [i, map[pairToFind]];
//         }
//     }
// }
//  time complexity: O(n)
// space complexity: O(n)


// function TwoSum(arr, target) {
//     let map = new Map();
//     for (let i = 0; i < arr.length; i++) {
//         const num = arr[i];
//         const diff = target - num;
//         if(map.has(diff)) {
//             return [map.get(diff), i];
//         }
//         map.set(num, i);
//     }
// }
// time complexity: O(n)
// space complexity: O(n)


function TwoSum(arr,target){
    let map = {};
    for(let i =0; i < arr.length; i++){
        let diff = target - nums[i];
        if(map[diff] !== undefined){
            return [map[diff], i];
        }
        map[nums[i]] = i;
    }
}