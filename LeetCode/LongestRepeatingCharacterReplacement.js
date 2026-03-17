function replace(s, k) {
    let map = new Array(26).fill(0);
    let i = 0, maxFreq = 0, maxLen = 0;
    for (let j = 0; j < s.length; j++) {
        let idx = s.charCodeAt(j) - 65;
        map[idx]++;
        maxFreq = Math.max(maxFreq, map[idx]);
        if ((j - i + 1) - maxFreq > k) {
            map[s.charCodeAt(i) - 65]--;
            i++;
        }
        maxLen = Math.max(maxLen, j - i + 1);
    }
    return maxLen;
}

console.log(replace("ABAB", 2));
console.log(replace("AABABBA", 1));

// function replace(s, k) {
//     let i = j = 0;
//     let map = Array(26).fill(0);
//     map[s.charCodeAt(0) - 65] = 1;
//     let maxWindow = 0;
    
//     while(j < s.length){
//         if(isWindowValid(map, k)){
//             maxWindow = Math.max(maxWindow, j - i + 1);
//             ++j;
//             ++map[s.charCodeAt(j) - 65];
//         }
//         else{
//             --map[s.charCodeAt(i) - 65];
//             ++i;
//         }
//     }
//     return maxWindow;
// }
// function isWindowValid(map, k) {
//     let totalCount = 0;
//     let maxCount = 0;
//     for (let i = 0; i < 26; i++) {
//         totalCount = totalCount + map[i];
//         maxCount = Math.max(maxCount, map[i]);
//     }
//     return (totalCount - maxCount <= k);
// }




