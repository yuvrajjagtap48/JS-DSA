// function searchRange(nums, target) {
//     let l = 0
//     let r = nums.length - 1;
//     let ans = [-1, -1];

//     // First position
//     while (l <= r) {
//         let mid = Math.floor(l + (r - l) / 2);
//         if(nums[mid] < target){
//              l = mid + 1;
//         }
//         else{
//             r = mid;
//         }
//     }

//     if (nums[l] === target) ans[0] = l;

//     // Last position
//     l = 0; r = nums.length - 1;
//     while (l < r) {
//         let mid = Math.ceil(l + (r - l) / 2);
//         if (nums[mid] > target){
//              r = mid - 1;
//         }
//         else{
//             l = mid;
//         }
//     }
//     if (nums[l] === target) ans[1] = l;

//     return ans;
// }



let result = searchRange([5, 7, 7,8, 8, 8, 8, 10], 8);
console.log(result);



function searchRange(nums, target) {
    let l = 0
    let r = nums.length - 1;
    let ans = [-1, -1];

    while (l <= r) {
        let mid = Math.floor(l + (r - l) / 2);
        if(nums[mid] === target){
            ans[0] = mid;
            r = mid -1;
        }
        else if(nums[mid] < target){
            l = mid + 1;
        }
        else{
            r = mid - 1;
        }
    }

    l = 0; 
    r = nums.length - 1;
    while (l <= r) {
        let mid = Math.floor(l + (r - l) / 2);
        if(nums[mid] === target){
            ans[1] = mid;
            l = mid + 1;
        }
        else if(nums[mid] < target){
            l = mid + 1;
        }
        else{
            r = mid - 1;
        }
    }
    return ans;
}