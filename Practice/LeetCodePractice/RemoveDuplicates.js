function RemoveDuplicates(arr) {
    let x = 0;
    let n = arr.length;
    for(let i = 0; i < n; i++) {
        if(arr[i] > arr[x]) {
            x++;
            arr[x] = arr[i];
        }
    }
    return arr.slice(0, x + 1);
}

console.log(RemoveDuplicates([1, 1, 2, 2, 3, 4, 4, 5, 5]));