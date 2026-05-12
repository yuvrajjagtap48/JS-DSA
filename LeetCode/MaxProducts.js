function maxProduct(nums) {
    let i = 0;
    let j = 0;
    for(let k = 0; k < nums.length; k++){
        if(nums[k] > nums[i]){
            j = i;
            i = k;
        } else if(nums[k] > nums[j]){
            j = k;
        }
    }
    return (nums[i] - 1) * (nums[j] - 1);
}

let nums = [3,4,5,2];
console.log(maxProduct(nums));