// function MaxConsecutive(nums) {
//   let maxCount = 0;
//   let CurrCount = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] == 1) {
//       CurrCount++;
//     } else {
//       maxCount = Math.max(maxCount, CurrCount);
//       CurrCount = 0;
//     }
//   }
//   return Math.max(maxCount, CurrCount);
// }

function MaxConsecutive(nums) {
  let count = 0;
  let maxCount = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      count++;
      if (count > maxCount) {
        maxCount = count;
      }
    } else {
      count = 0;
    }
  }

  return maxCount;
}

const nums = [1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1];
console.log(MaxConsecutive(nums));
