// function occurrence(haystack, needle) {
//     let n = haystack.length;
//     let m = needle.length;
//     for(let i = 0; i <= n - m; i++){
//     let j = 0;
//         // check if needle === window
//         for(let j = 0; j < m; j++){
//             if(haystack[i + j] !== needle[j]){
//                 break;
//             }
//         }
//         if(j === m){
//             return i;
//         }
//     }
//     return -1;
// }
const haystack = "hello",
      needle = "ll";
console.log(occurrence(haystack, needle));
// time complexity: O(n * m) where n is the length of haystack and m is the length of needle
// space complexity: O(1)

// Approach 2 -> KMP Algorithm(Knuth-Morris-Pratt Algorithm)
function occurrence(haystack, needle) {
  let n = haystack.length;
  let m = needle.length;
  // create lps array
  let lps = [0];
  let i = 0;
  let j = 1;
  while (j < m) {
    if (needle[i] === needle[j]) {
      lps[j] = i + 1;
      i++;
      j++;
    } 
    else {
      if (i === 0) {
        lps[j] = 0;
        j++;
      } 
      else {
        i = lps[i - 1];
      }
    }
  }
  i = j = 0;
    while (i < n) {
        if (haystack[i] === needle[j]) {
            i++;
            j++;
        }
        else {            
            if (j === 0) {
                i++;
            }
            else {
                j = lps[j - 1];
            }
        }
        if (j === m) {
            return i - m;
        }
    }
    return -1;
}



// time complexity: O(n + m) where n is the length of haystack and m is the length of needle
// space complexity: O(m) where m is the length of needle due to lps array
