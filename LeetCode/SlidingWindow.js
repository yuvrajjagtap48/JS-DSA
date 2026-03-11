const nums = [1, 2, 3, 4, 5];
const k = 3;
console.log(slidingWindow(nums, k));

// Brute force solution
// function slidingWindow(nums, k) {
//   let result = [];
//   for (let i = 0; i <= nums.length - k; i++) {
//     let max = nums[i];
//     for (let j = i; j < i + k; j++) {
//       if (nums[j] > max) {
//         max = nums[j];
//       }
//     }
//     result.push(max);
//   }
//   return result;
// };
// time complexity: O(n * k)
// space complexity: O(n - k + 1)


function slidingWindow(nums, k) {
    let res = [];
    let q = [];
    let i = 0, j = 0;
    while (j < nums.length) {
        while(q.length && nums[j] > nums[q[q.length - 1]]) {
            q.pop();
        }
        q.push(j);
        if (j >= k - 1) {
            res.push(nums[q[0]]);
            if (nums[i] == nums[q[0]]) {
                q.shift();
            }
            ++i;
        }
        ++j;
    }
    return res;
}

// time complexity: O(n)
// space complexity: O(k)

