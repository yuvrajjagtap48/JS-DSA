function isSubsequence(s, t) {
    let i = j = 0;
    while(j < t.length){
        if(s[i] === t[j]){
            ++i;
        }
        ++j;
    }
    return i === s.length;
}

const s = "bac", t = "ahbgdc";
console.log(isSubsequence(s, t));
// time complexity: O(n) where n is the length of string t
// space complexity: O(1)