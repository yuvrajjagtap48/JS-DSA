let arr = [7,3,2,4,1];

function selectionSort(arr) {
    let n = arr.length;
    for(let i = 0; i < n - 1; i++){
        let min = i;
        for(let j = i + 1; j < n; j++){
            if(arr[j] < arr[min]){
                min = j;
            }
        }
        //swap
        let temp = arr[min];
        arr[min] = arr[i];
        arr[i] = temp;
    }
    return arr;
}

let result = selectionSort(arr);
console.log(result);


// time complexity: O(n^2)   => that why it not used in productio
// space complexity: O(1)