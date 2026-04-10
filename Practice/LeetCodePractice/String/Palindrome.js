function Palindrome(x){
    if(x < 0) return false;
    let xCopy = x;
    let rev = 0;
    while(x > 0){
        let rem = x % 10;
        rev = rev * 10 + rev;
        x = Math.floor(x / 10);
    }
    return xCopy === rev;
}

let x = 1251;
console.log(Palindrome(x));

