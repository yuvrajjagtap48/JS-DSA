function SingleNumber(nums){
    let map = {};
    for(let i = 0; i < nums.length; i++){
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

// function SingleNumber(nums){
//     let xor = 0;
//     for(let i = 0;i < nums.length; i++){
//         xor = xor ^ nums[i];
//     }
//     return xor;
// }

const nums = [1,2,1,2,3,1,1,4,3,5,5];
console.log(SingleNumber(nums)); 