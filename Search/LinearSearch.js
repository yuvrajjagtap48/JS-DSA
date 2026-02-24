let arr = [1,2,3,4,5,6];

function LinearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}

let result = LinearSearch(arr, 9);
console.log(result); 