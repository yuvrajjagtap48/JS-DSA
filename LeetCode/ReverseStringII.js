function ReverseStringII(s, k){
    s = s.split('');

    for(let x = 0; x < s.length; x = x + (2*k)){
        let n = k;
        let mid = Math.floor(n / 2);
        for(let i = 0; i < mid; i++){
            let temp = s[x + i];
            s[x + i] = s[x + n - 1 - i];
            s[x + n - 1 - i] = temp;
        }
    }
    return s.join('');
}

const s = "abcdefghijklmnop";
const k = 2;
console.log(ReverseStringII(s, k));

// Time complexity: O(n) where n is the length of the string
// Space complexity: O(n) since we are creating a new array to hold the characters of the string.
// If we not converting to array then space complexity would be O(1)
