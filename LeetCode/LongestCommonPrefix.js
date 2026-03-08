// function LongestCommonPrefix(strs){
//     if(strs.length === 0) return "";
//     for(let i = 0; i < strs[0].length; i++){
//         for(let j = 1; j < strs.length; j++){
//             if(strs[j][i] !== strs[0][i]){
//                 return strs[0].substring(0, i);
//             }
//         }
//     }
//     return strs[0];
// }

let strs = ["flower","flow","flowht"];
console.log(LongestCommonPrefix(strs));

function LongestCommonPrefix(strs){
    let x = 0;
    while(x < strs[0].length){
        let ch = strs[0][x];
        for(let i = 1; i < strs.length; i++){
            if(ch != strs[i][x] || x == strs[i].length){
                return strs[0].substring(0, x);
            }
        }        
        x++;
    }
    return strs[0];
}