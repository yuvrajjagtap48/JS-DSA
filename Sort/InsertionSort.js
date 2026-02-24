let arr = [5, 1, 4, 2, 8];
function InsertionSort(arr){
    let n = arr.length;
    for(let i = 1; i < n; i++){
        let curr = arr[i];
        let prev = i - 1;
        while(arr[prev] > curr && prev >= 0){
            arr[prev + 1] = arr[prev];
            prev--;  
        }
        arr[prev + 1] = curr;
    }
    return arr;
}

let result = InsertionSort(arr);
console.log(result);

// time complexity: O(n^2)   => that why it not used in production
// space complexity: O(1)