// Write function to search in an array and return the index of the element if found, otherwise return -1

let arr = [2, 4,5,7,6,8,3,9,3,2,10];
function searchElement(arr, element){
    for(let i = 0; i<arr.length; i++){
        if(arr[i] == element){
            return i;
        }
    }
    return -1;
}

let result = searchElement(arr, 1);
console.log(result);
