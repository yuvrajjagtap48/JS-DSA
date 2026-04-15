//using sorting
// function Permutation(s1, s2) {
//     let sortedS1 = s1.split('').sort().join('');
//     for(let i = 0; i < s2.length - s1.length + 1; i++){
//         let sortedS2 = s2.substring(i, i + s1.length).split('').sort().join('');
//         if(sortedS1 === sortedS2){
//             return true;
//         }
//     }
//     return false;
// }

// Using Array(Hash)
function Permutation(s1, s2) {
    let hashS = Array(26).fill(0);
    let hashW = Array(26).fill(0);
    let window_length = s1.length;
    for(let i = 0; i < window_length; i++){
        ++hashS[s1.charCodeAt(i) - 97];
        ++hashW[s2.charCodeAt(i) - 97];
    }
    let i = 0;
    let j = window_length - 1;
    while(j < s2.length){  
        if(isHashSame(hashS, hashW)){
            return true;
        }
        else{
            --hashW[s2.charCodeAt(i) - 97]; 
            ++i;
            ++j;
            ++hashW[s2.charCodeAt(j) - 97];
        }
    }
    return false;
}

function isHashSame(hashS, hashW){
    for(let i = 0; i < 26; i++){
        if(hashS[i] !== hashW[i]){
            return false;
        }   
    }
    return true;
}

console.log(Permutation("adc", "dcda"));
