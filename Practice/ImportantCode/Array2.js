// remove spaces and reverse the string
// function reverseString(str) {
//     return str.split(' ').reverse().join(' ');
// }

console.log(reverseString("Hello World JavaScript")); // Output: "JavaScript World Hello"

function reverseString(str) {
    let result = '';
    for(let i = str.length - 1; i >= 0; i--){
        result = result + str[i];
    }
    return result;
}

console.log(reverseString("Hello World JavaScript")); // Output: "tpircSavaJ dlroW olleH"