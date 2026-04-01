// function reverse(str){
//     let arr = str.split('');
//     let l = 0;
//     let r = arr.length - 1;
//     while(l < r){
//         let temp = arr[l];
//         arr[l] = arr[r];
//         arr[r] = temp;
//         ++l;
//         --r;
//     }
//     return arr.join('');
// }

// function palindrome(str){
//     let l = 0;
//     let r = str.length - 1;
//     while(l < r){
//         if(str[l] !== str[r]){
//             return false;
//         }
//         l++;
//         r--;
//     }
//     return true;
// }

// function count(str){
//     let vowels= "aeiouAEIOU";
//     let vCount = 0; 
//     let cCount = 0;
//     for(let i = 0; i < str.length; i++){
//         if(vowels.includes(str[i])){
//             ++vCount;
//         }
//         else if(/[a-zA-Z]/.test(str[i])){
//             ++cCount;
//         }
//     }
//     return {vowels: vCount, consont : cCount};
// }

// function removeSpace(str){
//     let res = "";
//     for(let i = 0; i < str.length; i++){
//         if(str[i] !== ' '){
//             res = res + str[i];
//         }
//     }
//     return res;
// }

// function firstUnique(str){
//     for(let i = 0; i < str.length; i++){
//         let found = false;
//         for(let j = 0; j < str.length; j++){
//             if(i !== j && str[i] === str[j]){
//                 found = true;
//                 break;
//             }
//         }
//         if(!found) return str[i];
//     }
//     return null;
// }
// function firstUnique(str){
//     let map = {};
//     for(let i = 0; i < str.length; i++){
//         //map[ch] = (map[ch] || 0) + 1;    
//         if(!map[str[i]]){
//             map[str[i]] = 1;
//         }
//         else{
//             map[str[i]]++;
//         }
//     }
//     for(let i = 0; i < str.length; i++){
//         if(map[str[i]] === 1){
//             return str[i];
//         }
//     }
//     return null;
// }

// function toLower(str){
//     let res = "";
//     for(let i = 0; i < str.length; i++){
//         let code = str[i].charCodeAt(0);
//         if(code >= 65 && code <= 90){
//             res = res + String.fromCharCode(code + 32);
//         }
//         else{
//             res = res + str[i];
//         }
//     }
//     return res;
// }
// function toUpper(str){
//     let res = "";
//     for(let i = 0; i < str.length; i++){
//         let code = str[i].charCodeAt(0);
//         if(code >= 97 && code <= 112){
//             res = res + String.fromCharCode(code - 32);
//         }
//         else{
//             res = res + str[i];
//         }
//     }
//     return res;
// }

// function LogestSubstringWithoutRepeatingCharacters(str){
//     let i = 0;
//     let j = 0;
//     let map = {};
//     let maxWs = 0;
//     for(let j = 0; j < str.length; j++){
//         if(map[str[j]] !== undefined && map[str[j]] >= i){
//             i = map[str[j]] + 1;
//         }
//         map[str[j]] = j;
//         let currWs = j - i + 1;
//         maxWs = Math.max(maxWs, currWs);
//     }
//     return maxWs; 
// }

// function LongestPalindromicSubstring(str){
//     let res = "";
//     for(let i = 0; i < str.length; i++){
//         // odd length
//         let l = i;
//         let r = i;
//         while(l >= 0 && r < str.length && str[l] === str[r]){
//             if(r - l + 1 > res.length){
//                 res = str.substring(l, r + 1);
//             }
//             l--;
//             r++;
//         }
//         // even length
//         l = i;
//         r = i + 1;
//         while(l >= 0 && r < str.length && str[l] === str[r]){
//             if(r - l + 1 > res.length){
//                 res = str.substring(l, r + 1);
//             }
//             l--;
//             r++;
//         }
//     }
//     return res;
// }

// function StringCompression(str){
//     let res = "";
//     for(let i = 0; i < str.length; i++){
//         let count = 1;
//         while(i < str.length - 1 && str[i] === str[i + 1]){
//             ++count;
//             ++i;
//         }
//         res = res + str[i] + count;
//     }
//     return res;
// }

// function ValidParentheses(str){
//     let stack = [];
//     let map = {
//         '(': ')',
//         '{': '}',
//         '[': ']'
//     };
//     for(let i = 0; i < str.length; i++){
//         if(map[str[i]]){
//             stack.push(str[i])
//         }
//         else{
//             let top = stack.pop();
//             if(!top || map[top] !== str[i]){
//                 return false;
//             }
//         }
//     }
//     return stack.length === 0;
// }

let str = "(){([])}";
let result = ValidParentheses(str);
console.log(result);


