function findMin(nums){
    let l = 0;
    let r = nums.length - 1;
    while(l <= r){
        if(nums[l] <= nums[r]){
            return nums[l];
        }
        let mid = Math.floor(l + (r - l)/ 2);
        if(nums[mid] < nums[mid + 1]){
            return nums[mid];
        }
        if(nums[l] > nums[mid]){
            r = mid - 1;
        }
        else{
            l = mid + 1;
        }
    }
}
let result = findMin([3,4,5,1,2]);
console.log(result);
      
    
