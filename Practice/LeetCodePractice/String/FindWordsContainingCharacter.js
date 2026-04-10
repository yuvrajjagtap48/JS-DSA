// function findWords(words, character) {
//     const result = [];
//     for(let i = 0; i < words.length; i++){
//         if(words[i].includes(character)){
//             result.push(words[i]);
//         }
//     }
//     return result;
// }

function findWords(words, character){
    let res= [];
    for(let i = 0; i < words.length; i++){
        for(let j = 0; j < words[i].length; j++){
            if(words[i][j] === character){
                res.push(i);
                break;
            }
        }
    }
    return res;
}
let words = ["hello", "world", "hi", "hii"];
let character = "i";
console.log(findWords(words, character));

