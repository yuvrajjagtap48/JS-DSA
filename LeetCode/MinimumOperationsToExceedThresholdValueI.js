function minOperations(nums, k) {
    let l = 1;
    let r = Math.max(...nums); // must be value range
    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        let sum = 0;
        for (let i = 0; i < nums.length; i++) {
            sum += Math.ceil(nums[i] / mid);
        }
        if (sum > k) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }
    return l;
}

let nums = [1, 2, 3, 4, 1];
let threshold = 5;
console.log(minOperations(nums, threshold));