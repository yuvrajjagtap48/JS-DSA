function search(nums, target) {
    let l = 0;
    let r = nums.length - 1;
    while(l <= r){
        let mid = Math.floor(l + (r - l) / 2);
        if(nums[mid] === target){
            return mid;
        }

        // left sorted
        if(nums[l] <= nums[mid]){
            if(target < nums[mid] && target >= nums[l]){
                r = mid - 1;
            }
            else{
                l = mid + 1;
            }
        }
        // right sorted
        else{
            if(target > nums[mid] && target <= nums[r]){
                l = mid + 1;
            }
            else{
                r = mid - 1;
            }
        }
    }
    return -1;
}

let result = search([4,5,6,7,0,1,2], 1);
console.log(result);

function search(nums, target) {
    let l = 0;
    let r = nums.length - 1;
    while(l <= r){
        let mid = Math.floor(l + (r - l) / 2);
        if(nums[mid] === target){
            return mid;
        }

        // left sorted
        if(nums[l] <= nums[mid]){
            if(target < nums[mid] && target >= nums[l]){
                r = mid - 1;
            }
            else{
                l = mid + 1;
            }
        }
        // right sorted
        else{
            if(target > nums[mid] && target <= nums[r]){
                l = mid + 1;
            }
            else{
                r = mid - 1;
            }
        }
    }
    return -1;
}
