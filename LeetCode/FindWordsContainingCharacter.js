// Approach 1  ->  using BulitIn function
// function findWords(words, character) {
//     const result = [];
//     for(let i = 0; i < words.length; i++){
//         if(words[i].includes(character)){
//             result.push(words[i]);
//         }
//     }
//     return result;
// }

let words = ["hello", "world", "hi", "hii"];
let character = "i";
console.log(findWords(words, character));


 
// Approach 2 
function findWords(words, character) {
    const result = [];
    for(let i = 0; i < words.length; i++){
        // find if char is present in the word
        for(let j = 0; j < words[i].length; j++){
            if(words[i][j] === character){
                result.push(i);
                break;
            }
        }
    }
    return result;
}