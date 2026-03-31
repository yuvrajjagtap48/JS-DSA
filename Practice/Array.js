// function joinTwoArray(arr1, arr2, separator) {
//     let result = '';
//     for(let i = 0; i < arr1.length; i++){
//         result = result + arr1[i];
//         if(i !== arr1.length - 1){
//             result = result + separator;
//         }
//     }
//     for(let i = 0; i < arr2.length; i++){
//         result = result + arr2[i];
//         if(i !== arr2.length - 1){
//             result = result + separator;
//         }
//     }
//     return result;
// }


// // example usage
// const arr1 = ['Hello', 'World'];
// const arr2 = [  'JavaScript'];
// const separator = ' ';
// console.log(joinTwoArray(arr1, arr2 , separator)); // Output: "Hello World JavaScript"


function joinTwoArray(arr1, arr2) {
    let result = [];
    for(let i = 0; i < arr1.length; i++){
        result.push(arr1[i]);
    }
    for(let i = 0; i < arr2.length; i++){
        result.push(arr2[i]);
    }
    return result;
}

// example usage
const arr1 = ['Hello', 'World'];
const arr2 = [  'JavaScript'];
console.log(joinTwoArray(arr1, arr2)); // Output: ["Hello", "World", "JavaScript"]


// more optimized way
function joinTwoArray(arr1, arr2) {
    return arr1.concat(arr2);
}


function longestSubString(str) {
    let longest = '';
    let current = '';
    for(let i = 0; i < str.length; i++){
        if(current.includes(str[i])){
            if(current.length > longest.length){
                longest = current;
            }
            current = current.substring(current.indexOf(str[i]) + 1) + str[i];
        } else {
            current = current + str[i];
        }   
    }
    if(current.length > longest.length){
        longest = current;
    }
    return longest;
}

console.log(longestSubString("abcabcbb")); // Output: "abc"
