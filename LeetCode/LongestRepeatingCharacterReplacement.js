// function replace(s, k) {
//     let n = s.length;
//     let ans = 0;
//     for (let i = 0; i < n; i++) {
//         let freq = new Array(26).fill(0);
//         let maxFreq = 0;
//         for (let j = i; j < n; j++) {
//             let index = s.charCodeAt(j) - 65;
//             freq[index]++;
//             maxFreq = Math.max(maxFreq, freq[index]);
//             let window = j - i + 1;
//             if (window - maxFreq <= k) {
//                 ans = Math.max(ans, window);
//             } else {
//                 break;
//             }
//         }
//     }
//     return ans;
// }

console.log(replace("ABAB", 2));
console.log(replace("AABABBA", 1));

function replace(s, k) {
    let i = j = 0;
    let map = {};
    let maxWindow = 0;
    
    while(j < s.length){
        if(isWindowValid){
            maxWindow = Math.max(maxWindow, j - i + 1);
            ++j;
            map[s[j - 1]] = !map[s[j - 1]] ? 1 : ++map[s[j - 1]];
        }
        else{
            --map[s[i]];
            ++i;
        }
    }
    return maxWindow;
}

function isWindowValid(map, k) {
    let totalCount = 0;
    for (let i = 0; i < 26; i++) {
        totalCount = totalCount + 
        maxCount = Math.max(maxCount, map[char]);
    }
    return (j - i + 1) - maxCount <= k;
}