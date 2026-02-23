function MissingNumber(nums){
    let n = nums.length;
    let totalSum = (n * (n + 1) / 2);
    let actualSum = 0;
    for(let i = 0; i < n; i++){
        actualSum = actualSum + nums[i];
    }
    return totalSum - actualSum;
}

const nums = [0, 4, 1, 2, 5];
console.log(MissingNumber(nums));