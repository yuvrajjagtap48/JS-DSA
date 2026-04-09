function find(nums){
    let l = 0;
    let r = nums.length - 1;
    while(l < r){
        let mid = Math.floor(l + (r - l)/ 2);
        if(nums[mid] < nums[mid + 1]){
            l = mid + 1;
        }
        else{
            r = mid;
        }
    }
    return l;
}

let result = find([1, 2, 5, 9, 11, 12, 14, 13, 10, 8, 6, 4]);
console.log(result);

        
