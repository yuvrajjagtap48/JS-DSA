// code for count a negative number in an array

let arr = [2, 4, 5, -5, -4, 5, -9, 6, 4, 3, 0];
let count = 0;
function countNegative(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count++;
    }
  }
  return count;
}

let result = countNegative(arr);
console.log(result);