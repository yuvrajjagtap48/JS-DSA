function substring(s){
    let longest = 0;
    let start = 0;
    let seen = new Map();
    for(let end = 0; end < s.length; end++){
        if(seen.has(s[end]) && seen.get(s[end]) >= start){
            start = seen.get(s[end]) + 1;
        }   
        seen.set(s[end], end);
        longest = Math.max(longest, end - start + 1);
    }
    return longest;
}

console.log(substring("abcabcbb")); // 3
console.log(substring("bbbbb")); // 1

function substring(s){
    

}