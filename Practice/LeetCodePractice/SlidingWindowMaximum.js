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


// function slidingWindow(nums, k) {
//     let res = [];
//     let q = [];
//     let i = 0, j = 0;
//     while (j < nums.length) {
//         // push current element after removing all smaller elements from the last of the queue 
//         while(q.length && nums[j] > nums[q[q.length - 1]]) {
//             q.pop();
//         }
//         q.push(j);
//         // when window size is k
//         if (j >= k - 1) {
//             res.push(nums[q[0]]);
//             // if the leftmost element for current window nums[i] is largest q[0] then remove it
//             if (nums[i] == nums[q[0]]) {
//                 q.shift();
//             }
//             ++i;
//         }
//         ++j;
//     }
//     return res;
// }

function maximium(arr, k){
    let res = [];
    let q = [];
    let i = 0, j = 0;
    while (j < arr.length) {
        while(q.length && arr[j] > q[q.length - 1]) {
            q.pop();
        }
        q.push(arr[j]);
        if (j >= k - 1) {
            res.push(q[0]);
            if(arr[i] == q[0]) {          //arr[i] == q[0] && q.shift();
                q.shift();
            }
            i++;
        }
        j++;
    }
    return res;
}


const arr = [1, 3, -1, -3, 5, 3, 6, 7];
const k = 3;
console.log(maximium(arr, k));
// time complexity: O(n)
// space complexity: O(k)

