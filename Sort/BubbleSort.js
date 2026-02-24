let arr = [5, 1, 4, 2, 8];
function bubbleSort(arr) {
    let n = arr.length;
    for(let i = 0; i < n - 1; i++){

        let isSwapped = false; // optimization to stop the algorithm if the array is already sorted

        for(let j = 0; j < n- i - 1; j++){
            if(arr[j] > arr[j + 1]){
                //swap
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                isSwapped = true;
            }
        }
        if(!isSwapped) break;
    }
    return arr;
}

let result = bubbleSort(arr);
console.log(result);


// time complexity: O(n^2)   => that why it not used in production
// space complexity: O(1)