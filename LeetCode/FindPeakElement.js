// function find(nums){
//     let r = nums.length - 1;
//     for(let i = 0; i < nums.length; i++){
//         if(nums[i] > nums[i + 1]){
//             return i;
//         }
//         else if(nums[r] > nums[r - 1]){
//             return r;
//         }
//         else{
//             r--;
//         }
//     }
// }
let result = find([1, 2, 5, 9, 11, 15, 14, 13, 10, 8, 6, 4]);
console.log(result);

function find(nums){
    let l = 0;
    let r = nums.length - 1;
    while(l < r){
        let mid = Math.floor(l + (r - l) / 2);
        if(nums[mid + 1] > nums[mid]){
            l = mid + 1;
        }
        else{
            r = mid;
        }
    }
    return l;
}