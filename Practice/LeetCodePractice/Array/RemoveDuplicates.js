function RemoveDuplicates(arr){
    let x = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > arr[x]){
            x++;
            arr[x] = arr[i];
        }
    }
    return arr.slice(0, x + 1);
}

console.log(RemoveDuplicates([1, 1, 2, 2, 3, 4, 4, 5, 5]));

