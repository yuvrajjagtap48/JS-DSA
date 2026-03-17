function isBadVersion(n) {
    return n >= 4;
}


var firstBadVersion = function (n) {
    let left = 1;
    let right = n;
    while(left < right ){
        let mid = Math.floor(left + (right - left) / 2);
        if(!isBadVersion(mid)){
            left = mid + 1;
        }
        else {
            right = mid;
        }
    }
    return right;
}

let n = 7;
console.log(firstBadVersion(n)); 