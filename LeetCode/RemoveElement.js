function RemoveElement(nums, val){
    let x = 0;
    for(let i = 0; i < nums.length; i++){
        // shift the element if it is not equal to val
        if(nums[i] !== val){
            nums[x] = nums[i];
            x++;
        }
    }
    return x;
}

// Example usage:
const nums = [3, 2, 2, 3];
const val = 3;
const newLength = RemoveElement(nums, val);
console.log(newLength);