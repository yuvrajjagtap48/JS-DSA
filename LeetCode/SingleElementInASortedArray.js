// function singleNonDuplicate(nums) {
//     for (let i = 0; i < nums.length; i += 2) {
//         if (nums[i] !== nums[i + 1]) {
//             return nums[i];
//         }
//     }
//     return -1;
// }

let result = singleNonDuplicate([1, 1, 2, 2, 3, 3, 4, 5, 5, 8, 8]);
console.log(result);

// function singleNonDuplicate(nums) {
//     let l = 0;
//     let r = nums.length - 1;
//     while (l < r) {
//         let mid = Math.floor(l + (r - l) / 2);
//         // pair is on the left
//         if (mid % 2 === 0) {
//             if (nums[mid] === nums[mid + 1]) {
//                 l = mid + 2;
//             } 
//             else {
//                 r = mid;
//             }
//         } 
//         // pair is on the right
//         else {
//             if (nums[mid] === nums[mid - 1]) {
//                 l = mid + 1;
//             } 
//             else {
//                 r = mid - 1;
//             }
//         }
//     }
//     return nums[l];
// }


// using XOR
// function singleNonDuplicate(nums) {
//     let xor = 0;
//     for (let i = 0; i < nums.length; i++) {
//         xor = xor ^ nums[i];
//     }
//     return xor;
// }



function singleNonDuplicate(nums) {
    let l = 0;
    let r = nums.length - 1;
    while (l <= r) {
        let mid = Math.floor(l + (r - l) / 2);
        // pair is on the left side
        if (nums[mid] === nums[mid - 1]) {
            leftCount = mid - l + 1;
            if (leftCount % 2 === 1) {
                r = mid - 2;
            }
            else {
                l = mid + 1;
            }
        }
        // pair is on the right side
        else if (nums[mid] === nums[mid + 1]) {
            leftCount = mid - l;
            if (leftCount % 2 === 1) {
                r = mid - 1;
            }
            else {
                l = mid + 2;
            }
        }
        // single element is at mid
        else {
            return nums[mid];
        }
    }
}