function LargestOdd(num){
    let n = num.length - 1;
    while(n >= 0){
        if(num[n] % 2 === 1){                 // 0 for even
            return num.substring(0, n+1);
        }
        --n;
    }
    return "";
}

num = "7890953";
console.log(LargestOdd(num));