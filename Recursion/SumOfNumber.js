function sumOfNumber(num){
    if(num == 0) return 0;
    return num + sumOfNumber(num - 1);
}


console.log(sumOfNumber(5));