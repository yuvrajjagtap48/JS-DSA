function squareRoot(x) {
    if(x < 2) return x; 
    let l = 2;
    let r = Math.trunc(x / 2);
    while(l < r){
        let m = l + Math.floor((r - l) / 2);
        if(x === m**2){
            return m;
        }
        else if(x < m**2){
            r = m - 1;
        }
        else{
            l = m + 1;
        }
    }
    return r;
}

console.log(squareRoot(49)); 
