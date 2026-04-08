// function trappingRainWater(height) {
//     let left = 0;
//     let right = height.length - 1;
//     let leftMax = height[left];
//     let rightMax = height[right];
//     let count = 0;

//     while (left < right) {
//         if(height[left] <= height[right]) {
//             if(height[left] > leftMax) {
//                 leftMax = height[left];
//             } else{
//                 count = count + leftMax - height[left];
//             }
//             left++;
//         } 
//         else{
//             if(height[right] > rightMax){
//                 rightMax = height[right];
//             } else{
//                 count = count + rightMax - height[right];
//             }
//             right--;
//         }
//     }
//     return count;
// };


let height = [0,1,0,2,1,0,1,3,2,1,2,1];
console.log(trappingRainWater(height));

// function trappingRainWater(height) {
//     let n = height.length;

//     let maxL = [0];
//     maxL[0] = height[0];
//     for(let i = 1; i < n; i++){
//         maxL[i] = Math.max(maxL[i-1], height[i]);
//     }
//     let maxR = [];
//     maxR[n-1] = height[n-1];
//     for(let i = n - 2; i >= 0; i--){
//         maxR[i] = Math.max(maxR[i+1], height[i]);
//     }

//     let ans = 0;
//     for(let i = 0; i < n; i++){
//         let waterTrapped = Math.min(maxL[i], maxR[i]) - height[i];
//         ans = ans + Math.max(waterTrapped, 0);
//     }
//     return ans;
// }


function trappingRainWater(height) {
    let n = height.length;
    let maxL = [];
    let maxR = [];
    maxL[0] = height[0];
    maxR[n-1] = height[n-1];

    for(let i = 1; i < n; i++){
        maxL[i] = Math.max(maxL[i-1], height[i]);
        maxR[n-1-i] = Math.max(height[n-1-i], maxR[n-i]);
    }
    let ans = 0;
    for(let i = 0; i < n; i++){
        ans = ans + Math.max(Math.min(maxL[i], maxR[i]) - height[i], 0);
    }
    return ans;
} 