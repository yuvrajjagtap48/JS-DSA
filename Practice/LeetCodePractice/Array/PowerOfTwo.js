function PowerOfTwo(n){
    if(n === 1) return true;
    if(n % 2 !== 0|| n < 1) return false;
    return PowerOfTwo(n / 2);
}

console.log(PowerOfTwo(16));