// function JewelsAndStones(Jewels, Stones) {
//     let count = 0;
//     for(let i = 0; i < Stones.length; i++){
//         for(let j = 0; j < Jewels.length; j++){
//             if(Stones[i] === Jewels[j]){
//                 ++count;
//             }
//         }
//     }
//     return count;
// }

function JewelsAndStones(Jewels, Stones) {
    let Jset = new Set();
    let count = 0;
    for(let i = 0; i < Jewels.length; i++){
        Jset.add(Jewels[i]);
    }
    for(let i = 0; i < Stones.length; i++){
        if(Jset.has(Stones[i])){
            count++;
        }
    }
    return count;
}

let Jewels = "aA";
let Stones = "aaAAbbbb";
console.log(JewelsAndStones(Jewels, Stones));

