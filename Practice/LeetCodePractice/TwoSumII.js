function twoSum(numbers, target){
    let l = 0;
    let r = numbers.length - 1;
    while(l < r){
        let sum = numbers[l] + numbers[r];
        if(sum > target){
            --r;
        }
        else if(sum < target){
            ++l;
        }
        else{
            return [l+1, r+1];
        }
    }
    return -1;
}
const numbers = [2, 7, 11, 15];
const target = 26;
console.log(twoSum(numbers, target));
