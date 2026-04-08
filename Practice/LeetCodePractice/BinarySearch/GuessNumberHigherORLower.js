function guessNumber(n) {
    let l = 1;
    let r = n;
    while(l <= r){
        let mid = Math.floor(l + (r-l) / 2);
        let res = guess(mid);
        if(res === 0){
            return mid;
        }
        else if(res === -1){
            r = mid - 1;
        }
        else{
            l = mid + 1;
        }
    }
}


// Forward declaration of guess API.
function guess(num) {
    const pick = 6;
    if(num === pick){
        return 0;
    }
    else if(num > pick){
        return -1;
    }   
    else{
        return 1;
    }
}   
let result = guessNumber(10);
console.log(result);