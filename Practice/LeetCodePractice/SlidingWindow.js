function slidingWindow(nums,k ){
    let result = [];
    for(let i = 0; i <= nums.length - k; i++){
        let max = nums[i];
        for(let j = i; j < i + k; j++){
            if(nums[j] > max){
                max = nums[j];
            }
        }
        result.push(max);
    }
    return result;
} 

const nums = [1, 2, 3, 4, 5];
const k = 3;
console.log(slidingWindow(nums, k));

