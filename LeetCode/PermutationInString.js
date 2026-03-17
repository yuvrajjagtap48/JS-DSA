function Permutation(s1, s2) {
    if (s1.length > s2.length) return false;
    let count = new Array(26).fill(0);
    for (let i = 0; i < s1.length; i++) {
        count[s1.charCodeAt(i) - 97]++;
    }
    let left = 0, maxFreq = 0;
    for (let right = 0; right < s2.length; right++) {

        let idx = s2.charCodeAt(right) - 97;
        count[idx]--;
        maxFreq = Math.max(maxFreq, -count[idx]);
        if (maxFreq > s1.length) {
            count[s2.charCodeAt(left) - 97]++;
            left++;
        }
        if (right - left + 1 === s1.length) return true;
    }
    return false;
}

console.log(Permutation("ab", "eidbaooo"));
