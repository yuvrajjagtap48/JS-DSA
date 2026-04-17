function isSubsequence(s, t){
    let i = 0; 
    let j = 0;
    while(j < t.length){
        if(s[i] === t[i]){
            ++i;
        }
        ++j;
    }
    return i === s.length;
}

const s = "abc", t = "ahbgdc";
console.log(isSubsequence(s, t));
