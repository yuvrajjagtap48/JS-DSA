function SingleNumber(nums){
    let map = {};
    for(let i =0; i < nums.length; i++){
        if(!map[nums[i]]){
            map[nums[i]] = 1;
        }
        else{
            map[nums[i]]++;
        }
    }
    for(let i = 0; i < nums.length; i++){
        if(map[nums[i]] === 1){
            return nums[i];
        }
    }
}
const nums = [1,2,1,2,3,4,3,5,5];
console.log(SingleNumber(nums)); 





