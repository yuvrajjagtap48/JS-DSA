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
let Jewels = "aA";
let Stones = "aAAbbbb";
console.log(JewelsAndStones(Jewels, Stones));

