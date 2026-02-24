let arr = [1,2,3,4,5,6];

function BinarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while(right >= left){
        let middle = Math.floor((left + right) / 2);
        if (target === arr[middle]){
            return middle;
        }
        else if (target < arr[middle]){
            right = middle -1;
        }
        else{
            left = middle +1;
        }
    }
    return -1; 
}

let result = BinarySearch(arr, 4);
console.log(result);