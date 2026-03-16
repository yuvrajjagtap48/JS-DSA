function threeSum(nums) {
    nums.sort((a, b) => a - b);  // Sort the array to use two-pointer technique
    let ans = [];
    for(let i = 0; i < nums.length; i++){
        if(nums[i] != nums[i - 1]) {
            TwoSum(nums, i, ans);
        }
    }
    return ans;
}

function TwoSum(nums, x, ans) {
    let i = x + 1;
    let j = nums.length - 1;
    while(i < j) {
        let sum = nums[i] + nums[j] + nums[x];
        if(sum > 0){
            --j;
        }
        else if(sum < 0){
            ++i;
        }
        else{
            ans.push([nums[x], nums[i], nums[j]]);
            ++i; --j;
            while(i < j && nums[i] == nums[i - 1]){
                ++i;
            }
        }
    }
}

let nums = [-1,0,1,2,-1,-4];
console.log(threeSum(nums));