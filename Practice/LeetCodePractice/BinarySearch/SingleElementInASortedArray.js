function singleNonDuplicate(nums) {
    let l = 0;
    let r = nums.length - 1;
    while(l <= r){
        let mid = Math.floor(l + (r - l)/ 2);
        //left side
        if(nums[mid] === nums[mid - 1]){
            leftCount = mid  - l + 1;
            if(leftCount % 2 === 1){
                r = mid - 2;
            }
            else{
                l = mid + 1;
            }
        }
        //pair is on the right side
        else if(nums[mid] === nums[mid + 1]){
            leftCount = mid - l;
            if(leftCount % 2=== 1){
                r = mid - 1;
            }
            else{
                l = mid + 2;
            }
        }
        else{
            return nums[mid];
        }
    }
}

let result = singleNonDuplicate([1, 1, 2, 2, 3, 3, 4, 5, 5, 8, 8]);
console.log(result);

   

