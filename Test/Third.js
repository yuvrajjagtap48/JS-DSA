function minDifference(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    let leftSum = 0;
    let minDiff = Infinity;
    for (let i = 0; i < arr.length; i++) {
        let rightSum = total - leftSum - arr[i];
        let diff = Math.abs(leftSum - rightSum);
        if (diff < minDiff) {
            minDiff = diff;
        }
        leftSum += arr[i];
    }
    return minDiff;
}

const arr = [1, 2, 3, 4, 5];
console.log(minDifference(arr));