function TwoSum(nums, target){
    let map = {};
    for(let i = 0; i < nums.length; i++){
        const diff = target - nums[i];
        if(map[diff] !== undefined){
            return [map[diff] , i];
        }
        map[nums[i]] = i;
    }
}

const nums = [2, 7, 11, 15];
const target = 26;
console.log(TwoSum(nums, target)); 

