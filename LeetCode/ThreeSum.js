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

function threeSum(nums) {
    nums.sort((a, b) => a - b);
    let ans = [];
    for(let i = 0; i < nums.length; i++){
        if(nums[i] != nums[i - 1]) {
            let l = i + 1;
            let r = nums.length - 1;
            while(l < r) {
                let sum = nums[i] + nums[l] + nums[r];
                if(sum > 0){
                    r--;
                }
                else if(sum < 0){
                    l++;
                }

                else{
                    ans.push([nums[i], nums[l], nums[r]]);
                    l++; r--;
                    while(l < r && nums[l] == nums[l - 1]){
                        l++;
                    }
                }
            }
        }
    }
    return ans;
}