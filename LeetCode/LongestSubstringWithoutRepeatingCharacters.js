// function substring(s){
//     let longest = 0;
//     for(let i = 0; i < s.length; i++){
//         for(let j = i + 1; j <= s.length; j++){
//             let sub = s.substring(i, j);
//             if(new Set(sub).size === sub.length){
//                 longest = Math.max(longest, sub.length);
//             }
//         }
//     }
//     return longest;
// }
console.log(substring("abcabcbb"));
console.log(substring("bbbbb")); 
console.log(substring("pwwkew")); 


// function substring(s){
//     let longest = 0;
//     let start = 0;
//     let seen = new Map();
//     for(let end = 0; end < s.length; end++){
//         if(seen.has(s[end]) && seen.get(s[end]) >= start){
//             start = seen.get(s[end]) + 1;
//         }   
//         seen.set(s[end], end);
//         longest = Math.max(longest, end - start + 1);
//     }
//     return longest;
// }


// sliding window approach
function substring(s){
    let i = 0; 
    let j = 0;
    let map = {};
    let maxWS = 0;
    
    for(let j = 0; j < s.length; j++){
        // is my element there in map
        if(map[s[j]] !== undefined && map[s[j]] >= i){
            i = map[s[j]] + 1;
        }
        map[s[j]] = j;
        currWS = j - i + 1;
        maxWS = Math.max(maxWS, currWS);
    }
    return maxWS;
}
