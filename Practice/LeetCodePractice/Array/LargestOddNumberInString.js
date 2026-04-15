function LargestOdd(num){
    let n = num.length;
    while(n >= 0){
        if(num[n] % 2 === 1){
            return num.substring(0, n+1);
        }
        --n;
    }
    return "";
}


num = "78909000";
console.log(LargestOdd(num));