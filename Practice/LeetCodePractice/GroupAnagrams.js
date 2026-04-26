// function groupAnagrams(strs) {
//     let  map = {};
//     for(let i = 0; i < strs.length; i++){
//         let sortedStr = strs[i].split('').sort().join('');
//         if(!map[sortedStr]){
//             map[sortedStr] = [strs[i]];
//         }
//         else{
//             map[sortedStr].push(strs[i]);
//         }
//     }
//     return Object.values(map);
// }
// time complexity: O(n * k log k) where n is the number of strings and k is the maximum length of a string
// space complexity: O(n * k) where n is the number of strings and k is the maximum length of a string

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strs));

function groupAnagrams(strs) {
    let  map = {};
    for(let i = 0; i < strs.length; i++){
        let freqArr = new Array(26).fill(0);
        let s = strs[i];
        for(let j = 0; j < s.length; j++){
            let index = s[j].charCodeAt() - 'a'.charCodeAt();
            freqArr[index]++;
        }
        let key ="";
        for(let k = 0; k < 26; k++){
            key = key + String.fromCharCode(k) + freqArr[k];
        }
        // fill map
        if(!map[key]){
            map[key] = [s];
        }        
        else{
            map[key].push(s);
        }
    }
    return Object.values(map);
}
// time complexity : O(n * k) where n is the number of strings and k is the maximum length of a string
// space complexity: O(n * k) where n is the number of strings and k is the maximum length of a string

var groupAnagrams = function(strs) {
    let map = new Map();
    for (let i = 0; i < strs.length; i++) {
        let str = strs[i];
        let freqArr = new Array(26).fill(0);
        for (let j = 0; j < str.length; j++) {
            let index = str.charCodeAt(j) - 97;    // 'a' has ASCII code 97
            freqArr[index]++;
        }
        let key = freqArr.join('#');
        if (!map.has(key)) {
            map.set(key, []);
        }
        map.get(key).push(str);
    }
    return Array.from(map.values());
};


function groupAnagramas(strs){
       
}