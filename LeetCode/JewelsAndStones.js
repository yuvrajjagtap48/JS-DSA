// Approach 1: Using Bulit In function
// function JewelsAndStones(J, S) {
//     let count = 0;
//     for(let i = 0; i < S.length; i++){
//         if(J.includes(S[i])){
//             ++count;
//         }
//     }
//     return count;
// }

let Jewels = "aA";
let Stones = "aAbbbb";
console.log(JewelsAndStones(Jewels, Stones));

// Approach 2 
// function JewelsAndStones(J, S) {
//     let count = 0;
//     for(let i = 0; i < S.length; i++){
//         for(let j = 0; j < J.length; j++){
//             if(S[i] === J[j]){
//                 ++count;
//                 break;            // if we find the char in J then we can break the loop and move to next char in S
//             }
//         }
//     }
//     return count;
// }

// Approach 3 : Using Set
function JewelsAndStones(Jewels, Stones) {
    let Jset = new Set();
    for(let i = 0; i < Jewels.length; i++){
        Jset.add(Jewels[i]);
    } 
    let count = 0;
    for(let i = 0; i < Stones.length; i++){
        if(Jset.has(Stones[i])){
            ++count;
        }    
    }
    return count;

}