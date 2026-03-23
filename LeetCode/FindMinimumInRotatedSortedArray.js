// var findMin = function(nums) {
//     let l = 0;
//     let r = nums.length - 1;
//     while (l < r) {
//         let mid = Math.floor((l + r) / 2);
//         if (nums[mid] > nums[r]) {
//             // minimum is in right half
//             l = mid + 1;
//         } else {
//             // minimum is in left half including mid
//             r = mid;
//         }
//     }
//     return nums[l];
// } 

let result = findMin([3,4,5,0,1,2]);
console.log(result);


function findMin(nums) {
    let l = 0;
    let r = nums.length - 1;
    while(l <= r){
        //if array i sorted, return first element
        if(nums[l] <= nums[r]){
        return nums[l];
        }
        let mid = Math.floor(l + (r - l) / 2);
        //if array is not sorted 
        if(nums[mid] < nums[mid - 1]){
            return nums[mid];
        }
        // if left half is non sorted, find then minimum in left half
        if(nums[l] > nums[mid]){
            r = mid - 1;
        }
        else{
            l = mid + 1;
        }
    }
}