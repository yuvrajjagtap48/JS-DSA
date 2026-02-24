
function BinarySearch(nums, target){
    let left = 0;
    let right = nums.length - 1;
    while(right >= left){
        let middle = Math.floor((left + right) / 2);
        if(target === nums[middle]){
            return middle;
        }
        else if(target < nums[middle]){
            right = middle - 1;
        }
        else {
            left = middle +1;
        }
    }
    return -1;
}

let nums = [1,2,3,4,5,6,7];
let result = BinarySearch(nums, 4);
console.log(result);