function PowerOfTwo(num){
    if(num == 1) return true;
    if(num % 2 != 0 || num < 1) return false;
    return PowerOfTwo(num / 2);
}

console.log(PowerOfTwo(16));