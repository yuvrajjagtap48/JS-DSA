let arr = [5, 1, 4, 2, 8];
function MergeSort(arr){
    if(arr.length <= 1) return arr;

    // work
    let mid = arr.length / 2;
    let left = MergeSort(arr.slice(0, mid));
    let right = MergeSort(arr.slice(mid));
    
    return merge(left, right);

}

function merge(left, right){
    let merged = [];
    let i = 0;
    let j = 0;
    while(i < left.length && j < right.length){
        if(left[i] < right[j]){
            merged.push(left[i]);
            i++;
        } else {
            merged.push(right[j]);
            j++;
        }
    }
    return merged.concat(left.slice(i)).concat(right.slice(j));
}

let result = MergeSort(arr);
console.log(result);

// time complexity: O(n log n)   
// space complexity: O(n)