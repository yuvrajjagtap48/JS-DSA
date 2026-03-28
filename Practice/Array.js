function joinTwoArray(arr1, arr2, separator) {
    let result = '';
    for(let i = 0; i < arr1.length; i++){
        result = result + arr1[i];
        if(i !== arr1.length - 1){
            result = result + separator;
        }
    }
    for(let i = 0; i < arr2.length; i++){
        result = result + arr2[i];
        if(i !== arr2.length - 1){
            result = result + separator;
        }
    }
    return result;
}


// example usage
const arr1 = ['Hello', 'World'];
const arr2 = [  'JavaScript'];
const separator = ' ';
console.log(joinTwoArray(arr1, arr2 , separator)); // Output: "Hello World JavaScript"