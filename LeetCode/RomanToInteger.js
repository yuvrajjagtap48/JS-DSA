function romanToInt(s) {
    let map = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000 };
    let res = 0;
    for(let i = 0; i < s.length; i++){
        let curr = map[s[i]];
        let next = map[s[i + 1]];
        if(curr < next){
            res = res - curr;
        }
        else{
            res = res + curr;
        }
    }
    return res;
}

const s = "MCMXCIV";
console.log(romanToInt(s));