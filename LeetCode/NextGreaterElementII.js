// //double array 
// function grate(nums) {
//     let arr = [...nums, ...nums]; // Create a new array by concatenating nums with itself
//     let n = arr.length;
//     let stack = [];
//     let ans = Array(n).fill(-1); // Initialize the answer array with -1
//     stack.push(arr[n - 1]); // Push the last element onto the stack

//     for(let i = n - 2; i >= 0; i--){
//         while(stack.length){
//             let top = stack[stack.length - 1];
//             if(arr[i] < top){
//                 ans[i] = top;
//                 break;
//             }
//             else{
//                 stack.pop();
//             }
//         }  
//         stack.push(arr[i]);
//     }
//     return ans.slice(0, n/2);
// }


// without double array using %
function grate(nums) {
    let n = nums.length;
    let stack = [];
    let ans = Array(n).fill(-1);
    stack.push(nums[n - 1]); 

    for(let i = (2 * n) - 2; i >= 0; i--){
        while(stack.length){
            let top = stack[stack.length - 1];
            if(nums[i % n] < top){
                ans[i % n] = top;
                break;
            }
            else{
                stack.pop();
            }
        }
        stack.push(nums[i % n]);
    }
    return ans.slice(0, n);
}

const nums = [4, 1, 2];
console.log(grate(nums)); 

