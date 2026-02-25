// Approach 1 
// function lengthOfLastWord(s) {
//     s = s.trim();
//     s = s.split(" ");
//     return s[s.length - 1].length;
// }



// Approach 2
// function lengthOfLastWord(s) {
//     // Trim all the espaces at the end
//     let n = s.length - 1;
//     while(n >= 0){
//         if(s[n] === " "){
//             --n;
//         }
//         else{
//             break;
//         }
//     }
//     // n is the point where last word is start
    
//     // Count the characters until we find a space
//     let count = 0;
//     while(n >= 0){
//          if(s[n] != " "){
//             --n;
//             ++count;
//          }
//          else{
//             break;
//          }
//     }
//     return count;
// }
// let s = "Hello World hii    ";
// console.log(lengthOfLastWord(s));





// Approach 3
// function lengthOfLastWord(s) {
//     let n = s.length - 1;
//     while(n >= 0){
//         if(s[n] != " "){
//             break;
//         }
//         --n;      
//     }

//     let count = 0;
//     while(n >= 0){
//         if(s[n] === " "){
//             break;
//         }
//          --n;
//          ++count;
//     }
//     return count;
// }
let s = "Hello World hii    ";
console.log(lengthOfLastWord(s));



// Approach 4 -> single loop
function lengthOfLastWord(s) {
    let n = s.length-1;
    let count = 0;
    while(n >= 0){
        if(count > 0 ) break;
        else if(s[n] != " "){
            ++count;
        }
        --n;
    }
    return count;
}